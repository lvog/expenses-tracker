import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import styled from "styled-components";
import { useData } from "../context/DataContex";
import { useMemo } from "react";
import PropTypes from "prop-types";

import { ChartInfo } from "./ChartInfo";

import { breakpoints } from "../data/variables";
import {
  incomesCategory,
  expensesCategory,
  balanceCategory,
} from "../data/data";

const ChartBlock = styled.div`
  @media (min-width: ${breakpoints.desktop}) {
    margin: 0;
  }
`;

const ChartHolder = styled(ResponsiveContainer)`
  * {
    &:focus {
      outline: none;
    }
  }
`;

// Merge arrays by category or note
const mergeByCategory = (list, categories) => {
  const isBalance = categories.every(
    (cat) => cat.category === "incomes" || cat.category === "expenses"
  );

  return list.reduce((acc, item) => {
    const key = isBalance ? item.note : item.category;
    const matchedCategory = categories.find((c) => c.category === key);
    const existing = acc.find((entry) => entry.category === key);

    if (existing) {
      existing.value += item.value;
    } else {
      acc.push({
        category: key,
        categoryText: matchedCategory?.categoryText || "",
        value: item.value,
        color: matchedCategory?.color || "#000000",
      });
    }

    return acc;
  }, []);
};

export const Chart = ({ data }) => {
  const { activeTab } = useData();

  // Memoize chart data
  const chartData = useMemo(() => {
    const categoriesMap = {
      balance: balanceCategory,
      incomes: incomesCategory,
      expenses: expensesCategory,
    };

    return mergeByCategory(data, categoriesMap[activeTab] || []);
  }, [data, activeTab]);

  return (
    <ChartBlock className="data-block">
      <ChartHolder width="100%" height={400}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius="50%"
            outerRadius="60%"
            paddingAngle={2}
            dataKey="value"
            animationBegin={400}
            animationDuration={1000}
            isAnimationActive={true}
          >
            {chartData.map((entry, id) => (
              <Cell key={`cell-${id}`} fill={entry.color} />
            ))}
          </Pie>
        </PieChart>
      </ChartHolder>
      <ChartInfo data={chartData} />
    </ChartBlock>
  );
};

Chart.propTypes = {
  data: PropTypes.array,
};
