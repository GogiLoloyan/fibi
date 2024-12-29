import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./index.module.css";

import { menuItems } from "../data";

type MenuRefs = Map<string, HTMLAnchorElement>;

interface UnderlineStyle {
  width?: string;
  transform?: string;
}

const Menu: React.FC = () => {
  const pathname = usePathname();

  const [activeItem, setActiveItem] = useState<string>(menuItems[0].path);
  const [underlineStyle, setUnderlineStyle] = useState<UnderlineStyle>({});
  const menuRefs = useRef<MenuRefs>(new Map());

  const updateUnderline = useCallback(() => {
    const activeElement = menuRefs.current.get(activeItem);
    if (activeElement) {
      const rect = activeElement.getBoundingClientRect();
      const parentRect = activeElement.parentElement?.getBoundingClientRect();

      if (parentRect) {
        setUnderlineStyle({
          width: `${rect.width}px`,
          transform: `translateX(${rect.left - parentRect.left}px)`,
        });
      }
    } else {
      setUnderlineStyle({});
    }
  }, [activeItem]);

  useEffect(() => {
    const menuItem = menuItems.find((item) => item.path === pathname);
    if (menuItem) {
      setActiveItem(menuItem.path);
    } else {
      setActiveItem(pathname);
    }
  }, [pathname]);

  useEffect(() => {
    updateUnderline();
    window.addEventListener("resize", updateUnderline);
    return () => window.removeEventListener("resize", updateUnderline);
  }, [updateUnderline]);

  const setRef = (el: HTMLAnchorElement | null, itemId: string) => {
    if (el) {
      menuRefs.current.set(itemId, el);
    } else {
      menuRefs.current.delete(itemId);
    }
  };

  return (
    <nav className={styles.navMenu}>
      {menuItems.map((item) => (
        <Link
          key={item.path}
          ref={(el) => setRef(el, item.path)}
          href={item.path}
          className={`${styles.navItem} text-base leading-normal ${
            pathname === item.path ? `${styles.navItemActive} font-bold` : ""
          } `}
        >
          <span className={`${styles.navItemText} navItemText font-medium`}>
            {item.label}
          </span>
          <span
            className={`${styles.navItemActiveText} navItemActiveText font-bold`}
          >
            {item.label}
          </span>
        </Link>
      ))}
      <span className={styles.navUnderline} style={underlineStyle} />
    </nav>
  );
};

export default Menu;
