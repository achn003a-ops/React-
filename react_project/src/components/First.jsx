import '../styles/First.css'
import styles from '../styles/first.module.css'
function First(){
    console.log(styles)
    return(
        <>
        <h1 className={styles.heading}>This is Frist File</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <img src='/nature.jpg' />
        </>
    )
}

export default First