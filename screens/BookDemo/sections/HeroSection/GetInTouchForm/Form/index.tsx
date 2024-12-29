"use client";

import { useEffect, useState } from "react";
import classNames from "classnames";
import Link from "next/link";

import Button from "../../../../../../components/Button";
import TextField from "../../../../../../components/TextField";

import MessageSuccessIcon from "../../../../../../public/icons/message-tick.svg";
import NoCreditCardIcon from "../../../../../../public/icons/no-credit-card.svg";

import styles from "./index.module.css";

const Form = () => {
  const [showSuccessBanner, setShowSuccessBanner] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  useEffect(() => {
    if (isMessageSent) {
      setShowSuccessBanner(true);
      const timerId = setTimeout(() => {
        setShowSuccessBanner(false);
        setIsMessageSent(false);
      }, 10000);

      return () => {
        clearTimeout(timerId);
      };
    }
  }, [isMessageSent]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // console.log(formValues);

    // is message sent
    setIsMessageSent(true);
  };

  return (
    <div className={styles.formContainer}>
      {showSuccessBanner && (
        <div className={styles.successBanner}>
          <MessageSuccessIcon />
          <p className="text-lg mobile--text-base color-n800">
            Your message has been sent!
          </p>
          <p className="text-base mobile--text-sm color-n500">
            Thank you for reaching out. Our team will get back to you as soon as
            possible.
          </p>
        </div>
      )}
      <form
        className={classNames(
          styles.form,
          showSuccessBanner && styles.formHidden
        )}
        onSubmit={handleSubmit}
      >
        <div className={styles.banner}>
          <NoCreditCardIcon />
          <p className="text-sm font-bold color-m800">
            No Credit Card Required
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
        <TextField
          label="Message"
          value={formValues.message}
          onChange={(e) =>
            setFormValues((prev) => ({ ...prev, message: e.target.value }))
          }
          inputTag="textarea"
        />
        <p className="text-sm color-n500">
          By submitting the form, you confirm that you have read and agreed to
          the{" "}
          <Link href="/policy" className="color-m800">
            Privacy Policy
          </Link>
        </p>
        <Button size="large">Book a Demo</Button>
      </form>
    </div>
  );
};

export default Form;
