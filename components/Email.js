import { confirmEmail, confirmCode,decrementCount, resetCount } from '../store'

import React from "react";
class Eamil extends React.Component{
    constructor(){
        super()
        this.state={
            EamilValue:"",
            errorMessage:undefined,
            codeError:undefined,
        }
    }
    EamilValue(event){
        const value=event.target.value;

        if(value===''){
            this.setState({
                errorMessage:undefined
            })
            return;
        }
        const reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$");
        if(reg.test(value)){
            this.setState({
                EamilValue:value,
                errorMessage:undefined
            })
        }else{
            this.setState({
                errorMessage:'邮箱格式不正确'
            })
        }
    }

    confirmEmail(){
        const EamilValue=this.state.EamilValue.trim();
        if(!this.state.errorMessage&&EamilValue){
            this.props.props.dispatch(confirmEmail(EamilValue,this.props.props.state.user))
        }  
    }
    codeValue(event){
        const value=event.target.value;
        if(value===''){
            this.setState({
                codeError:undefined
            })
            return;
        }
        var reg = /^[0-9]+.?[0-9]*$/;
        if (!reg.test(value)|| value.length!==6) {
            this.setState({
                codeError:'验证码必须是6位数字'
            })
            return;
        }else{
            this.setState({
                codeValue:value,
                codeError:undefined
            })
        }
    }
    next(){
        if(!this.state.errorMessage&&!this.state.codeError){
            this.props.props.dispatch(confirmCode({
                codeValue:this.state.codeValue,
                emailValue:this.state.EamilValue,
                userName:this.props.props.state.user
            }))
        }
    }
    render(){
        const {errorMessage,codeError}=this.state;
        return(
            <div>
                <h1>输入E-mail地址</h1>
                <p style={{fontSize:"18px"}}>我们需要确认是否存在</p>
                <div>
                    <input 
                        onChange={(event)=>{this.EamilValue(event)}}
                        style={{
                            width:"85%",
                            height:"40px",
                            lineHeight:"40px",
                            paddingLeft:"15px",
                            boxSizing:"border-box",
                            borderRadius:"5px",
                            outline:"none",
                            border:"1px solid #eeeeee"
                        }} 
                        type="text" 
                        placeholder='邮箱地址'/>
                    <button
                         onClick={()=>{this.confirmEmail()}}
                        style={{
                            width:"15%",
                            height:"40px",
                            cursor:"pointer",
                            background:"#108ee9",
                            border:"0",
                            color:"#fff",
                        }}
                        >
                        发送验证码
                    </button>
                </div>
                {
                        (errorMessage) &&<p style={{color:"red"}}>{errorMessage}</p>
                    }
                 <input 
                        onChange={(event)=>{this.codeValue(event)}}
                        style={{
                            width:"100%",
                            height:"40px",
                            lineHeight:"40px",
                            paddingLeft:"15px",
                            boxSizing:"border-box",
                            borderRadius:"5px",
                            outline:"none",
                            marginTop:"15px",
                            border:"1px solid #eeeeee"
                        }} 
                        type="text" 
                        placeholder='验证码'/>
                    <br/>
                    {
                        (codeError) &&<p style={{color:"red"}}>{codeError}</p>
                    }
                    <button
                        onClick={()=>{this.next()}}
                        style={{
                            cursor:"pointer",
                            width:"90%",
                            marginTop:"20px",
                            borderRadius:"5px",
                            height:"40px",
                            border:"0",
                            color:"#fff",
                            fontSize:"18px",
                            background:"#108ee9"
                        }}
                        >
                    继续
                    </button>
                    <p
                        onClick={()=>{dispatch(decrementCount())}}
                        style={{
                            cursor:"pointer",
                            width:"90%",
                            marginTop:"20px",
                            borderRadius:"5px",
                            height:"40px",
                            textAlign:"center",
                            color:"#108ee9",
                            fontSize:"18px",
                            
                        }}
                    >返回</p>
            </div>
           
        )
    }
}

export default Eamil;