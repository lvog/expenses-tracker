import Select from "react-select";
import { useData } from "../context/DataContex";
import { useTranslation } from "react-i18next";

import { currencyOptions } from "../data/data";

export const CurrencySwitcher = () => {
  const { currency, setCurrency } = useData();

  const { t } = useTranslation();

  const selectedOption = currencyOptions.find((opt) => opt.value === currency);

  const handleChange = (selected) => {
    setCurrency(selected.value);
  };

  return (
    <div className="setting-block">
      <h3>{t("settings.currency")}</h3>
      <Select
        className="custom-select"
        classNamePrefix="custom-select"
        options={currencyOptions}
        value={selectedOption}
        onChange={handleChange}
        isSearchable={false}
      />
    </div>
  );
};
