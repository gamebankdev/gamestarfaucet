import { call,put, takeLatest } from 'redux-saga/effects'
import gamebank from '../../util/gamebank'
import {message} from 'antd'
import { 
  POST_REGISTER_REQUEST,
  POST_REGISTER_FAILED,
  POST_REGISTER_SUCCESS,
  POST_CHECKUSERNAME_REQUEST,
  POST_CHECKUSERNAME_SUCCESS,
  POST_CHECKUSERNAME_FAILED
  } from '../../actions/registerUser'
import {postData} from '../../util/fetchUrl.js'
import {exportRaw} from '../../util/Generatefile.js'
function * fetchReigster(action) {
  try{
    const data = yield call(postData,'/broadcast/accountCreate',action.payload)
    yield put({
      type:POST_REGISTER_SUCCESS,
      payload:data
    })
  }catch(err){
    yield put({
      type:POST_REGISTER_FAILED,
      payload:err
    })
  }
}
function * checkUserName(action){
  try{
    const isValidUsername = gamebank.utils.validateAccountName(action.payload[0][0]);
    if(isValidUsername){
     return yield put({
        type:POST_CHECKUSERNAME_SUCCESS,
        payload:isValidUsername
      })
    }
    const data= yield call(postData,'/api/getAccounts',action.payload)
    yield put({
      type:POST_CHECKUSERNAME_SUCCESS,
      payload:data
    })
  }catch(err){
    message.error(err.message)
    yield put({
      type:POST_CHECKUSERNAME_FAILED,
      payload:err.message
    })
  }
}
function* mySaga() {
  yield takeLatest(POST_REGISTER_REQUEST, fetchReigster);
  yield takeLatest(POST_CHECKUSERNAME_REQUEST, checkUserName);
}
export default mySaga;