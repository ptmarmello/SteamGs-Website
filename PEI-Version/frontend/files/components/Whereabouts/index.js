import styles from './Whereabouts.module.css';

export default function Whereabouts(props){
    let type = props.type;
    return(
        <>
            {type.position == "left" && 
                <section className={styles.WAsection} >
                    <img src={`${type.imgSource}`} alt={`${type.placeholderText}`} className={styles.leftImage} />
                    <div>
                        <h2>{type.header}</h2>
                        <p>{type.leg}</p>
                    </div>
                </section>
            }

            {type.position == "right" && 
                <section className={styles.WAsection} >
                    <div>
                        <h2>{type.header}</h2>
                        <p>{type.leg}</p>
                    </div>
                    <img src={`${type.imgSource}`} alt={`${type.placeholderText}`} className={styles.rightImage} />
                </section>
            }
        </>
    )
}