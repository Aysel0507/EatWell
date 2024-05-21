import { Link } from "react-router-dom"
import styles from "./index.module.scss"
const Header = () => {
  return (
    <header>
        <div id={styles.navbar}>
            <div className="container">
                <div className={styles.navbar}>
                    <div className={styles.logo}>
                        <h3>EATWELL</h3>
                    </div>
                    <ul>
                        <a href="#"><Link to={'/'}>Home</Link></a>
                        <a href="#"><Link to={'add-page'}>Add Page</Link></a>
                    </ul>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header