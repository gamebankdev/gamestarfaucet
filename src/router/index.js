import React from 'react'
import {Route} from 'react-router-dom'
import RegisterComponent from '../routes/Register.jsx'
export default ()=>{
    return(
        <Route exact path="/" component={RegisterComponent} /> 
    )
}
