'use client'
import { useContext } from 'react'
import styles from './login.module.css'
import { useForm } from 'react-hook-form'
import { AuthContext } from '@/hooks/contexts/auth-context'

interface FormFields {
    username: string,
    password: string
}

export default function Login() {
    const { register, handleSubmit } = useForm()
    const { signIn } = useContext(AuthContext)

    const handleLogin = async ({username, password}: any) => {
        await signIn({username, password})
    }

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
                    <form onSubmit={handleSubmit(handleLogin)}>
                        <div className={styles.field_div}>
                            <label className={styles.field_div_label}>
                                username
                            </label>
                            <input
                                {...register('username')}
                                >
                            </input>
                        </div>
                        <div  className={styles.field_div}>
                            <label className={styles.field_div_label}>
                                password
                            </label>
                            <input
                                {...register('password')}
                            >
                            </input>
                        </div>
                        <button type='submit'>Login</button>
                    </form>
                </div>
            </div>
        </>
    );
}