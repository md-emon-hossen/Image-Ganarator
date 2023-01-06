import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import styles from "../../styles/header/Header.module.css";
import Container from "../Container";

export default function Header() {
    return (
        <div className={styles.headerWrp}>
            <Container>
                <div className={styles.headerContainer}>
                    <div className={styles.logoWrp}>
                        <Image className={styles.img} src={logo} alt="Logo" />
                        <h2>AnyImage</h2>
                    </div>
                    <div className={styles.signInWrp}>
                        <div className={styles.navWrp}>
                            <Link className={styles.link} href={"/"}>Home</Link>
                            <Link className={styles.link} href={"/"}>Feature</Link>
                            <Link className={styles.link} href={"/"}>About</Link>
                            <Link className={styles.link} href={"/"}>Contact</Link>
                        </div>
                        <div className={styles.singnBtn}>Sign in</div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
