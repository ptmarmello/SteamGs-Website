import styles from './Advantages.module.css';
import Image from 'next/image';

export default function Advantages (props) { 
    let data = props.data;
    const theLoader = ({src}) => {
        return `${src}`;
      }
    return(
        <>
            <section className={styles.AdSection}>
                <section>
                    <h1>Vantagens</h1>
                    <section className={styles.AdGrid}>
                        {data.advImages.map((item, index) => {
                            return(
                                <div key={index}>
                                    <Image src={item.imgSource} alt={item.leg}
                                            width="50%" height="50%"
                                            quality={100} loader={theLoader}
                                        />
                                    <h3>{item.header}
                                        <br/>
                                        oloco   
                                    </h3>
                                    <p>{item.text}</p>
                                </div>
                            )
                        })}
                    </section>
                </section>
            </section>
        </>
    )
}