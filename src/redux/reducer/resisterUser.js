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
    validateUserNameResult:"用户名为小写字母和数字的组合,且不能以数字开头,长度为3--16位!",
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
            let validateUserNameResult,validateUserNameStatus;
            if(Array.isArray(action.payload)){
                if(action.payload.length>0){
                    validateUserNameResult="用户名重复"
                    validateUserNameStatus = 'error'
                  }else{
                    validateUserNameResult=""
                    validateUserNameStatus = 'success'
                  }
            }else{
                validateUserNameResult=action.payload
                validateUserNameStatus = 'error'
            }

          return {
              ...state,
              validateUserNameResult,
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