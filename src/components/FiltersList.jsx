import styled from "styled-components";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import {
  fontWeight,
  colors,
  borderRadius,
  breakpoints,
} from "../data/variables";
import { generateTransition } from "../data/helpers";
import { filtersData } from "../data/data";

const FiltersListHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 2px;
  margin-bottom: 15px;
  background: ${colors.white};
  border-radius: ${borderRadius.base};

  @media (min-width: ${breakpoints.desktop}) {
    min-width: 300px;
    margin-right: 10px;
  }

  .dark & {
    background: ${colors.blue700};
  }
`;

const Filter = styled.input`
  display: inline-block;
  vertical-align: middle;
  width: calc(33.33% - 4px);
  height: 46px;
  padding: 15px 20px;
  font-family: inherit;
  font-weight: ${fontWeight.semibold};
  text-align: center;
  margin: 0 2px;
  border: 0;
  border-radius: ${borderRadius.base};
  transition: ${generateTransition(["color", "background"])};

  &:hover,
  &.active {
    color: ${colors.blue};
    background: ${colors.lightBlue};

    .dark & {
      color: ${colors.white};
      background: ${colors.blue};
    }
  }
`;

export const FiltersList = ({ view, setView, setFilterDate }) => {
  const { t } = useTranslation();

  const handleFilterClick = (value) => {
    setView(value);
    setFilterDate(new Date());
  };

  return (
    <FiltersListHolder className="filters-block">
      {filtersData.map((item) => {
        const { id, name } = item;
        return (
          <Filter
            className={view === id ? "active" : ""}
            key={`filter-${id}`}
            type="button"
            value={t(name)}
            onClick={() => handleFilterClick(id)}
          />
        );
      })}
    </FiltersListHolder>
  );
};

FiltersList.propTypes = {
  setView: PropTypes.func,
  view: PropTypes.string,
  setFilterDate: PropTypes.func,
};
