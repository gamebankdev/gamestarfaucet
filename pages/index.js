import React from "react";
import Link from 'next/link';
import Steps from "../components/Steps";
import ShowDesc from "../components/Show_desc"
import {connect} from 'react-redux'
import UserName from "../components/UserName"
import Email from "../components/Email";
import Password from "../components/Password"
import Done from "../components/Done"
import {startClock, serverRenderClock} from '../store'

class Index extends React.Component{
    static getInitialProps ({ reduxStore, req }) {
        const isServer = !!req
        reduxStore.dispatch(serverRenderClock(isServer))
        return {}
      }
    render(){
        const {dispatch,state}=this.props;
 
        return (
            <div style={{width:"100%",margin:"0 auto",background:"100%"}}>
                <div style={{width:"40%",height:"100%",background:"#fff",margin:"0 auto"}}>
                    <Steps props={state}></Steps>
                    {
                        state.count===0 &&  <ShowDesc props={this.props}></ShowDesc>
                       
                    }
                    {
                        state.count===1 &&  <UserName props={this.props}></UserName>
                    }
                    {
                        state.count===2 &&  <Password props={this.props}></Password> 
                    }
                    {
                        state.count===3 &&  <Done props={this.props}></Done>
                    }
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {

    return {
        state:{...state}
    }
}
export default connect(mapStateToProps)(Index)