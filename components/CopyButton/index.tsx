"use client";

import { useState } from "react";
import classNames from "classnames";

import CopyIcon from "../../public/icons/copy.svg";
import CheckIcon from "../../public/icons/checkmark.svg";

import styles from "./index.module.css";

interface CopyButtonProps {
  textToCopy?: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({ textToCopy = "" }) => {
  const [isCopied, setIsCopied] = useState(false);

  return (
    <button
      className={classNames(styles.copyButton, isCopied && styles.copied)}
      onClick={() => {
        navigator.clipboard.writeText(textToCopy);
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      }}
    >
      {isCopied ? <CheckIcon /> : <CopyIcon />}
    </button>
  );
};

export default CopyButton;
