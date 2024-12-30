import classNames from "classnames";
import styles from "./index.module.css";

interface BlockProps {
  children: React.ReactNode;
  className?: string;
  compact?: boolean;
  [key: string]: unknown;
}

const Block: React.FC<BlockProps> = ({
  children,
  className,
  compact,
  ...rest
}) => {
  return (
    <div
      className={classNames(
        styles.container,
        className,
        compact && styles.compact
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Block;
