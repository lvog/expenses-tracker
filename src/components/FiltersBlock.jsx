import styled from "styled-components";
import { useData } from "../context/DataContex";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

import { FiltersList } from "./FiltersList";
import { DatePickerBlock } from "./Datepicker";
import { Button } from "./Button";

import { breakpoints } from "../data/variables";
import { motionAnimation } from "../data/data";
import { useEffect, useState } from "react";

const FiltersHolder = styled.form`
  margin-bottom: 5px;

  @media (min-width: ${breakpoints.desktop}) {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    margin: 0 -5px 10px;
  }

  @media (min-width: ${breakpoints.widescreen}) {
    margin-bottom: 20px;
  }

  .filters-block,
  .datepicker-holder {
    @media (min-width: ${breakpoints.desktop}) {
      width: calc(50% - 10px);
      margin: 0 5px 10px;
    }

    @media (min-width: ${breakpoints.widescreen}) {
      width: auto;
    }
  }

  .datepicker-holder {
    @media (min-width: ${breakpoints.widescreen}) {
      max-width: 198px;
    }
  }

  .btn-holder {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    margin: 0 -5px;

    @media (min-width: ${breakpoints.desktop}) {
      margin: 0;
    }

    @media (min-width: ${breakpoints.widescreen}) {
      width: auto;
    }
  }

  .btn {
    margin: 0 5px 10px;

    &.btn-outline {
      min-width: 172px;
    }
  }
`;

export const FiltersBlock = ({
  id,
  view,
  setView,
  filterDate,
  setFilterDate,
  handleFilter,
  resetFilters,
}) => {
  const { entries } = useData();
  const [isActive, setIsActive] = useState(false);
  const { t } = useTranslation();

  // Track active state for FiltersHolder
  useEffect(() => {
    setIsActive(entries[id]?.length > 0);
  }, [entries, id]);

  const isDisable = filterDate && view ? true : false;
  const listKey = isActive ? "results" : "no-results";

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={listKey}
        variants={motionAnimation}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition="transition"
      >
        {isActive ? (
          <FiltersHolder onSubmit={handleFilter}>
            <FiltersList
              view={view}
              setView={setView}
              setFilterDate={setFilterDate}
            />
            <DatePickerBlock
              date={filterDate}
              setFilterDate={setFilterDate}
              view={view}
              disabled={!isDisable}
            />
            <div className="btn-holder">
              <Button type={"submit"} disabled={!isDisable}>
                {t("buttons.filter")}
              </Button>
              <Button
                className={`btn-outline ${isDisable ? "" : "hide"}`}
                type={"reset"}
                onClick={resetFilters}
              >
                {t("buttons.clear")}
              </Button>
            </div>
          </FiltersHolder>
        ) : (
          ""
        )}
      </motion.div>
    </AnimatePresence>
  );
};

FiltersBlock.propTypes = {
  id: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
  setView: PropTypes.func.isRequired,
  filterDate: PropTypes.instanceOf(Date),
  setFilterDate: PropTypes.func.isRequired,
  handleFilter: PropTypes.func,
  resetFilters: PropTypes.func,
};
