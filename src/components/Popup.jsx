import styled from "styled-components";
import { usePopupForm } from "../hooks/usePopupForm";
import { useData } from "../context/DataContex";
import { useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

import { DatePickerBlock } from "./Datepicker";
import { SelectComponent } from "./Select";
import { Input } from "./Input";
import { Button } from "./Button";

import { borderRadius, colors, fontWeight } from "../data/variables";
import { generateTransition } from "../data/helpers";

const PopupHolder = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  visibility: hidden;
  transition: ${generateTransition(["opacity", "visibility"])};

  .popup-active & {
    opacity: 1;
    visibility: visible;
  }

  .popup {
    max-width: 390px;
    width: calc(100% - 30px);
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 15px;
    background: ${colors.white};
    border-radius: ${borderRadius.base};

    .dark & {
      background: ${colors.blue800};
    }

    .btn {
      width: 100%;
      margin: 0;
    }
  }

  .close-btn {
    width: 12px;
    height: 12px;
    position: absolute;
    top: 20px;
    right: 15px;
    padding: 0;
    background: transparent;
    border: none;

    &:hover {
      &:before,
      &:after {
        background: ${colors.red};

        .dark & {
          background: ${colors.red};
          opacity: 1;
        }
      }
    }

    &:before,
    &:after {
      transition: ${generateTransition(["background", "opacity"])};
      content: "";
      width: 10px;
      height: 2px;
      position: absolute;
      top: 50%;
      left: 50%;
      background: ${colors.black};

      .dark & {
        background: ${colors.white};
        opacity: 0.2;
      }
    }

    &:before {
      transform: translate(-50%, -50%) rotate(45deg);
    }

    &:after {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
  }

  .react-datepicker-wrapper {
    display: block;
  }

  .react-datepicker__input-container {
    input {
      border-color: ${colors.gray};

      .dark & {
        border-color: ${colors.blue700};
      }

      &:hover,
      &:focus {
        border-color: ${colors.blue};
      }
    }
  }

  .form-control {
    position: relative;

    input {
      padding-right: 50px;
    }
  }

  .currency {
    font-weight: ${fontWeight.semibold};
    position: absolute;
    top: 17px;
    right: 15px;

    .dark & {
      color: ${colors.blue};
    }
  }
`;

export const Popup = ({ closePopup }) => {
  const { errors, handleChange, handleSave, formData } =
    usePopupForm(closePopup);
  const { editItem, activeTab, currency } = useData();
  const holderRef = useRef(null);
  const { t } = useTranslation();

  // Set title for popup
  const addTitle =
    activeTab === "balance"
      ? ""
      : activeTab === "incomes"
      ? t("incomes.popupAddTitle")
      : t("expenses.popupAddTitle");

  const editTitle =
    editItem && activeTab === "incomes"
      ? t("incomes.popupEditTitle")
      : t("expenses.popupEditTitle");

  // Close popup on Esc
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        closePopup(e);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [closePopup]);

  // Close popup if click outside
  const closeByOverlay = (e) => {
    if (e.target === holderRef.current) {
      closePopup(e);
    }
  };

  return (
    <PopupHolder
      className="popup-holder"
      ref={holderRef}
      onClick={closeByOverlay}
    >
      <div className="popup">
        <div className="popup-header">
          <h3>{editItem ? editTitle : addTitle}</h3>
          <button className="close-btn" onClick={closePopup}></button>
        </div>
        <div className="popup-content">
          <form className="popup-form" action="#" onSubmit={handleSave}>
            <DatePickerBlock
              handleChange={handleChange}
              name="date"
              error={!!errors.date}
              value={formData.date}
            />
            <SelectComponent
              handleChange={handleChange}
              name="category"
              error={!!errors.category}
              value={
                formData.category
                  ? {
                      value: formData.category,
                      label: t(`category.${formData.category}`),
                    }
                  : null
              }
            />
            <div className="form-control">
              <Input
                id={`number-${uuidv4()}`}
                type={"number"}
                placeholder={t("fields.sum")}
                name={"value"}
                handleChange={handleChange}
                error={!!errors.value}
                value={formData.value}
              />
              <span className="currency">{currency}</span>
            </div>
            <Input
              id={`description-${uuidv4()}`}
              type={"text"}
              placeholder={t("fields.description")}
              name={"description"}
              handleChange={handleChange}
              value={formData.description}
            />
            <Button type={"submit"}>{t("buttons.save")}</Button>
          </form>
        </div>
      </div>
    </PopupHolder>
  );
};

Popup.propTypes = {
  closePopup: PropTypes.func.isRequired,
};
