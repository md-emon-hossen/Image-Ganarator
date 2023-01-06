import styles from "../../styles/banner/Banner.module.css";
import Bar from "../bar/Bar";


export default function Banner() {
    return (
        <div className={styles.bannerWrp}>
            <div className={styles.textWrp}>
                <h1>Text to Image with AI Image Ganerator</h1>
                <p>Convert text to image in a seconds with image ganarator.input the text prompt and transfer your imaginator into Image.</p>
            </div>
            <Bar />
        </div>
    )
}
