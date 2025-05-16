import styled from "styled-components";
import { useState } from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { RecordItem } from "./RecordItem";
import { resetList } from "../data/helpers";
import { fontSize, fontWeight } from "../data/variables";
import { useData } from "../context/DataContex";

const RecordsHolder = styled.div`
  margin: 0;

  .period {
    display: block;
    font-size: ${fontSize.lg};
    font-weight: ${fontWeight.semibold};
    text-align: center;
    margin-bottom: 15px;
  }
`;

const RecordsList = styled.ul`
  ${resetList()}
`;

export const RecordsBlock = ({ data, period }) => {
  const { handleDeleteEntry, activeTab, setEditItem } = useData();
  const [activeDrop, setActiveDrop] = useState(null);
  const { t } = useTranslation();

  // Handler to delete record item
  const removeItem = (id) => {
    handleDeleteEntry(id, activeTab);
  };

  // Make active edit drop for a specific record item
  const openDrop = (index) => {
    setActiveDrop(activeDrop === index ? null : index);
  };

  // Close edit drop
  const closeDrop = () => {
    setActiveDrop(false);
  };

  return (
    <RecordsHolder className="records-holder data-block">
      <span className="period">{period}</span>
      <RecordsList>
        {data.map((entry, index) => {
          const prevExpense = data[index - 1];
          const isSameDate =
            prevExpense &&
            new Date(entry.date).toDateString() ===
              new Date(prevExpense.date).toDateString();

          return (
            <RecordItem
              key={`${entry.date}-${entry.category}-${entry.value}-${index}`}
              period={period}
              category={entry.category}
              description={
                entry.description
                  ? t(entry.description)
                  : t(`category.${entry.category}`)
              }
              sum={entry.value}
              note={entry.note}
              date={isSameDate ? null : new Date(entry.date)}
              isOpenDrop={activeDrop === index}
              openDrop={() => openDrop(index)}
              closeDrop={closeDrop}
              onRemove={() => removeItem(entry.id)}
              onEdit={() => setEditItem(entry)}
            />
          );
        })}
      </RecordsList>
    </RecordsHolder>
  );
};

RecordsBlock.propTypes = {
  data: PropTypes.array.isRequired,
  period: PropTypes.string,
};
