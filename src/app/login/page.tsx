import styles from './login.module.css'

export default function Login() {
    return (
        <>
            <div className={styles.background}>
                <div className={styles.login_container}>
                    <h3 className={styles.login_uptitle}>
                        welcome to
                    </h3>
                    <h1 className={styles.login_title}>
                        KEYGUARD
                    </h1>
                    {/* <form>
                        <div className={styles.field_div}>
                            <label className={styles.field_div_label}>
                                username
                            </label>
                        </div>
                        <div  className={styles.field_div}>
                            <label className={styles.field_div_label}>
                                password
                            </label>
                        </div>
                    </form> */}
                </div>
            </div>
        </>
    );
}