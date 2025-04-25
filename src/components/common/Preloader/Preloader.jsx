import loading from '../../../assets/images/loader.gif';
import styles from './Preloader.module.css';

const Preloader = () => {
    return (
        <div className={styles.preloader}>
           <img src={loading} alt="Loading" /> 
        </div>
    )
}

export default Preloader;