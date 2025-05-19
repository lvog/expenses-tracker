import styled from "styled-components";
import { useData } from "../context/DataContex";
import { Trans, useTranslation } from "react-i18next";
import PropTypes from "prop-types";

import { contacts } from "../data/data";
import { resetList } from "../data/helpers";
import { fontSize, fontWeight, colors } from "../data/variables";

const InfoTabHolder = styled.div`
  font-size: ${fontSize.md};

  .h2,
  .description-block {
    margin-bottom: 30px;
  }

  .description-block {
    font-size: ${fontSize.lg};
  }

  .contacts-list {
    ${resetList}

    font-weight: ${fontWeight.semibold};

    li {
      margin-bottom: 15px;
      padding-left: 30px;
      position: relative;
    }

    i {
      font-size: ${fontSize.xl};
      position: absolute;
      top: -2px;
      left: 0;

      &.icon-linkedin {
        top: -3px;
      }
    }

    a {
      color: ${colors.black};

      .dark & {
        color: ${colors.white};
      }

      &:hover {
        color: ${colors.blue};
      }
    }
  }
`;

export const InfoTab = ({ id }) => {
  const { activeTab } = useData();
  const { t } = useTranslation();
  const description = t("info.description", { returnObjects: true });
  const infoList = t("info.infoList", { returnObjects: true });

  return (
    <InfoTabHolder
      className={`tab ${id === activeTab ? "active" : "tab-hidden"}`}
    >
      <div className="container">
        <h1 className="h2">{t("info.title")}</h1>
        <div className="description-block">
          {description.map((text, index) => (
            <p key={index}>
              <Trans
                i18nKey={`info.description.${index}`}
                components={[<strong key="0" />]}
              />
            </p>
          ))}
        </div>
        <h2 className="h3">{t("info.title2")}</h2>
        <ul>
          {infoList.map((text, index) => (
            <li key={index}>{text}</li>
          ))}
        </ul>
        <h2 className="h3">{t("info.title3")}</h2>
        <p>{t("info.paragraph")}</p>
        <ul className="contacts-list">
          {contacts.map((item) => (
            <li key={item.id}>
              <i className={item.icon}></i>
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </InfoTabHolder>
  );
};

InfoTab.propTypes = {
  id: PropTypes.string.isRequired,
};
