import Image from "next/image";
import styles from "../styles/Home.module.css";

const socialMediaIcons = [
  "icon-facebook",
  'icon-instagram',
  'icon-linkedin',
  'icon-twitter',
];

export default function Footer() {
  return (
    <footer className="container">
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        target="_blank"
        rel="noopener noreferrer"
      >
        Powered by{" "}
        <span className={styles.logo}>
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </span>
      </a>

      <ul>
        {socialMediaIcons.map((iconClass) => (
          <li key={iconClass} className={iconClass}></li>
        ))}
      </ul>
    </footer>
  );
}
