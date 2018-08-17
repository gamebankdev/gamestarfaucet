/*
 * action 类型
 */
export const POST_REGISTER_REQUEST = 'POST_REGISTER_REQUEST'
export const POST_REGISTER_SUCCESS = 'POST_REGISTER_SUCCESS'
export const POST_REGISTER_FAILED = 'POST_REGISTER_FAILED'

export const POST_CHECKUSERNAME_REQUEST ='POST_CHECKUSERNAME_REQUEST'
export const POST_CHECKUSERNAME_SUCCESS  ='POST_CHECKUSERNAME_SUCCESS'
export const POST_CHECKUSERNAME_FAILED  ='POST_CHECKUSERNAME_FAILED'
/*
 * action 创建函数
 */
export function post_register_request(payload){

    return { type: POST_REGISTER_REQUEST, payload }
}
export function post_register_success(payload){
    return { type: POST_REGISTER_SUCCESS, payload }
}
export function post_register_failed(payload){
    return ({type:POST_REGISTER_FAILED,payload})
}

export function post_checkUsername_request(payload){
    return ({type:POST_CHECKUSERNAME_REQUEST,payload})
}
export function post_checkUsername_success(payload){
    return ({type:POST_CHECKUSERNAME_SUCCESS,payload})
}
export function post_checkUsername_failed(payload){
    return ({type:POST_CHECKUSERNAME_FAILED,payload})
}