"use client";

import { useState } from "react";
import classNames from "classnames";
import Link from "next/link";

import Button from "../../../../../components/Button";
import TextField from "../../../../../components/TextField";

import NoCreditCardIcon from "../../../../../public/icons/no-credit-card.svg";

import styles from "./index.module.css";

const Form: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
  const [error] = useState<string | null>(
    " Thank you for reaching out. Our team will get back to you as soon as possible."
  );
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // console.log(formValues);
  };

  return (
    <div className={styles.formContainer}>
      <form className={classNames(styles.form)} onSubmit={handleSubmit}>
        <div className={styles.title}>
          <h3 className="text-24 mobile--text-lg font-bold color-n800">
            Let's Talk
          </h3>
          <p className="text-lg mobile--text-base color-n500">
            Our sales team is ready to help you unlock Fibi's full potential for
            your platform.
          </p>
        </div>
        <div className={styles.inputsRow}>
          <TextField
            label="First Name"
            value={formValues.firstName}
            onChange={(e) =>
              setFormValues((prev) => ({ ...prev, firstName: e.target.value }))
            }
          />
          <TextField
            label="Last Name"
            value={formValues.lastName}
            onChange={(e) =>
              setFormValues((prev) => ({ ...prev, lastName: e.target.value }))
            }
          />
        </div>
        <TextField
          type="email"
          label="Email Address"
          value={formValues.email}
          onChange={(e) =>
            setFormValues((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <TextField
          label="Phone Number"
          value={formValues.phoneNumber}
          onChange={(e) =>
            setFormValues((prev) => ({ ...prev, phoneNumber: e.target.value }))
          }
        />
        {error && (
          <div className={styles.errorMessage}>
            <svg
              className={styles.errorIcon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--color-r800)"
            >
              <circle cx="12" cy="12" r="10" stroke-width="2.5"></circle>
              <line x1="12" y1="6" x2="12" y2="13" stroke-width="2.5"></line>
              <circle cx="12" cy="16" r="1" stroke-width="2"></circle>
            </svg>
            <p className="text-base mobile--text-sm color-r800">{error}</p>
          </div>
        )}
        <p className="text-sm color-n500">
          By submitting the form, you confirm that you have read and agreed to
          the{" "}
          <Link href="/policy" className="color-m800">
            Privacy Policy
          </Link>
        </p>
        <div className={styles.footer}>
          <Button variant="secondaryFill" size="large" onClick={onClose}>
            Cancel
          </Button>
          <Button size="large">Get in Touch</Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
