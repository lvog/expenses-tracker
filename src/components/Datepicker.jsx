import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { enUS, uk } from "date-fns/locale";

import styled from "styled-components";
import { useData } from "../context/DataContex";
import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

import { fontWeight, borderRadius, colors } from "../data/variables";
import { generateTransition } from "../data/helpers";
import { minDate, maxDate } from "../data/data";

const DatePickerWrapper = styled.div`
  margin-bottom: 15px;

  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker {
    font-family: inherit;
    font-weight: ${fontWeight.semibold};
    padding: 15px;
    border: 0;
    border-radius: ${borderRadius.base};
    box-shadow: 0 0 10px 0 ${colors.rgbaBlue};

    .dark & {
      color: ${colors.white};
      background: ${colors.blue700};
    }
  }

  .react-datepicker__input-container {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }

  .react-datepicker__view-calendar-icon {
    input {
      padding: 10px 50px 10px 15px;

      &.error {
        border-color: ${colors.red};

        .dark & {
          border-color: ${colors.red};
        }
      }

      &:read-only {
        pointer-events: none;
      }

      &:disabled {
        opacity: 0.5;
        pointer-events: none;
      }
    }
  }

  .react-datepicker__header {
    padding: 0 0 10px;
    background: inherit;
    color: ${colors.darkBlue};
    border-bottom: 0;
    border-top-left-radius: ${borderRadius.base};

    .dark & {
      color: ${colors.blue};
    }
  }

  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-top-right-radius: ${borderRadius.base};
  }

  .react-datepicker__navigation {
    top: 10px;
  }

  .react-datepicker__navigation--next {
    right: 30px;
  }

  .react-datepicker__navigation--previous {
    left: 30px;
  }

  .react-datepicker__day-name,
  .react-datepicker__current-month,
  .react-datepicker__month-text {
    text-transform: capitalize;
  }

  .react-datepicker__current-month,
  .react-datepicker__day-name {
    color: inherit;
    margin-bottom: 10px;
  }

  .react-datepicker__navigation *::before {
    transition: ${generateTransition(["border-color"])};
  }

  .react-datepicker__month {
    margin: 0;
  }

  .react-datepicker__day-name,
  .react-datepicker__day {
    width: 40px;
  }

  .react-datepicker__day {
    line-height: 40px;
    transition: ${generateTransition(["color", "background", "border-radius"])};

    .dark & {
      color: ${colors.white};

      &.react-datepicker__day--disabled {
        color: #${colors.darkGray};
        opacity: 0.5;
      }
    }
  }

  .react-datepicker__day--weekend {
    color: ${colors.red};

    &.react-datepicker__day--disabled {
      color: #${colors.darkGray};
    }

    .dark & {
      color: ${colors.red};

      &.react-datepicker__day--selected {
        color: ${colors.white};
      }

      &.react-datepicker__day--disabled {
        color: #${colors.darkGray};
        opacity: 0.5;
      }
    }
  }

  .react-datepicker__day--outside-month {
    color: #${colors.darkGray};

    .dark & {
      color: #${colors.darkGray};
      opacity: 0.5;
    }
  }

  .react-datepicker__day--keyboard-selected,
  .react-datepicker__day--selected,
  .react-datepicker__month-text--keyboard-selected,
  .react-datepicker__year-text--selected {
    color: ${colors.white};
    background: ${colors.blue};
  }

  .react-datepicker__day:not([aria-disabled="true"]):hover,
  .react-datepicker__month-text:not([aria-disabled="true"]):hover,
  .react-datepicker__year-text:not([aria-disabled="true"]):hover {
    color: ${colors.white};
    background: ${colors.sky};
  }

  .react-datepicker__day--keyboard-selected:not([aria-disabled="true"]):hover,
  .react-datepicker__day--selected:not([aria-disabled="true"]):hover,
  .react-datepicker__month-text--keyboard-selected:not(
      [aria-disabled="true"]
    ):hover,
  .react-datepicker__year-text--selected:not([aria-disabled="true"]):hover {
    background: ${colors.darkBlue};
  }

  .react-datepicker__month-text,
  .react-datepicker__year-text {
    padding: 10px 15px;
    transition: ${generateTransition(["color", "background", "border-radius"])};
  }

  .react-datepicker__year-text--selected.react-datepicker__year-text--disabled {
    background: transparent;
  }

  .react-datepicker__year-text--disabled {
    color: #${colors.darkGray};
    pointer-events: none;

    .dark & {
      opacity: 0.5;
    }
  }

  .react-datepicker__month-text--disabled {
    .dark & {
      opacity: 0.5;
    }
  }

  .react-datepicker__year-wrapper {
    justify-content: center;
  }

  .react-datepicker__triangle {
    display: none;
  }

  .react-datepicker__input-container {
    .react-datepicker__calendar-icon {
      padding-right: 15px;
    }
  }

  .react-datepicker__calendar-icon {
    font-weight: ${fontWeight.semibold};

    .dark & {
      color: ${colors.blue};
    }
  }
`;

export const DatePickerBlock = ({
  handleChange,
  name,
  error,
  setFilterDate,
  view,
  value,
  disabled,
}) => {
  const { i18n, t } = useTranslation();

  // Locales for datepicker
  const localeMap = {
    en: enUS,
    uk: uk,
  };

  // Get current locale
  const currentLocale = localeMap[i18n.language] || enUS;

  // State
  const [startDate, setStartDate] = useState(null);
  const [dateFormat, setDateFormat] = useState(t("dateFormat.day"));

  const { reset } = useData();

  const prevViewRef = useRef(view);

  // Check component (true - popup (add new item), false - filtration)
  const isControlled = typeof handleChange === "function" && name;

  // Update date format on language change
  useEffect(() => {
    setDateFormat(t("dateFormat.day"));
  }, [i18n.language]);

  // Adjust date format and initial date
  useEffect(() => {
    if (!view || isControlled) return;

    const format =
      view === "month"
        ? t("dateFormat.month")
        : view === "year"
        ? "yyyy"
        : t("dateFormat.day");
    setDateFormat(format);

    setStartDate(new Date());
  }, [view, isControlled, i18n.language, t]);

  // Clear datepicker
  useEffect(() => {
    if (!reset) return;

    if (prevViewRef.current !== view) {
      setStartDate(new Date());
      return;
    }

    prevViewRef.current = view;
    setStartDate(null);
  }, [reset, view]);

  // Change handler for date selection
  const handleDateChange = (newDate) => {
    setStartDate(newDate);
    if (isControlled) {
      handleChange(name, newDate);
    } else {
      setFilterDate && setFilterDate(newDate);
    }
  };

  return (
    <DatePickerWrapper className="datepicker-holder">
      <DatePicker
        className={error ? "error" : undefined}
        placeholderText={t("fields.datepicker")}
        showIcon
        selected={value || startDate}
        onChange={(date) => handleDateChange(date)}
        icon="icon-calendar"
        dateFormat={dateFormat}
        showMonthYearPicker={view === "month" && !isControlled}
        showYearPicker={view === "year" && !isControlled}
        closeOnScroll={true}
        minDate={minDate}
        maxDate={maxDate}
        readOnly={!isControlled && !view}
        locale={currentLocale}
        disabled={disabled}
        onKeyDown={(e) => e.preventDefault()}
      />
    </DatePickerWrapper>
  );
};

DatePickerBlock.propTypes = {
  handleChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  setFilterDate: PropTypes.func,
  view: PropTypes.string,
  value: PropTypes.instanceOf(Date),
};
