import axios from "axios";
import {API_BASE_URL} from "../helper/env";

export const postLogin = (data) => {
  return new Promise((resolve, reject) => {
    axios.post(`${API_BASE_URL}/login`, data)
      .then(res => {
        if(res.data.status === 1) {
          resolve(res.data)
        } else {
          reject(res.data.message)
        }
      })
      .catch(err => {
        console.log('Error: ', err);
        reject('Some thing went wrong!')
      })
  })
}
