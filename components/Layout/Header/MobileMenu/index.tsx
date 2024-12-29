import Link from "next/link";
import classNames from "classnames";
import { usePathname } from "next/navigation";

import TwitterIcon from "../../../../public/icons/twitter.svg";
import InstagramIcon from "../../../../public/icons/instagram.svg";
import LinkedinIcon from "../../../../public/icons/linkedin.svg";

import { menuItems } from "../data";
import Button from "../../../Button";
import styles from "./index.module.css";

const MobileMenu: React.FC<{ onClose: () => void; open: boolean }> = ({
  onClose,
  open,
}) => {
  const pathname = usePathname();

  const handleNavClick = () => {
    onClose();
  };

  if (!open) return null;

  return (
    <div className={styles.menuContainer}>
      <div className={styles.menuList}>
        {menuItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <div
              key={item.id}
              className={classNames(
                styles.menuItem,
                isActive && styles.menuItemActive
              )}
            >
              <Link
                href={item.path}
                onClick={handleNavClick}
                className={classNames(
                  styles.navItem,
                  "text-base leading-normal color-n500",
                  isActive ? `${styles.navItemActive} font-bold` : ""
                )}
              >
                {item.label}
              </Link>
            </div>
          );
        })}
      </div>
      <div className={styles.menuFooter}>
        <Button
          variant="secondaryFill"
          size="medium"
          leftIcon={<TwitterIcon />}
          className={styles.socialButton}
        />
        <Button
          variant="secondaryFill"
          size="medium"
          leftIcon={<InstagramIcon />}
          className={styles.socialButton}
        />
        <Button
          variant="secondaryFill"
          size="medium"
          leftIcon={<LinkedinIcon />}
          className={styles.socialButton}
        />
      </div>
    </div>
  );
};

export default MobileMenu;
