const  Steps=({props})=>{

    const gray={
        width:"10px",
        height:"10px",
        background:"#eff4f8",
        borderRadius:"100%",
        margin:"0 5px"
    }
    const blue={
        width:"15px",
        height:"15px",
        background:"#4ba2f2",
        borderRadius:"100%",
        margin:"0 5px"
    }
    return(
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <div>
                <img src="/static/images/log.jpg" alt="my image" />
            </div>
            <div style={{display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
                <div style={props.count==0?blue:gray}></div>
                <div style={props.count==1?blue:gray}></div>
                <div style={props.count==2?blue:gray}></div>
                <div style={props.count==3?blue:gray}></div>
                <div style={props.count==4?blue:gray}></div>
                
            </div>
            
         
        </div>
    )
}
export default Steps;