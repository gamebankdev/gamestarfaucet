import { createAcount } from '../store'
import React from "react";
class Code extends React.Component{
    constructor(){
        super()
        this.state={
            errorMessage:undefined,
            password:""
        }
    }
   password(event){
        const value=event.target.value;
        this.setState({
            password:value,
            errorMessage:undefined
        })
    }
    confirmCode(){     
        this.props.props.dispatch(createAcount({
            password:this.state.password,
            userName:this.props.props.state.user,
            Email:this.props.props.state.Email
        }))
    }
    render(){

        const {errorMessage}=this.state;
        return(
            <div>
                <h1>输入密码</h1>
                <p style={{fontSize:"18px"}}>密码输入</p>
                <input 
                    onChange={(event)=>{this.password(event)}}
                    style={{
                        width:"100%",
                        height:"40px",
                        lineHeight:"40px",
                        paddingLeft:"15px",
                        boxSizing:"border-box",
                        borderRadius:"5px",
                        outline:"none",
                        border:"1px solid #eeeeee"
                    }} 
                    type="text" 
                    placeholder='密码'/>
                    <br/>
                    {
                        (errorMessage ) &&<p style={{color:"red"}}>{errorMessage}</p>
                    }
                    <button
                        onClick={()=>{this.confirmCode()}}
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
            </div>
           
        )
    }
}

export default Code;