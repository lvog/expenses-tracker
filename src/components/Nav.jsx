import styled from "styled-components";
import PropTypes from "prop-types";
import { useData } from "../context/DataContex";
import { useTranslation } from "react-i18next";

import { menuItems } from "../data/data";

import { fontWeight, colors, borderRadius, fontSize } from "../data/variables";
import { resetList, generateTransition } from "../data/helpers";

const Menu = styled.ul`
  ${resetList()}
  font-weight: ${fontWeight.medium};

  a {
    display: flex;
    align-items: center;
    color: ${colors.black};
    padding: 10px 15px;
    border-radius: ${borderRadius.base};
    overflow: hidden;
    transition: ${generateTransition(["color", "background"])};

    .dark & {
      color: ${colors.white};
    }

    &:hover,
    &.active {
      color: ${colors.blue};
      background: ${colors.lightBlue};

      .dark & {
        color: ${colors.white};
        background: ${colors.blue};
      }
    }
  }

  i {
    width: 24px;
    text-align: center;
    font-size: 24px;
    margin-right: 15px;

    &.icon-settings {
      font-size: ${fontSize.xll};
    }
  }
`;

export const Nav = ({ onClick }) => {
  const { activeTab, setActiveTab, setIsLoggedIn } = useData();
  const { t } = useTranslation();

  // Handle logout logic
  const handleLogout = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
    setActiveTab("info");
    document.body.classList.remove("nav-active");
    window.history.replaceState(
      null,
      "",
      window.location.pathname + window.location.search
    );
  };

  const renderMenuItem = (id, name, icon) => {
    return (
      <li key={`navLink-${id}`}>
        <a
          href={`#${id !== "logout" ? id : ""}`}
          className={activeTab === id ? "active" : ""}
          onClick={id !== "logout" ? onClick : (e) => handleLogout(e)}
        >
          <i className={icon}></i>
          {t(name)}
        </a>
      </li>
    );
  };

  return (
    <nav id="nav">
      <Menu>
        {menuItems.map((item) => renderMenuItem(item.id, item.name, item.icon))}
      </Menu>
    </nav>
  );
};

Nav.propTypes = {
  onClick: PropTypes.func.isRequired,
};
