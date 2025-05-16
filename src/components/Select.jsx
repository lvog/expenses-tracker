import Select from "react-select";
import styled from "styled-components";
import { useData } from "../context/DataContex";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

import { fontSize, colors, borderRadius, fontWeight } from "../data/variables";
import { incomesCategory, expensesCategory } from "../data/data";

const CategorySelect = styled(Select)`
  &.error {
    border-color: ${colors.red};

    .dark & {
      border-color: ${colors.red};
    }
  }

  .custom-select__placeholder {
    font-weight: ${fontWeight.normal};
  }

  i {
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${fontSize.md};
    padding: 2px;
    border-radius: ${borderRadius.sm};

    .dark & {
      color: ${colors.black};
    }
  }
`;

// Custom option for dropdown options
const customOptionLabel = (data) => (
  <div style={{ display: "flex", alignItems: "center" }}>
    <i className={`icon-${data.value}`} style={{ marginRight: "10px" }}></i>
    <span className="value" data-value={data.value}>
      {data.label}
    </span>
  </div>
);

export const SelectComponent = ({ handleChange, name, value, error }) => {
  const { activeTab } = useData();
  const { t } = useTranslation();

  // Get categories
  const categories =
    activeTab === "incomes" ? incomesCategory : expensesCategory;

  // Convert categories to react-select format
  const options = categories.map((item) => ({
    value: item.category,
    label: t(`category.${item.category}`),
  }));

  return (
    <CategorySelect
      classNamePrefix="custom-select"
      className={`custom-select ${error ? "error" : ""}`}
      placeholder={t("fields.select")}
      value={value}
      onChange={(selectedOption) =>
        handleChange(name, {
          value: selectedOption.value,
          label: selectedOption.label,
        })
      }
      options={options}
      getOptionLabel={customOptionLabel}
      isSearchable={false}
    />
  );
};

SelectComponent.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  error: PropTypes.bool,
  value: PropTypes.string,
};
