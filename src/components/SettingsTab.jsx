import styled from "styled-components";
import { useData } from "../context/DataContex";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

import { LanguageSwitcher } from "./LanguageSwitcher";
import { CurrencySwitcher } from "./CurrencySwitcher";
import { ThemeSwitcher } from "./ThemeSwitcher";
import { ChangePassword } from "./ChangePassword";

import { breakpoints } from "../data/variables";

const SettingsTabHolder = styled.div`
  h2 {
    margin-bottom: 30px;
  }

  .settings-holder {
    max-width: 540px;
  }

  .setting-block {
    margin-bottom: 30px;

    @media (min-width: ${breakpoints.phone}) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 15px;
    }

    h3 {
      @media (min-width: ${breakpoints.phone}) {
        max-width: calc(300px - 15px);
        padding-right: 15px;
        margin: 0;
      }
    }
  }

  .custom-select,
  .switcher-holder {
    width: 100%;

    @media (min-width: ${breakpoints.phone}) {
      max-width: 300px;
      margin-bottom: 0;
    }
  }

  .switcher-holder {
    text-align: left;
  }
`;

export const SettingsTab = ({ id }) => {
  const { activeTab } = useData();
  const { t } = useTranslation();

  return (
    <SettingsTabHolder
      className={`tab ${id === activeTab ? "active" : "tab-hidden"}`}
    >
      <div className="container">
        <h2>{t("settings.title")}</h2>
        <div className="settings-holder">
          <CurrencySwitcher />
          <LanguageSwitcher />
          <ThemeSwitcher />
          <ChangePassword />
        </div>
      </div>
    </SettingsTabHolder>
  );
};

SettingsTab.propTypes = {
  id: PropTypes.string.isRequired,
};
