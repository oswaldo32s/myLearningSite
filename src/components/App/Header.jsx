import { TerminalIcon } from "../../assets/icons";
import AppCSS from "./App.module.css"


export function Header () {
  return (
    <header className={AppCSS.appHeader}>
      <section className={AppCSS.logo}>
      <TerminalIcon/>
      <h1 className={AppCSS.logo_h1}>Genius Learning</h1>
      </section>
      <nav className={AppCSS.nav}>
        <ul className={AppCSS.nav_ul}>
          <li>Home</li>
          <li>Courses</li>
          <li>Projects</li>
          <li>Blogs</li>
          <li>Contact Us</li>
          <li>About Us</li>
        </ul>
      </nav>
    </header>
  );
}