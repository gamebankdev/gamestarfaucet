import { checkUserName, decrementCount, resetCount } from '../store'
import React from "react"
class UserName extends React.Component{
    constructor(){
        super()
        this.state={
            userName:"",
            errorMessage:undefined
        }
    }
    changeValue(event){
        const InputValue=event.target.value;
        if(InputValue.length>0 && InputValue.length<2){
            this.setState({
                errorMessage:"用户名过短"
            })
        }else{
            this.setState({
                userName:InputValue,
                errorMessage:undefined
            })
            // const TypeInputValue=typeof (Number(InputValue.slice(0,1)))
            // if(TypeInputValue=='number'){
            //     this.setState({
            //         errorMessage:"用户名不能已数字开头"
            //     })
            //  } else{
            //     this.setState({
            //         errorMessage:undefined
            //     })
            //  }
        }
    }
 
    next(){
       const {errorMessage,userName}=this.state;
        if(!userName){
            this.setState({
                errorMessage:'请输入您的用户名'
            })
        }
        if(!errorMessage &&userName){
           this.props.props.dispatch(checkUserName(userName))
        }
    }
    render(){
        const {errorMessage}=this.state;
        const {repeatUserName}=this.props.props.state;
        return(
            <div>
                <h1>开始</h1>
                <p style={{fontSize:"18px"}}>选择一个用户名. 它是你在gamebank和所有基于gamebank应用的标志.</p>
                <input 
                    onChange={(event)=>{this.changeValue(event)}}
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
                    placeholder='请输入您的用户名'/>
                    <br/>
                    {
                        (errorMessage ||repeatUserName) &&<p style={{color:"red"}}>{errorMessage||'用户名重复'}</p>
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
                       
            </div>
            
        )
    }
}
export default UserName;