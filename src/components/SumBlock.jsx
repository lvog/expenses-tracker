import styled from "styled-components";
import PropTypes from "prop-types";
import { useMemo } from "react";
import { useData } from "../context/DataContex";

import { fontWeight, borderRadius, colors } from "../data/variables";

const SumInfo = styled.div`
  display: flex;
  align-items: center;

  i {
    width: 80px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 42px;
    font-weight: ${fontWeight.medium};
    color: ${colors.blue};
    background: ${colors.lightBlue};
    border-radius: ${borderRadius.base};

    .dark & {
      background: ${colors.blue700};
    }
  }

  .info-block {
    width: calc(100% - 80px);
    padding-left: 15px;
  }

  .title {
    display: block;
    margin-bottom: 2px;
  }

  .sum {
    font-size: 40px;
    font-weight: ${fontWeight.semibold};
    overflow-wrap: anywhere;
  }
`;

// Sum up values in the array
const getTotal = (data) => data.reduce((sum, item) => sum + item.value, 0);

export const SumBlock = ({ id, text, data }) => {
  const { activeTab, currency } = useData();

  // Memoize calculation
  const result = useMemo(() => {
    if (activeTab !== "balance") {
      return getTotal(data);
    } else {
      const incomes = data.filter((entry) => entry.note === "incomes");
      const expenses = data.filter((entry) => entry.note === "expenses");
      return getTotal(incomes) - getTotal(expenses);
    }
  }, [data, activeTab]);

  return (
    <SumInfo className="data-block">
      <i className={`icon-${id.toLowerCase()}`}></i>
      <div className="info-block">
        <strong className="title">{text}</strong>
        <span
          className="sum"
          style={{
            color:
              activeTab !== "balance"
                ? undefined
                : result < 0
                ? `${colors.lightRed}`
                : `${colors.green}`,
          }}
        >
          {currency} {result.toFixed(0)}
        </span>
      </div>
    </SumInfo>
  );
};

SumBlock.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
};
