import { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import PropTypes from "prop-types";

import { incomes, expenses, menuItems } from "../data/data";

// Create context to share data across components
const DataContext = createContext();

// Custom hook to use the DataContext
export const useData = () => useContext(DataContext);

// Add unique ID to each item in the list
const addId = (list) =>
  list.map((item) => ({
    ...item,
    id: uuidv4(),
  }));

// Sort items by descending date
const sortByDate = (list) =>
  [...list].sort((a, b) => new Date(b.date) - new Date(a.date));

// Merge and sort incomes and expenses for balance tab
const getTransactions = (incomes, expenses) => {
  return sortByDate([...incomes, ...expenses]);
};

export const DataProvider = ({ children }) => {
  // Load entries from localStorage or use initial data
  const getInitialEntries = () => {
    const stored = localStorage.getItem("entries");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        return {
          incomes: sortByDate(parsed.incomes || []),
          expenses: sortByDate(parsed.expenses || []),
          balance: sortByDate(
            getTransactions(parsed.incomes || [], parsed.expenses || [])
          ),
        };
      } catch (err) {
        console.error("Invalid localStorage data:", err);
      }
    }

    // Generate initial data (no data in localStorage)
    const initialIncomes = addId(incomes);
    const initialExpenses = addId(expenses);
    return {
      incomes: sortByDate(initialIncomes),
      expenses: sortByDate(initialExpenses),
      balance: sortByDate(getTransactions(initialIncomes, initialExpenses)),
    };
  };

  // State
  const [entries, setEntries] = useState(getInitialEntries);
  const [editItem, setEditItem] = useState(null);
  const [activeTab, setActiveTab] = useState("info");
  const [reset, setReset] = useState(false);

  // Check login status from localStorage
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("is-logged-in") === "true";
  });

  // Load currency from localStorage or use default
  const [currency, setCurrencyState] = useState(() => {
    return localStorage.getItem("currency") || "₴";
  });

  // Save entries to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("entries", JSON.stringify(entries));
  }, [entries]);

  // Handle tab navigation from URL hash
  useEffect(() => {
    const getValidTab = (hash) => {
      const cleanHash = hash.replace("#", "");
      return menuItems.some((item) => item.id.toLowerCase() === cleanHash)
        ? cleanHash
        : null;
    };

    const currentHash = getValidTab(window.location.hash);
    if (currentHash) {
      setActiveTab(currentHash);
    }

    const handleHashChange = () => {
      const newHash = getValidTab(window.location.hash);
      if (newHash) {
        setActiveTab(newHash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [setActiveTab]);

  // Restore login state on first render
  useEffect(() => {
    const storedLogin = localStorage.getItem("is-logged-in");
    if (storedLogin === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  // Update login status in localStorage
  useEffect(() => {
    localStorage.setItem("is-logged-in", isLoggedIn);
  }, [isLoggedIn]);

  // Recalculate balance list from incomes and expenses
  const updateTransactions = (newIncomes, newExpenses) => {
    return getTransactions(newIncomes, newExpenses);
  };

  // Update selected currency and save it
  const setCurrency = (newCurrency) => {
    setCurrencyState(newCurrency);
    localStorage.setItem("currency", newCurrency);
  };

  // Add new entry (income or expense)
  const handleAddEntry = (newEntry) => {
    setEntries((prev) => {
      const updatedTabList = sortByDate([...prev[activeTab], newEntry]);
      const newEntries = {
        ...prev,
        [activeTab]: updatedTabList,
      };
      newEntries.balance = updateTransactions(
        newEntries.incomes,
        newEntries.expenses
      );
      return newEntries;
    });
  };

  // Edit existing entry
  const handleChangeEntry = (newEntry) => {
    setEntries((prev) => {
      const updatedTabList = sortByDate(
        prev[activeTab].map((entry) =>
          entry.id === editItem.id ? newEntry : entry
        )
      );
      const newEntries = {
        ...prev,
        [activeTab]: updatedTabList,
      };
      newEntries.balance = updateTransactions(
        newEntries.incomes,
        newEntries.expenses
      );
      return newEntries;
    });
  };

  // Delete entry by id
  const handleDeleteEntry = (id, tab) => {
    setEntries((prev) => {
      const updatedTabList = prev[tab].filter((item) => item.id !== id);
      const newEntries = {
        ...prev,
        [tab]: updatedTabList,
      };
      newEntries.balance = updateTransactions(
        newEntries.incomes,
        newEntries.expenses
      );
      return newEntries;
    });
  };

  return (
    <DataContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        currency,
        setCurrency,
        entries,
        handleChangeEntry,
        handleAddEntry,
        handleDeleteEntry,
        reset,
        setReset,
        activeTab,
        setActiveTab,
        editItem,
        setEditItem,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
