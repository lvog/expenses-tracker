import { useState, useEffect } from "react";
import { useData } from "../context/DataContex";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";

// Custom hook to manage popup form logic
export const usePopupForm = (closePopup) => {
  const {
    handleAddEntry,
    setReset,
    editItem,
    handleChangeEntry,
    setEditItem,
    activeTab,
  } = useData();

  const { t } = useTranslation();

  // Form state
  const [formData, setFormData] = useState({
    id: editItem?.id || "",
    date: editItem?.date || null,
    category: editItem?.category || "",
    value: +editItem?.value || "",
    description: editItem?.description || "",
    note: editItem?.note || "",
  });

  // Form validation errors
  const [errors, setErrors] = useState({});

  // Update form when switching between add/edit mode
  useEffect(() => {
    if (editItem) {
      setFormData({
        id: editItem.id,
        date: new Date(editItem.date),
        category: editItem.category,
        value: +editItem.value,
        description: editItem.description ? t(editItem.description) : "",
        note: editItem.note,
      });
    } else {
      setFormData({
        id: "",
        date: null,
        category: "",
        value: "",
        description: "",
        note: "",
      });
    }
  }, [editItem]);

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    if (!formData.date) newErrors.date = true;
    if (!formData.category) newErrors.category = true;
    if (!formData.value || +formData.value <= 0) newErrors.value = true;

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Reset form to initial state
  const handleReset = () => {
    setFormData({
      date: null,
      category: "",
      description: "",
      value: "",
    });
    setErrors({});
    setReset(true);
  };

  // Save entry (create or update)
  const handleSave = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const formattedData = {
      ...formData,
      value: +formData.value,
      id: editItem?.id || uuidv4(),
      note: activeTab,
    };

    if (editItem) {
      handleChangeEntry(formattedData);
    } else {
      handleAddEntry(formattedData);
    }

    setEditItem(null);
    handleReset();
    closePopup(e);
  };

  // Update form fields and manage validation
  const handleChange = (name, value) => {
    if (value && typeof value === "object" && "value" in value) {
      // For react-select
      setFormData((prev) => ({
        ...prev,
        [name]: value.value,
      }));
      name = "category";
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Update error state
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      const isEmpty =
        value === "" ||
        value === null ||
        value === undefined ||
        (name === "value" && +value <= 0);
      if (!isEmpty) delete newErrors[name];
      else newErrors[name] = true;

      return newErrors;
    });
  };

  return {
    errors,
    handleChange,
    handleSave,
    formData,
  };
};
