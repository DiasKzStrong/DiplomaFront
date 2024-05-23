import { BACKEND_IP } from '@/constants/urls'
import axios from 'axios'


class AuthService {
    private url: string

    constructor (){
        this.url = `${BACKEND_IP}/auth`
    }

    async login(data: FormData){
        const request = axios.post(`${this.url}/login`,data)
        return request
    }


}

export const authService = new AuthService()