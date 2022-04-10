import styles from './Insightsection.module.css';
import Image from 'next/image';
import LinearStepper from '../Stepper';

import data from '../../../pages/data/webConfig.json';

export default function Insightsection() {
    return(
        <>
            <section className={styles.InsightSection}>
                    <div>
                        <h1>"{data.components.home.InsightSection.h1}<spam>{data.components.home.InsightSection.spam}</spam>"</h1>
                        <p>{data.components.home.InsightSection.p}
                            <spam>    
                                {data.components.home.InsightSection.pspam}
                            </spam>
                        </p>
                        <LinearStepper />
                    </div>
            </section>
        </>
    )
}