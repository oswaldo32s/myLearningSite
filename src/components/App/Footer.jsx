import AppCSS from "./App.module.css"
import { TerminalIcon } from "../../assets/icons";

export function Footer () {
  return (
    <footer className={AppCSS.footer}>
      <section className={AppCSS.footerLeft}>
        <section className={AppCSS.logo}>
          <TerminalIcon/>
          <h1 className={AppCSS.logo_h1}>Genius Learning</h1>
        </section>
        <nav className={AppCSS.nav}>
          <ul className={AppCSS.nav_ul}>
            <li>Link 1</li>
            <li>Link 2</li>
            <li>Link 3</li>
          </ul>
        </nav>
      </section>
      <section className={AppCSS.footerRight}>
        <nav>
          <ul className={AppCSS.nav_ul}>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Cookie</li>
          </ul>
        </nav>
        <p>Genius Learning, 2023</p>
      </section>
    </footer>
  );
}