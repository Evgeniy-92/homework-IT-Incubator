import axios from "axios";
import {BodyType} from "./Request";


export const requestAPI = {
    postRequest(body: BodyType) {
        return axios.post('https://neko-cafe-back.herokuapp.com/auth/test', body)
    }
}