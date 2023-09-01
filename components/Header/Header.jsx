"use client";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import Link from "next/link";
import Hamburger from "hamburger-react";

const Header = () => {
  const [isToggled, setIsToggled] = useState(false);
  const NavigationMenu = (open) => {
    const nav = document.getElementById("nav-container");
    const overlay = document.getElementById("overlay");
    setIsToggled(open);
    if (open) {
      nav.classList.replace(styles.nav_closed, styles.nav_open);
      overlay.classList.replace(styles.overlay_closed, styles.overlay_open);
    } else {
      nav.classList.replace(styles.nav_open, styles.nav_closed);
      overlay.classList.replace(styles.overlay_open, styles.overlay_closed);
    }
  };

  useEffect(() => {
    NavigationMenu(false);
  }, []);

  return (
    <>
      <header className={styles.header_container}>
        <section className={styles.header_container__content_holder}>
          <Link
            href="/"
            aria-label="Return home"
            className={styles.header_container__content_holder__logo_block}
          >
            <h3>The Hunter Wilhelm Index</h3>
          </Link>
          <div
            className={styles.header_container__content_holder__hamburger_block}
          >
            <Hamburger
              direction="right"
              label="Show and hide menu"
              hideOutline={false}
              toggled={isToggled} // Control its state
              onToggle={(toggled) => NavigationMenu(toggled)}
            />
          </div>
        </section>
      </header>
      <div
        id="overlay"
        onClick={() => NavigationMenu(false)}
        className={styles.overlay_closed}
      ></div>
      <nav id="nav-container" className={styles.nav_closed}></nav>
    </>
  );
};

export default Header;
