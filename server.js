
const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler();
const GameBank =require('gamebank');
GameBank.api.setOptions({ url: 'http://192.168.1.88:8090' });
GameBank.config.set('address_prefix','TST');
GameBank.config.set('chain_id','18dcf0a285365fc58b71f18b3d3fec954aa0c141c44e4e5cb4cf777b9eab274e');
app.prepare()
.then(() => {
  const server = express();
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: true }));
  server.get('*', (req, res) => {
    return handle(req, res)
  })
  server.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    if (req.method == 'OPTIONS') {
      res.status(200); /让options请求快速返回/
    }
    next();
  });
  //请求链上数据检查 用户名是否存在
  server.post('/checkUserName', (req, res) => {

    GameBank.api.getAccounts([req.body.userName], function(err, result) {
   
      if(err){
         return res.status(500)
      }else{
     
        return res.status(200).json({user:result});
      }
    });
  })
//创建账户
server.post("/createCount",async(req,res)=>{
  const {userName,password}=req.body;
  if(!userName ||!password){
    return res.status(400).json({
      success:false
    })
  }
    //创建账户逻辑
    const publicKeys = GameBank.auth.generateKeys(userName, password, [
      'owner',
      'active',
      'posting',
      'memo',
    ]);

    const weightThreshold = 1;
    const accountAuths = [];
    const metadata = '';
    const owner = {
      weight_threshold: weightThreshold,
      account_auths: accountAuths,
      key_auths: [[publicKeys.owner, 1]],
  };
  const active = {
      weight_threshold: weightThreshold,
      account_auths: accountAuths,
      key_auths: [[publicKeys.active, 1]],
  };
  const posting = {
      weight_threshold: weightThreshold,
      account_auths: accountAuths,
      key_auths: [[publicKeys.posting, 1]],
  };

  const memoKey=publicKeys.memo;
    GameBank.broadcast.accountCreate('5JNHfZYKGaomSFvd4NUdQ9qMcEAC43kujbfjueTHpVapX1Kzq2n', '3000.000 GBC','initminer',userName,owner,active,posting,memoKey,metadata,(err, result)=>{
      if(err){
       return res.status(400).json({
          success:false,
          msg:err
        })
      }
    const private=GameBank.auth.getPrivateKeys(userName, password, ['posting','active','owner']);
    
    return  res.status(200).json({
        success:true,
        result:result,
        private:private
      })
    })
  })

  server.listen(3000, (err) => {
    if (err) throw err
  
  })
})
.catch((ex) => {
  process.exit(1)
})

