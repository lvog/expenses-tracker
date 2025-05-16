import Select from "react-select";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const languageOptions = [
  { value: "en", label: "English" },
  { value: "uk", label: "Українська" },
];

export const LanguageSwitcher = () => {
  const { i18n, t } = useTranslation();

  // State
  const [selectedOption, setSelectedOption] = useState(
    () =>
      languageOptions.find((opt) => opt.value === i18n.language) ||
      languageOptions[0]
  );

  // Load saved language from localStorage
  useEffect(() => {
    const savedLang = localStorage.getItem("appLanguage");
    if (savedLang && savedLang !== i18n.language) {
      i18n.changeLanguage(savedLang);
      setSelectedOption(languageOptions.find((opt) => opt.value === savedLang));
    }
  }, [i18n]);

  // Handle language change
  const handleChange = (option) => {
    setSelectedOption(option);
    i18n.changeLanguage(option.value);
    localStorage.setItem("appLanguage", option.value);
  };

  return (
    <div className="setting-block">
      <h3>{t("settings.language")}</h3>
      <Select
        classNamePrefix="custom-select"
        className="custom-select"
        value={selectedOption}
        onChange={handleChange}
        options={languageOptions}
        isSearchable={false}
      />
    </div>
  );
};
