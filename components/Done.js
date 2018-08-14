const Done=({props})=>{

    const {active,activePubkey,owner,ownerPubkey,posting,postingPubkey}=props.state.createResult
    return(
        <div>
            <h1>恭喜您，您已完成注册</h1>
            <h4>active</h4>
            <p>{active}</p>
                <h4>activePubkey</h4>
                {activePubkey}
            <h3>owner</h3>
            <p>{owner}</p>
            <h4>ownerPubkey</h4>
            {ownerPubkey}
            <h3>posting</h3>
            <p>{posting}</p>
            <h4>postingPubkey</h4>
            {postingPubkey}
        </div>
    )

}
export default Done;