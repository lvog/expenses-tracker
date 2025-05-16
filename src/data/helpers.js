import i18n from "../i18n";
import { transition } from "./variables";

// Make transition for css properties
export const generateTransition = (
  properties,
  duration = transition.duration,
  easing = transition.easing
) => {
  return properties.map((prop) => `${prop} ${duration} ${easing}`).join(", ");
};

// Reset default list(ul,ol) properties
export const resetList = () => `
  margin: 0;
  padding: 0;
  list-style: none;
`;

// Change date for word (Today, Yesterday)
export const getDisplayDate = (date) => {
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  const checkSameDate = (date1, date2) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  if (checkSameDate(date, today)) return i18n.t("date.today");
  if (checkSameDate(date, yesterday)) return i18n.t("date.yesterday");

  return date.toLocaleDateString(i18n.language);
};

// Reset CSS transition
export const disableTransition = () => {
  document.body.classList.add("no-transition");
  setTimeout(() => {
    document.body.classList.remove("no-transition");
  }, 0);
};

// Text overflow
// export const cutText = (text, max = 7) => {
//   if (!text) return "";
//   return text.length > max ? text.slice(0, max) + "..." : text;
// };
