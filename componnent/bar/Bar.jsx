import styles from "../../styles/bar/Bar.module.css";
import Container from "../Container";

export default function Bar() {
    return (
        <div className={styles.barWrp}>
            <Container>
                <div className={styles.berContainer}>
                    <div className={styles.inputWrp}>
                        <input type="text" placeholder="Discribe what your wnat to see with phrases and saparated them with commnd" />
                    </div>
                    <div className={styles.btnWrp}>
                        <button>Ganarate</button>
                    </div>
                </div>
            </Container>
        </div>
    )
}
