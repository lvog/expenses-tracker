import PropTypes from "prop-types";
import styled from "styled-components";
import { useData } from "../context/DataContex";

import {
  fontWeight,
  borderRadius,
  breakpoints,
  colors,
} from "../data/variables";

const ItemHolder = styled.li`
  margin: 0 0 15px;
  position: relative;

  @media (min-width: ${breakpoints.phone}) {
    width: 50%;
    padding: 0 15px;
  }

  @media (min-width: ${breakpoints.desktop}) {
    width: 100%;
  }

  @media (min-width: ${breakpoints.widescreen}) {
    width: 50%;
  }

  &:before {
    content: "";
    width: 10px;
    height: 10px;
    position: absolute;
    top: 4px;
    left: 0;
    background: ${({ $color }) => $color || `${colors.black}`};
    border-radius: ${borderRadius.rounded};

    @media (min-width: ${breakpoints.phone}) {
      left: 15px;
    }
  }

  .info-block {
    padding: 0 0 0 25px;
  }

  .sum,
  .category {
    display: block;
  }

  .sum {
    font-weight: ${fontWeight.bold};
  }
`;

export const ChartInfoItem = ({ category, value, color }) => {
  const { currency } = useData();
  return (
    <ItemHolder $color={color}>
      <div className="info-block">
        <span className="sum">
          {currency} {value.toFixed(0)}
        </span>
        <span className="category">{category}</span>
      </div>
    </ItemHolder>
  );
};

ChartInfoItem.propTypes = {
  category: PropTypes.string,
  value: PropTypes.number,
  color: PropTypes.string,
};
