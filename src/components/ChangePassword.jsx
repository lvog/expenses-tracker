import styled from "styled-components";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { Input } from "./Input";
import { Button } from "./Button";
import { Message } from "./Message";

import { userData } from "../data/data";
import { colors } from "../data/variables";

const ChangePasswordHolder = styled.div`
  padding: 30px 0;

  .message {
    margin-bottom: 15px;
  }

  .error {
    border: 1px solid ${colors.red};
  }

  .btn-holder {
    text-align: right;
  }

  .btn {
    min-width: 180px;
  }
`;

export const ChangePassword = () => {
  // State for input values
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // State for messages
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const { t } = useTranslation();

  // Check and add password to localStorage
  useEffect(() => {
    const storedPassword = localStorage.getItem("user-password");
    if (!storedPassword) {
      localStorage.setItem("user-password", userData.password);
    }
  }, []);

  // Clear success message
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  // Clear error fields
  const clearError = (field) => {
    setErrors((prev) => {
      const updated = { ...prev };
      delete updated[field];
      return updated;
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const savedPassword = localStorage.getItem("user-password");
    const newErrors = {};

    // Validation
    if (!currentPassword) newErrors.currentPassword = "messages.enterCurrent";
    if (!newPassword) newErrors.newPassword = "messages.newEmpty";
    if (!confirmPassword) newErrors.confirmPassword = "messages.confirm";

    if (currentPassword && currentPassword !== savedPassword) {
      newErrors.currentPassword = "messages.incorrect";
    }

    if (newPassword && newPassword === savedPassword) {
      newErrors.newPassword = "messages.same";
    }

    if (newPassword && confirmPassword && newPassword !== confirmPassword) {
      newErrors.confirmPassword = "messages.match";
    }

    // Show validation errors
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Successful validation
    localStorage.setItem("user-password", newPassword);
    setMessage("messages.success");
    setErrors({});
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <ChangePasswordHolder>
      <h3>{t("changePassword.title")}</h3>
      <form className="change-password-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <Input
            id="current-password"
            type="password"
            name="currentPassword"
            placeholder={t("changePassword.inputCurrentPassword")}
            value={currentPassword}
            handleChange={(name, value) => {
              setCurrentPassword(value);
              clearError(name);
            }}
            error={!!errors.currentPassword}
          />
          {errors.currentPassword && (
            <Message color={colors.red}>{t(errors.currentPassword)}</Message>
          )}
        </div>
        <div className="form-control">
          <Input
            id="new-password"
            type="password"
            name="newPassword"
            placeholder={t("changePassword.inputNewPassword")}
            value={newPassword}
            handleChange={(name, value) => {
              setNewPassword(value);
              clearError(name);
            }}
            error={!!errors.newPassword}
          />
          {errors.newPassword && (
            <Message color={colors.red}>{t(errors.newPassword)}</Message>
          )}
        </div>
        <div className="form-control">
          <Input
            id="confirm-password"
            type="password"
            name="confirmPassword"
            placeholder={t("changePassword.inputConfirmPassword")}
            value={confirmPassword}
            handleChange={(name, value) => {
              setConfirmPassword(value);
              clearError(name);
            }}
            error={!!errors.confirmPassword}
          />
          {errors.confirmPassword && (
            <Message color={colors.red}>{t(errors.confirmPassword)}</Message>
          )}
        </div>

        {message && <Message color={colors.green}>{t(message)}</Message>}
        <div className="btn-holder">
          <Button type="submit">{t("changePassword.button")}</Button>
        </div>
      </form>
    </ChangePasswordHolder>
  );
};
