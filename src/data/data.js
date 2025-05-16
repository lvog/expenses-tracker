import { colors } from "./variables";

export const userData = {
  userName: "John Brown",
  password: "1234",
  email: "john.brown@gmail.com",
};

export const menuItems = [
  { id: "info", name: "menu.info", icon: "icon-info" },
  { id: "balance", name: "menu.balance", icon: "icon-balance" },
  { id: "incomes", name: "menu.incomes", icon: "icon-incomes" },
  { id: "expenses", name: "menu.expenses", icon: "icon-expenses" },
  { id: "settings", name: "menu.settings", icon: "icon-settings" },
  { id: "logout", name: "menu.logOut", icon: "icon-log-out" },
];

export const incomes = [
  {
    date: new Date("2024-12-30"),
    note: "incomes",
    category: "bonus",
    value: 10000,
  },
  {
    date: new Date("2025-01-05"),
    note: "incomes",
    category: "deposits",
    value: 7700,
  },
  {
    date: new Date("2025-01-11"),
    note: "incomes",
    category: "salary",
    value: 30000,
  },
  {
    date: new Date("2025-02-25"),
    note: "incomes",
    category: "freelance",
    value: 2500,
  },
];

export const incomesCategory = [
  { category: "bonus", color: colors.orange },
  {
    category: "deposits",
    color: colors.purple,
  },
  { category: "salary", color: colors.sky },
  {
    category: "freelance",
    color: colors.cyan,
  },
  { category: "other", color: colors.indigo },
];

export const expenses = [
  {
    date: new Date("2024-12-20"),
    note: "expenses",
    category: "other",
    description: "descriptions.presents",
    value: 3000,
  },
  {
    date: new Date("2025-01-25"),
    note: "expenses",
    category: "clothing",
    description: "Sinsay",
    value: 1162,
  },
  {
    date: new Date("2025-02-22"),
    note: "expenses",
    category: "products",
    description: "descriptions.meat",
    value: 400,
  },
  {
    date: new Date("2025-02-21"),
    note: "expenses",
    category: "products",
    description: "ATB",
    value: 1053,
  },
  {
    date: new Date("2025-02-21"),
    note: "expenses",
    category: "cafe",
    description: "I love kebab",
    value: 626,
  },
  {
    date: new Date("2025-02-08"),
    note: "expenses",
    category: "beauty",
    description: "descriptions.barbershop",
    value: 250,
  },
  {
    date: new Date("2025-02-14"),
    note: "expenses",
    category: "bills",
    description: "descriptions.rent",
    value: 13000,
  },
  {
    date: new Date("2025-02-16"),
    note: "expenses",
    category: "repair",
    description: "descriptions.epicentr",
    value: 451,
  },
  {
    date: new Date("2025-03-03"),
    note: "expenses",
    category: "sport",
    description: "Sportlife",
    value: 550,
  },
];

export const expensesCategory = [
  {
    category: "products",
    color: colors.orange,
  },
  { category: "cafe", color: colors.purple },
  { category: "beauty", color: colors.green },
  { category: "bills", color: colors.cyan },
  { category: "repair", color: colors.yellow },
  {
    category: "clothing",
    color: colors.lightRed,
  },
  { category: "sport", color: colors.sky },
  { category: "other", color: colors.indigo },
];

export const balanceCategory = [
  {
    category: "expenses",
    color: colors.lightRed,
  },
  {
    category: "incomes",
    color: colors.green,
  },
];

export const filtersData = [
  { id: "day", name: "filters.day" },
  { id: "month", name: "filters.month" },
  { id: "year", name: "filters.year" },
];

export const months = [
  "months.january",
  "months.february",
  "months.march",
  "months.april",
  "months.may",
  "months.june",
  "months.july",
  "months.august",
  "months.september",
  "months.october",
  "months.november",
  "months.december",
];

export const minDate = new Date(2021, 0, 1);
export const maxDate = new Date();

export const currencyOptions = [
  { value: "₴", label: "₴ UAH" },
  { value: "$", label: "$ USD" },
  { value: "€", label: "€ EUR" },
];

export const contacts = [
  {
    id: "email",
    icon: "icon-email",
    text: "levchuk.oleg21@gmail.com",
    link: "mailto:levchuk.oleg21@gmail.com",
  },
  {
    id: "linkedin",
    icon: "icon-linkedin",
    text: "oleg-levchuk",
    link: "https://www.linkedin.com/in/oleg-levchuk-2098b2b7/",
  },
];

export const motionAnimation = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3, ease: "easeInOut" },
};
