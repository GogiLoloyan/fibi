"use client";

import { useState } from "react";
import classNames from "classnames";

import ArrowIcon from "../../../public/icons/arrow.svg";

import Block from "../../Block";
import Button from "../../Button";
import TextField from "../../TextField";

import styles from "./index.module.css";

const RequestCallBackBlock = () => {
  const [email, setEmail] = useState("");

  return (
    <Block className={styles.requestCallBlock}>
      <p className={classNames("text-lg font-bold color-n800")}>
        Have a Questions?
      </p>
      <p className={classNames("text-base color-n500")}>
        Leave your email address, and we&apos;ll get in touch to assist you.
      </p>
      <div className={styles.requestCallForm}>
        <TextField
          size="medium"
          type="email"
          value={email}
          placeholder="Email Address"
          className={styles.emailInput}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          size="medium"
          rightIcon={<ArrowIcon />}
          onClick={() => setEmail("")}
        />
      </div>
    </Block>
  );
};

export default RequestCallBackBlock;
