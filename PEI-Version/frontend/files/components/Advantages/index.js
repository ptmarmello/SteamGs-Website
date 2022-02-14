import styles from './Advantages.module.css';
import Image from 'next/image';

export default function Advantages (props) { 
    let data = props.data;
    const theLoader = ({src, width, height}) => {
        // console.log(width, height);
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
                                    <div style={{
                                        width: '100%',
                                        maxWidth: '120px',
                                    }}>
                                        <Image src={item.imgSource} alt={item.leg}
                                                width="40%" height="40%"
                                                quality={100} loader={theLoader}
                                                unoptimized={true}
                                            />
                                    </div>
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