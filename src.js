import   {LLLSV2Com}  from "./src/lowlevelcom.js"

var com = new LLLSV2Com("127.0.0.1");
document.querySelector('#bonjour').innerHTML = com._hostname;
var status = document.querySelector('#status') 
document.querySelector('#disco').addEventListener('click',()=>{
    console.log('disconnection');
    com.disconnect();
})
document.querySelector('#connect').addEventListener('click',()=>{
    console.log('start connection');
    com.connect();
})
document.querySelector('#send').addEventListener('click',()=>{
    console.log('send');
    var payload = document.querySelector("#payload").value
    com.telegram("cv",payload,10);
})

setInterval(() => {
    status.innerHTML = com.connected
}, 2000);