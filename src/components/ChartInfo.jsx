import styled from "styled-components";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

import { ChartInfoItem } from "./ChartInfoItem";

import { resetList } from "../data/helpers";
import { breakpoints } from "../data/variables";

const ChartInfoHolder = styled.ul`
  ${resetList()}
  margin: 0 0 50px;

  @media (min-width: ${breakpoints.phone}) {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -15px 50px;
  }
`;

export const ChartInfo = ({ data }) => {
  const chartData = data;
  const { t } = useTranslation();
  return (
    <ChartInfoHolder>
      {chartData.map((item, id) => {
        return (
          <ChartInfoItem
            key={`charItem-${id}`}
            category={t(`category.${item.category}`)}
            value={item.value}
            color={item.color}
          />
        );
      })}
    </ChartInfoHolder>
  );
};

ChartInfo.propTypes = {
  data: PropTypes.array,
};
