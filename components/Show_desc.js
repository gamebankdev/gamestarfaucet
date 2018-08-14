import { incrementCount, decrementCount, resetCount } from '../store';
const  ShowDesc=({props})=>{
        const {dispatch}=props;
        return(
            <div>
                <h3>Sign up options</h3>
                <p>
                 gamebank is not a typical social app. It's powered by the gamebank blockchain.
                </p>
                <p>
                The gamebank blockchain powers many real time content apps like gamebank, and is run by community members all around the world. To help protect them against bots and name squatters, a small fee is charged to create new accounts.
                </p>
                <p>
                We're happy to cover this fee for you but we'll need your email and phone number to manually check that you're a real person. This process could take 1-2 weeks.
                </p>
                <p>
                If you'd like to skip the queue or stay anonymous, you can pay the account creation fee using a third party service.
                </p>
                <button 
                    onClick={()=>{dispatch(incrementCount())}}
                    style={{
                        color:"#fff",
                        background:"#4ba2f2",
                        outline:"none",
                        width:"120px",
                        fontSize:"16px",
                        textAlign:"center",
                        letterSpacing:"5px",
                        border:"0",
                        borderRadius:"10px",
                        height:"40px"}}>
                        立即注册
                    </button>
            </div>
        )
}
export default ShowDesc