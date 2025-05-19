import styled from "styled-components";
import { useState, useEffect } from "react";
import { useData } from "../context/DataContex";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

import { Logo } from "./Logo";
import { Input } from "./Input";
import { Button } from "./Button";
import { Message } from "./Message";

import { userData } from "../data/data";
import { colors } from "../data/variables";
import { motionAnimation } from "../data/data";

const LogInHolder = styled(motion.div)`
  max-width: 460px;
  width: calc(100% - 30px);
  padding: 30px;
  margin: 0;
  box-shadow: 0 0 15px 5px ${colors.rgbaBlue};
  align-self: center;

  .heading-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  .h2,
  .logo {
    margin-bottom: 0;
  }

  .h2 {
    padding-right: 15px;
  }

  .message {
    margin-bottom: 15px;
  }

  .note {
    display: block;
    margin-bottom: 30px;
    opacity: 0.5;
  }

  .btn {
    width: 100%;
  }
`;

const LogIn = () => {
  // State for input values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // State for errors
  const [errors, setErrors] = useState({});

  const { setIsLoggedIn } = useData();

  const { t } = useTranslation();

  // Check and add default password to localStorage
  useEffect(() => {
    const savedPassword = localStorage.getItem("user-password");
    if (!savedPassword) {
      localStorage.setItem("user-password", userData.password);
    }
  }, []);

  // Clear error fields
  const clearError = (field) => {
    setErrors((prev) => {
      const updated = { ...prev };
      delete updated[field];
      return updated;
    });
  };

  // Handle form submit
  const handleLogin = (e) => {
    e.preventDefault();
    const savedPassword =
      localStorage.getItem("user-password") || userData.password;

    const newErrors = {};

    // Email validation
    if (!email) newErrors.email = t("messages.emptyEmail");
    else if (email !== userData.email)
      newErrors.email = t("messages.incorrectEmail");

    // Password validation
    if (!password) newErrors.password = t("messages.emptyPassword");
    else if (password !== savedPassword)
      newErrors.password = t("messages.incorrectPassword");

    // Show validation errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Successful validation
    setIsLoggedIn(true);
    setEmail("");
    setPassword("");
    setErrors({});
  };

  return (
    <LogInHolder
      className="data-block"
      key="login"
      variants={motionAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition="transition"
    >
      <div className="heading-block">
        <h1 className="h2">{t("logIn.title")}</h1>
        <Logo />
      </div>
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <Input
            name="email"
            type="email"
            placeholder={t("logIn.email")}
            value={email}
            handleChange={(name, value) => {
              setEmail(value);
              clearError(name);
            }}
            error={!!errors.email}
          />
          {errors.email && <Message color={colors.red}>{errors.email}</Message>}
        </div>
        <div className="form-control">
          <Input
            name="password"
            type="password"
            placeholder={t("logIn.password")}
            value={password}
            handleChange={(name, value) => {
              setPassword(value);
              clearError(name);
            }}
            error={!!errors.password}
          />
          {errors.password && (
            <Message color={colors.red}>{errors.password}</Message>
          )}
        </div>
        <span className="note">{t("logIn.note")}</span>
        <Button type="submit">{t("logIn.button")}</Button>
      </form>
    </LogInHolder>
  );
};

export default LogIn;
