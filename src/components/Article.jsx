import styles from './Article.module.css'


function Article({artName, artLogo, artDesc}){


    return (

        <article className={styles.articleBody}>
            <p className={styles.articlelogo}>{artLogo}</p>
            <h3 className={styles.articleName}>{artName}</h3>
            <p className={styles.articleDescription}>{artDesc}</p>
        </article>


    )
}

export default Article