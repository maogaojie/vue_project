import axios from 'axios'
axios.defaults.withCredentials=true;//携带cookie

export function sendToken(url,type,data){
        var token = localStorage.getItem('token')
        return axios({
            url:url,
            data:data,
            method:type,
            withCredentials: true,
            responseType:'json',
            headers:{
                'Authorization':'JWT '+ token
            }
        })
    }