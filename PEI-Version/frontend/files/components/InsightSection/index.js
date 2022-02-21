import styles from './Insightsection.module.css';
import Image from 'next/image';
import LinearStepper from '../Stepper';

export default function Insightsection() {
    return(
        <>
            <section className={styles.InsightSection}>
                    <div>
                        <h1>Algum título maneiro aqui</h1>
                        <p>lorem ipsum dolor sit amet</p>
                        <LinearStepper />
                    </div>
            </section>
        </>
    )
}