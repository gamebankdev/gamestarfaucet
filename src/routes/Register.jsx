import React from 'react'
import Styles from  "../style/register.less"
import {Icon} from 'antd'
import {Link} from 'react-router-dom'
import LoginForm from '../components/register_form.jsx'
import RegisterDone from '../components/register_done.jsx'
import {connect} from 'react-redux'
import {loginUrl} from '../../config'
class RegisterComponent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            index:0,
        }
    }
    render(){
        const {index}=this.props.userstate
        return(
            <div  className={Styles.container}>
                <div className={Styles.headers}>
                    <div className={Styles.Header_Content}>
                        <div className={Styles.logo}>
                         <a href="http://www.gbank.pro "> GameStar</a>
                        </div>
                        <div className={Styles.loginButton}>
                            <Icon type="user" />
                            <a href={loginUrl}>登陆</a>
                            <span className={Styles.line}></span>
                            <Icon type="edit" />
                            <span>注册</span>
                        </div>
                    </div>
                </div>
                <div className={Styles.Content}>
                    <div className={Styles.Content_content}>
                        <div className={Styles.Content_head}>
                            <img src={require('../assets/images/content_icon_left.png')} alt=""/>
                            <span></span>
                            {
                                index==0?<span className={Styles.redLine}></span>:<span></span>
                            }
                            <img src={
                                index==0?
                                require('../assets/images/content_icon_right_gray.png')
                                :require('../assets/images/content_icon_right.png')
                            } alt=""/>
                        </div>
                        <div className={Styles.Content_loginForm}>
                            {
                                index==0 ?<LoginForm />:<RegisterDone />
                            }
                        </div>
                      
                    </div>
                </div>
                <div className={Styles.bottom}>
                    <div className={Styles.bottom_Container}>
                        <div className={Styles.bottom_content}>
                            <span>网站合作</span>
                            <span>法律声明</span>
                            <span>隐私权政策</span>
                            <span>知识产权</span>
                        </div>
                        <div>
                            <div style={{padding:"30px 0 20px 0"}}>      </div>
                            <p style={{fontFamily:'Microsoft YaHei'}}>     </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default  connect(state=>{
       return { userstate:{...state.resisterUser}}
   })(RegisterComponent)