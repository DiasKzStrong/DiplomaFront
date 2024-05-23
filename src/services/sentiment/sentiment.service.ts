import { BACKEND_IP } from '@/constants/urls'
import { TTextBody } from '@/types/services/textbody.type'
import { ISpellSlice } from '@/types/states/spell/spellWords.type'
import axios, { AxiosResponse } from 'axios'


class SentimentService{
    url = `${BACKEND_IP}/v1/sentiment`

    async send_text(text:TTextBody): Promise<AxiosResponse<any,ISpellSlice>>{
        return axios.post(`${this.url}`,text)
    }

}

export default SentimentService