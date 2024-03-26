import { GetServerSideProps } from "next"
import { parseCookies } from "nookies"

export default function SecurePage() {
    return (<h1>Página segura</h1>)
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const {['nextauth.token']: token} = parseCookies(ctx)

    if(!token){
        return {
            redirect: {
                destination: '/login',
                permanent: false
            }
        }
    }

    

    return {
        props: {}
    }
}