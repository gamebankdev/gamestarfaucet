import {
     POST_REGISTER_REQUEST,
     POST_REGISTER_SUCCESS,
     POST_REGISTER_FAILED,
     POST_CHECKUSERNAME_REQUEST,
     POST_CHECKUSERNAME_SUCCESS,
     POST_CHECKUSERNAME_FAILED
    } from '../../actions/registerUser'
const initialState ={
    index:0,
    isFetching: false,
    postingError:undefined,
    users:[],
    isRepeatUserName:false,
    validateUserNameStatus:'warning',
    validateUserNameError:undefined,
}
const resisterUser= (state=initialState,action)=>{
    switch(action.type){
        case POST_CHECKUSERNAME_REQUEST:
            return {
                ...state,
                validateUserNameStatus:'validating'
            }
        case POST_CHECKUSERNAME_SUCCESS:
          let isRepeatUserName = false, validateUserNameStatus =  'warning'
          if(action.payload.length>0){
            isRepeatUserName = true,
            validateUserNameStatus = 'error'
          }else{
            isRepeatUserName = false,
            validateUserNameStatus = 'success'
          }
          return {
              ...state,
              isRepeatUserName,
              validateUserNameStatus
            }
        case POST_CHECKUSERNAME_FAILED:
         return {...state}
        case POST_REGISTER_REQUEST:
          return {
              ...state,
              isFetching:true,
              postingError:undefined,
              users:{}
          }
        case POST_REGISTER_SUCCESS:
          return {
              ...state,
              index:1,
              isFetching:false,
              users:action.payload
          }
        case POST_REGISTER_FAILED:{
            return {
                ...state,
                index:1,
                isFetching:false,
                postingError:action.payload,
            }
        }
        default:
          return state

    }
}
export default resisterUser