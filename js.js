import   {LLLSV2Com}  from "./lowlevelcom.js"

var com = new LLLSV2Com("127.0.0.1");
document.querySelector('#bonjour').innerHTML = com._hostname;
document.querySelector('#disco').addEventListener('click',()=>{
    console.log('disconnection');
    com.disconnect();
})
document.querySelector('#connect').addEventListener('click',()=>{
    console.log('start connection');
    com.connect();
})
com.telegram("cv","er",10)