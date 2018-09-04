import React,{Component} from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import {post_register_request,post_checkUsername_request} from '../actions/registerUser'
import {connect} from 'react-redux'
const FormItem = Form.Item;

class Login extends React.Component {
    state={
      validateUserNameStatus:'warning',
    }
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
            this.props.dispatch(post_register_request([values.userName,values.password]))
        }
      });
    }
    validatorRepetPssword = (rule, value, callback)=>{
        const password =this.props.form.getFieldValue('password')
        if(password!==value){
            callback('请重复输入密码')
        }else{
            callback()
        }
    }
    validatorUserName=(rule, value, callback)=>{
        if(value){
          this.props.dispatch(post_checkUsername_request([[value]]))
          callback()
        }else{
          callback('请输入用户名!')
        }
    }
    render() {
      const { getFieldDecorator} = this.props.form;
      const {isFetching,validateUserNameResult,validateUserNameStatus} = this.props
      const formItemLayout = {
        labelCol: {
          sm: { span: 8 },
        },
        wrapperCol: {
          sm: { span: 8 },
        },
      };
      return (
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FormItem
            {...formItemLayout}
            label="输入用户名"
            hasFeedback
            validateStatus={validateUserNameStatus}
            help={validateUserNameResult}
          >
            {getFieldDecorator('userName', {
              validateTrigger:'onBlur',
              rules: [{max:16,min:3,validator:this.validatorUserName, required: true,whitespace:true,}],
            })(
              <Input autoComplete={"off"} prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)'}} />} placeholder="输入用户名" />
            )}
          </FormItem>
          <FormItem
             {...formItemLayout}
            help="密码长度为6到20位"
            label="输入密码"
          >
            {getFieldDecorator('password', {
              rules: [{max:20,min:6, required: true, whitespace:true ,message: '密码长度为6到20位' }],
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码" />
            )}
          </FormItem>
          <FormItem
             {...formItemLayout}
            label="重复密码"
          >
            {getFieldDecorator('repetpassword', {
              validateTrigger:'onBlur',
              rules: [{max:20,min:6, required: true,validator:this.validatorRepetPssword,   message: '请重复输入密码!'} ]
            })(
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请重复输入密码" />
            )}
          </FormItem>
          <FormItem
           {...formItemLayout}
           colon={false}
           label=" "
          >
            <Button 
              style={{
                 backgroundColor:"#f85352",
                 border:'none',
                 width:'100%',
                 fontSize:"24px",
                 height:"40px"
                }}  
              loading={isFetching} 
              type="primary"
              htmlType="submit" 
              className="login-form-button">
              注   册
            </Button>
          </FormItem>
        </Form>
      );
    }
  }
  
const WrappedNormalLoginForm = Form.create()(Login);

export default  connect(state=>{
  return {...state.resisterUser  }
})(WrappedNormalLoginForm)