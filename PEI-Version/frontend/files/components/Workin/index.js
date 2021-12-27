
import styles from './Workin.module.css';

export default function Workin () { 
    return(
        <>
            <div className={styles.workinHeader}>
                <h2>Empresas Parceiras</h2>
            </div>
            <section className={styles.workinSlides}>
                <div className={styles.slideItem}>
                    <p>1</p>
                </div>
                <div className={styles.slideItem}>2</div>
                <div className={styles.slideItem}>3</div>
            </section> 
        </>
    )
}