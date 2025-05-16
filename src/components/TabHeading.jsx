import styled from "styled-components";
import { useState, useEffect } from "react";
import { useData } from "../context/DataContex";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

import { ExportCSV } from "./ExportCSV";
import { Button } from "./Button";
import { Popup } from "./Popup";

import { motionAnimation } from "../data/data";

const TabHeadingHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;

  h2 {
    margin: 5px 0;
    padding-right: 30px;
  }

  .btn-holder {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 0 -5px;
  }

  .btn {
    min-width: 160px;
    margin: 5px;
  }
`;

export const TabHeading = ({ text, id, period, view, data }) => {
  const { entries, editItem, setEditItem, activeTab } = useData();
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const { t } = useTranslation();

  // Define button text
  const buttonText =
    activeTab === "balance"
      ? ""
      : activeTab === "incomes"
      ? t("incomes.button")
      : t("expenses.button");

  // Open popup
  const openPopup = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  // Close popup
  const closePopup = (e) => {
    e.preventDefault();
    setIsOpen(false);
    setEditItem(null);
  };

  // Toggle the "popup-active" class on body
  useEffect(() => {
    if (isOpen || editItem) {
      document.body.classList.add("popup-active");
    } else {
      document.body.classList.remove("popup-active");
    }
  }, [isOpen, editItem]);

  // Track active state for ExportCSV
  useEffect(() => {
    setIsActive(entries[id]?.length > 0);
  }, [entries, id]);

  const listKey = isActive ? "active-btn" : "hide-btn";
  const showControls = activeTab !== "balance";

  return (
    <TabHeadingHolder>
      <h2>{text}</h2>
      <AnimatePresence mode="wait">
        <motion.div
          className="btn-holder"
          key={listKey}
          variants={motionAnimation}
          initial="hidden"
          animate="visible"
          exit="exit"
          transition="transition"
        >
          {isActive && (
            <ExportCSV id={id} period={period} view={view} data={data} />
          )}
          {showControls && (
            <>
              <Button onClick={openPopup}>{buttonText}</Button>
              <Popup closePopup={closePopup} text={text} />
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </TabHeadingHolder>
  );
};

TabHeading.propTypes = {
  text: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  period: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  view: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};
