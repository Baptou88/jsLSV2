import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";
//import { io } from "./node_modules/socket.io/wrapper.mjs";
export  class LLLSV2Com {
    _DEFAULT_PORT = 19000;
    _DEFAULT_BUFFER_SIZE = 256;
    
    constructor (hostname,port=this._DEFAULT_PORT,timeout=15.0){
        this._hostname = hostname;
        this.socket = io(this._hostname +":19000")
        this.socket.on("connect", () => {
            console.log("er");
            console.log(this.socket.connected);
        });
        this.socket.on("connection", (socket) => {
            console.log("connection ")
        });
        this.socket.on("new_msg", function(data) {
        alert(data.msg);
        });
        this.socket.on('disconnect', function() {
            console.log('Got disconnect!');
        })
        
          
    };
    connect(){
        this.socket.connect();
    }
    disconnect(){
        this.socket.disconnect(true);
    }
    telegram(command,payload=undefined,buffer_size=0,wait_for_response=true){
        var payload_length
        if (payload === undefined) {
            payload_length = 0  
        } else {
            payload_length = payload.length
        }
        console.log(payload_length);
        if (buffer_size<8) {
            buffer_size = this._DEFAULT_BUFFER_SIZE
            console.error("size of receive buffer to small, set to default of %d bytes",
            this._DEFAULT_BUFFER_SIZE)

        }
        var telegram = new Array()
        telegram.push()
        
        this.socket.send("er")
    }
}