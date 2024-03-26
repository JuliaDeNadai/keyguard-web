import { UserInfo } from 'os'
import {v4 as uuid} from 'uuid'

type singInRequest = {
    username: string
    password: string
}

export async function singInRequest(data: singInRequest){
    
    return {
        token: uuid(),
        user: {
            name: 'Julia'
        }
    }
}

export async function recoverUserinformation(): Promise<any> {
    return {}
}