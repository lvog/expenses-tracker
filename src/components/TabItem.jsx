import styled from "styled-components";
import { useData } from "../context/DataContex";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

import { TabHeading } from "./TabHeading";
import { FiltersBlock } from "./FiltersBlock";
import { SumBlock } from "./SumBlock";
import { Chart } from "./Chart";
import { RecordsBlock } from "./RecordsBlock";
import { Message } from "./Message";

import { fontSize, breakpoints } from "../data/variables";
import { months, motionAnimation } from "../data/data";
import { getDisplayDate } from "../data/helpers";

const TabHolder = styled.div`
  .row {
    @media (min-width: ${breakpoints.desktop}) {
      display: flex;
      margin: 0 -10px;
    }

    @media (min-width: ${breakpoints.widescreen}) {
      margin: 0 -15px;
    }
  }

  .holder {
    @media (min-width: ${breakpoints.desktop}) {
      order: 2;
    }
  }

  .holder,
  .records-holder {
    @media (min-width: ${breakpoints.desktop}) {
      width: 50%;
      margin: 0 10px;
    }

    @media (min-width: ${breakpoints.widescreen}) {
      margin: 0 15px;
    }
  }

  .message {
    font-size: ${fontSize.xl};
    padding: 15px;
    text-align: center;
  }
`;

export const TabItem = ({ id }) => {
  const { t, i18n } = useTranslation();

  const { entries, activeTab, setReset } = useData();

  // State
  const [view, setView] = useState("");
  const [filterDate, setFilterDate] = useState(null);
  const [period, setPeriod] = useState(t("time"));
  const [filteredList, setFilteredList] = useState(entries[id]);

  // Set tab title
  const title =
    id === "balance"
      ? t("balance.title")
      : id === "incomes"
      ? t("incomes.title")
      : t("expenses.title");

  // Format date
  const getFormattedDate = (view, date) => {
    const monthsValue = months;
    if (view === "month") {
      return `${i18n.t(monthsValue[date.getMonth()])} ${date.getFullYear()}`;
    } else if (view === "year") {
      return date.getFullYear();
    } else {
      return date.toLocaleDateString(i18n.language);
    }
  };

  // Filter records by view and date
  const filterByDateView = (list, filter, view) => {
    if (!filter) return list;

    const filterDate = new Date(filter);

    return list.filter((item) => {
      const itemDate = new Date(item.date);
      const isSameDate =
        itemDate.getDate() === filterDate.getDate() &&
        itemDate.getMonth() === filterDate.getMonth() &&
        itemDate.getFullYear() === filterDate.getFullYear();

      const isSameMonthYear =
        itemDate.getMonth() === filterDate.getMonth() &&
        itemDate.getFullYear() === filterDate.getFullYear();

      const isSameYear = itemDate.getFullYear() === filterDate.getFullYear();

      if (view === "day") return isSameDate;
      if (view === "month") return isSameMonthYear;
      if (view === "year") return isSameYear;

      return false;
    });
  };

  // Update period label
  const updatePeriod = () => {
    if (!view || !filterDate) {
      setPeriod(t("time"));
    } else if (view === "day") {
      setPeriod(getDisplayDate(filterDate));
    } else {
      setPeriod(getFormattedDate(view, filterDate));
    }
  };

  // Reset filters and records to default state
  const resetFilterState = () => {
    setView("");
    setFilterDate(null);
    setPeriod(t("time"));
    setFilteredList(entries[id]);
  };

  const resetFilters = () => {
    resetFilterState();
    setReset(true);
  };

  // Handle filtering
  const handleFilter = (e) => {
    e.preventDefault();
    if (!view || !filterDate) {
      setFilteredList(entries[id]);
      setPeriod(t("time"));
      return;
    }

    const filtered = filterByDateView(entries[id], filterDate, view);
    setFilteredList(filtered);
    updatePeriod();
  };

  // Reset filters and records to default state, when entries or tab ID change
  useEffect(() => {
    resetFilterState();
  }, [entries, id]);

  // Update period label when language changes
  useEffect(() => {
    updatePeriod();
  }, [i18n.language]);

  const hasData = filteredList.length > 0;

  // Animation key to re-render on records change
  const listKey = hasData
    ? filteredList.map((item) => item.id).join("-")
    : "message";

  return (
    <TabHolder className={`tab ${id === activeTab ? "active" : "tab-hidden"}`}>
      <div className="container">
        <TabHeading
          text={title}
          id={id}
          period={period}
          view={view}
          data={filteredList}
        />
        <FiltersBlock
          id={id}
          view={view}
          setView={setView}
          filterDate={filterDate}
          setFilterDate={setFilterDate}
          handleFilter={handleFilter}
          resetFilters={resetFilters}
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={listKey}
            variants={motionAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition="transition"
          >
            {hasData ? (
              <div className="row">
                <div className="holder">
                  <SumBlock id={id} text={title} data={filteredList} />
                  <Chart data={filteredList} />
                </div>
                <RecordsBlock data={filteredList} period={period} />
              </div>
            ) : (
              <Message>
                <i className="icon-no-result"></i>
                <strong className="h3">{t("messages.error")}</strong>
              </Message>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </TabHolder>
  );
};

TabItem.propTypes = {
  id: PropTypes.string.isRequired,
};
