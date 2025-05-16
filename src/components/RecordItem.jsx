import styled from "styled-components";
import { useEffect, useRef } from "react";
import { useData } from "../context/DataContex";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

import {
  fontWeight,
  colors,
  borderRadius,
  breakpoints,
} from "../data/variables";
import { resetList, generateTransition, getDisplayDate } from "../data/helpers";

const RecordItemHolder = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  border-bottom: 1px solid ${colors.lightBlue};

  .dark & {
    border-bottom-color: ${colors.blue700};
  }

  &:first-child {
    border-top: 1px solid ${colors.lightBlue};

    .dark & {
      border-top-color: ${colors.blue700};
    }
  }

  .date {
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
  }

  .description,
  .sum {
    overflow-wrap: anywhere;
  }

  .description {
    max-width: 60%;
    display: flex;
    align-items: center;
    font-weight: ${fontWeight.semibold};

    i {
      min-width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      font-style: normal;
      font-weight: ${fontWeight.medium};
      color: ${colors.white};
      padding: 2px;
      margin-right: 15px;
      border-radius: ${borderRadius.base};

      .dark & {
        color: ${colors.blue800};
      }
    }
  }

  .info {
    max-width: 40%;
    position: relative;
    padding-left: 10px;
  }

  .sum {
    font-weight: ${fontWeight.bold};
    padding-right: 40px;

    &:only-child {
      padding: 0;
    }
  }

  .edit {
    width: 30px;
    height: 30px;
    padding: 0;
    background: transparent;
    border: none;
    color: ${colors.blue};
    border-radius: ${borderRadius.rounded};
    position: absolute;
    top: 55%;
    right: 0;
    transform: translateY(-50%);
    transition: ${generateTransition(["color", "background"])};

    &.active,
    &:hover {
      background: ${colors.lightBlue};

      .dark & {
        color: ${colors.white};
        background: ${colors.blue900};
      }
    }
  }

  .edit-popup {
    position: absolute;
    top: 100%;
    right: 5px;
    padding: 15px;
    background: ${colors.white};
    border-radius: ${borderRadius.base};
    opacity: 0;
    visibility: hidden;
    transition: ${generateTransition(["opacity", "visibility"])};
    box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.1);
    z-index: 1;

    @media (min-width: ${breakpoints.desktop}) {
      top: 50%;
      left: calc(100% + 5px);
      right: auto;
      transform: translateY(-50%);
    }

    .dark & {
      background: ${colors.blue900};
    }

    &.drop-active {
      opacity: 1;
      visibility: visible;
    }
  }

  .btn-list {
    ${resetList}

    li {
      margin-bottom: 10px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  [class^="btn"] {
    font-weight: ${fontWeight.semibold};
    color: ${colors.black};
    padding: 0;
    background: transparent;
    border: none;
    transition: ${generateTransition(["color"])};

    .dark & {
      color: ${colors.white};
    }

    i {
      margin-right: 10px;
    }
  }

  .btn-remove {
    &:hover {
      color: ${colors.red};
    }
  }

  .btn-edit {
    &:hover {
      color: ${colors.blue};
    }
  }
`;

export const RecordItem = ({
  date,
  period,
  category,
  description,
  note,
  sum,
  isOpenDrop,
  openDrop,
  closeDrop,
  onRemove,
  onEdit,
}) => {
  const popupRef = useRef(null);
  const { activeTab, currency } = useData();

  const { t } = useTranslation();

  // Toggle edit drop
  useEffect(() => {
    if (!popupRef.current) return;

    if (isOpenDrop) {
      popupRef.current.classList.add("drop-active");
    } else {
      popupRef.current.classList.remove("drop-active");
    }
  }, [isOpenDrop]);

  // Close edit drop if click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        closeDrop();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeDrop]);

  return (
    <RecordItemHolder>
      {date && getDisplayDate(date) !== period && (
        <span className="date">{getDisplayDate(date)}</span>
      )}
      <span className="description">
        <i className={`icon-${category}`}></i>
        {description}
      </span>
      <div className="info">
        <span
          className="sum"
          style={{
            color:
              activeTab !== "balance"
                ? undefined
                : note === "expenses"
                ? `${colors.lightRed}`
                : `${colors.green}`,
          }}
        >
          {currency} {sum.toFixed(0)}
        </span>
        {activeTab !== "balance" ? (
          <>
            <button
              className={`edit ${isOpenDrop ? "active" : ""}`}
              onClick={openDrop}
            >
              <i className="icon-dots"></i>
            </button>
            <div className="edit-popup" ref={popupRef}>
              <ul className="btn-list">
                <li>
                  <button className="btn-remove" onClick={onRemove}>
                    <i className="icon-trash"></i>
                    {t("editPopup.remove")}
                  </button>
                </li>
                <li>
                  <button className="btn-edit" onClick={onEdit}>
                    <i className="icon-edit"></i>
                    {t("editPopup.edit")}
                  </button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          ""
        )}
      </div>
    </RecordItemHolder>
  );
};

RecordItem.propTypes = {
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  sum: PropTypes.number.isRequired,
  date: PropTypes.instanceOf(Date),
  period: PropTypes.string,
  note: PropTypes.string.isRequired,
  openDrop: PropTypes.func.isRequired,
  isOpenDrop: PropTypes.bool,
  closeDrop: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};
