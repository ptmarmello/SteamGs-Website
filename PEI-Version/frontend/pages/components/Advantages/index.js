import styles from './Advantages.module.css';

export default function Advantages () { 
    return(
        <>
            <section className={styles.AdSection}>
                <section>
                    <h1>Vantagens</h1>
                    <section className={styles.AdGrid}>
                        <div>
                            <img alt="lala" src="https://via.placeholder.com/1080" />
                            <h3>Vantagem1</h3>
                            <p>lorem ipsum dolor sit amet</p>
                        </div>
                        <div>
                            <img alt="lala" src="https://via.placeholder.com/1080" />
                            <h3>Vantagem2</h3>
                            <p>lorem ipsum dolor sit amet</p>
                        </div>
                        <div>
                            <img alt="lala" src="https://via.placeholder.com/1080" />
                            <h3>Vantagem3</h3>
                            <p>lorem ipsum dolor sit amet</p>
                        </div>
                        <div>
                            <img alt="lala" src="https://via.placeholder.com/1080" />
                            <h3>Vantagem4</h3>
                            <p>lorem ipsum dolor sit amet</p>
                        </div>
                        <div>
                            <img alt="lala" src="https://via.placeholder.com/1080" />
                            <h3>Vantagem5</h3>
                            <p>lorem ipsum dolor sit amet</p>
                        </div>
                        <div>
                            <img alt="lala" src="https://via.placeholder.com/1080" />
                            <h3>Vantagem6</h3>
                            <p>lorem ipsum dolor sit amet</p>
                        </div>
                    </section>
                </section>
            </section>
        </>
    )
}