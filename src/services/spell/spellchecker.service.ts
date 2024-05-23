import { BACKEND_IP } from '@/constants/urls'
import { TTextBody } from '@/types/services/textbody.type'
import { ISpellSlice } from '@/types/states/spell/spellWords.type'
import axios, { AxiosResponse } from 'axios'


class SpellCheckerService{
    url = `${BACKEND_IP}/v1/spell-checker`

    async send_text(text:TTextBody, format: number): Promise<AxiosResponse<any,ISpellSlice>>{
        return axios.post(`${this.url}?format=${format}`,text)
    }

}

export default SpellCheckerService