import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'
import {fetchPost} from "./untl/axios"
const InitialState = {
  lastUpdate: 0,
  steps:['seting','checkUserName','checkEmail','done'],
  light: false,
  user:undefined,
  repeatUserName:false,
  count: 0,
  Email:"",
  sendEmailError:"",
  createResult:{}
}

export const actionTypes = {
  TICK: 'TICK',
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT',
  RESET: 'RESET',
  CHECKUSERNAME:"checkUserName",
  CONFIRMEMAIL:"confirmEmail",
  CONFIRMECODE:"CONFIRMECODE",
  DONE:"DONE",
  
}

// REDUCERS
export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionTypes.TICK:
      return Object.assign({}, state, {
        lastUpdate: action.ts,
        light: !!action.light
      })
    case actionTypes.INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1
      })
    case actionTypes.DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1
      })
     case actionTypes.CHECKUSERNAME:
        if(action.payload.repeatUserName){
          return Object.assign({}, state, {
            count: state.count,
            user:action.payload.user,
            repeatUserName:action.payload.repeatUserName
          })
        }else{
          return Object.assign({}, state, {
            count: state.count+1,
            user:action.payload.user,
          })
        }
      case actionTypes.CONFIRMEMAIL:
        return Object.assign({}, state, {
          count: state.count,
          Email:action.payload.Email,
          sendEmailError:action.payload.error
        })
      case actionTypes.CONFIRMECODE:
      return Object.assign({},state,{
        count:state.count+1
      })

    case actionTypes.DONE:
      return Object.assign({},state,{
        count:state.count+1,
        createResult:action.payload.result
      })
      case actionTypes.ERROR:
      return Object.assign({},state,{
        count:state.count,
        createResult:action.payload.result
      })

    default: return state
  }
}

// ACTIONS
export const serverRenderClock = (isServer) => dispatch => {
  return dispatch({ type: actionTypes.TICK, light: !isServer, ts: Date.now() })
}

// 下一步
export const incrementCount = () => dispatch => {
  return dispatch({ type: actionTypes.INCREMENT })
}
// 检查用户名
export const checkUserName=  (userName)=> async (dispatch)=>{
  const result =await fetchPost({
    url:"/checkUserName",
    data:{
      userName:userName
    }
  })
    let repeatUserName=false;  
    
  if(result.data.user.length>0){
    repeatUserName=true;
  };

  return dispatch({
      type:actionTypes.CHECKUSERNAME,
      payload:{
        user:userName,
        repeatUserName:repeatUserName
      }
  })
}
// 发送邮件
export const confirmEmail=(email,userName)=>async (dispatch)=>{
  const result =await fetchPost({
    url:"/confirmEmil",
    data:{
      mail:email,
      userName:userName
    }
  });
  if(result.data.success){
    return dispatch({ type: actionTypes.CONFIRMEMAIL ,payload:{
      Email:email
    }})
  }else{
    return dispatch({ type: actionTypes.CONFIRMEMAIL,payload:{
      error:result.data.msg
    } })
  }
 
}
//验证码验证
export const confirmCode=(options)=>async (dispatch)=>{

  const result =await fetchPost({
    url:"/confirmCode",
    data:options
  });
  return dispatch({ type: actionTypes.CONFIRMECODE})
}
// 创建账号
export const createAcount=(options)=>async (dispatch)=>{
  const result =await fetchPost({
    url:"/createCount",
    data:options
  });
  if(result.data.success){

    function fakeClick(obj) {
      var ev = document.createEvent("MouseEvents");
      ev.initMouseEvent("click", true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
      obj.dispatchEvent(ev);
    }
    function exportRaw(name, data) {
      var urlObject = window.URL || window.webkitURL || window;
      var export_blob = new Blob([data]);
      var save_link = document.createElementNS("http://www.w3.org/1999/xhtml", "a")
      save_link.href = urlObject.createObjectURL(export_blob);
      save_link.download = name;
      fakeClick(save_link);
    }
    exportRaw('密码组.txt', JSON.stringify(result.data.private));

    return dispatch({ type: actionTypes.DONE,payload:{
      result:result.data.private
    }})
  }else{
     return dispatch({ type: actionTypes.ERROR,payload:{
      result:result.data.msg
    }})
  }
}

export const decrementCount = () => dispatch => {
  return dispatch({ type: actionTypes.DECREMENT })
}

export const resetCount = () => dispatch => {
  return dispatch({ type: actionTypes.RESET })
}

export function initializeStore (initialState = initialState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}