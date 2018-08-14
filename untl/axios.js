import axios from "axios";

export const fetchPost=(options)=>{ 
    return axios({
        method: 'post',
        crossDomain:true,
        url: options.url,
        baseURL:"http://192.168.1.101:3000",
        data:options.data
    })
}