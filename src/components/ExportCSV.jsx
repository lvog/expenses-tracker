import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

import { Button } from "./Button";

export const ExportCSV = ({ id, period, data }) => {
  const { t, i18n } = useTranslation();

  const handleExportCSV = (e) => {
    e.preventDefault();
    if (!data.length) return;

    // Create headers row
    const headers = [
      t("csv.note"),
      t("csv.date"),
      t("csv.category"),
      t("csv.description"),
      t("csv.sum"),
    ];

    // Create data rows for each item
    const rows = data.map((item) => {
      const date =
        item.date instanceof Date
          ? item.date.toLocaleDateString(i18n.language)
          : new Date(item.date).toLocaleDateString(i18n.language);

      return [
        item.note,
        date,
        t(`category.${item.category}`),
        item.description ? t(item.description) : "",
        item.value,
      ];
    });

    // Combine headers and data rows
    const csvLines = [
      [`# ${t(`menu.${id}`)} - ${t(period)}`],
      headers,
      ...rows,
    ];

    // Convert to CSV format string
    const csvContent = csvLines
      .map((row) => row.map((value) => `"${value}"`).join(","))
      .join("\n");

    // Create a Blob and download link
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    // Create and trigger a download link
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute(
      "download",
      `${t(`menu.${id}`).toLowerCase()}_${t(period)
        .toLowerCase()
        .replace(/\s+/g, "_")}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button className={"btn-outline"} onClick={handleExportCSV}>
      <i className="icon-download"></i>
      {t("buttons.export")}
    </Button>
  );
};

ExportCSV.propTypes = {
  id: PropTypes.string,
  period: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  data: PropTypes.array,
};
