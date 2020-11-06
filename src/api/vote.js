// 定义数据请求的唯一接口

import axios from 'axios';

function voteAdd(params){
    return axios.post('vote',params);
}


export default {
    vote
}