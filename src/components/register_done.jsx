import React from 'react'
import {connect} from 'react-redux'
import { Table, Icon, Divider } from 'antd';
// const columns = [{
//     dataIndex: 'keyName',
//     key: 'keyName',
//     extra:"备注"
//   }, {
//     dataIndex: 'keyValue',
//     key: 'keyValue',
//   }];
  
  const columns = [{
    title: 'key',
    key: 'keyName',
    dataIndex: 'keyName',
  }, {
    title: '备注',
    dataIndex: 'extra',
    key: 'extra',
  }, {
    title: '私钥',
    dataIndex: 'keyValue',
    key: 'keyValue',
  }];

const Done =({postingError,users})=>{
    return (
        <div>
            <div style={{textAlign:"center",fontSize:"40px",color:"#f85251"}}>
                {
                    !postingError?<img src={require('../assets/images/content_icon_3.png')} alt=""/>
                    :<img src={require('../assets/images/content_icon_6.png')} alt=""/>
                }
                {
                    !postingError?<span style={{paddingLeft:"20px"}}>
                    恭喜注册成功
                    <br/>
                     <span style={{fontSize:'14px'}}>用户密钥已下载,请保存好密钥,不提供密码找回功能</span>    
                    </span>:
                    <span style={{paddingLeft:"20px",color:"#3d55f3"}}>注册失败</span>
                }
              
            </div>
            <div>
                {
                    !postingError?
                    <Table 
                        pagination={false}
                        columns={columns} 
                        dataSource={users}
                    />:null
                }
            </div>
        </div>
    )
}
export default connect(state=>{  
    console.log(state)
   return {...state.resisterUser}
})(Done)