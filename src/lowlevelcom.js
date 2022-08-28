import { io } from "https://cdn.socket.io/4.4.1/socket.io.esm.min.js";
//import { io } from "./node_modules/socket.io/wrapper.mjs";
//import {socket} from './socket.io.js'
//const io = requirejs('socket.io')
//var io = socket.io()
function buf2hex(buffer) { // buffer is an ArrayBuffer
    return [...new Uint8Array(buffer)]
        .map(x => x.toString(16).padStart(2, '0'))
        .join('');
}

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
        this.socket.on('message', function(msg){
            //var bufView = new Uint8Array(msg);
            console.log(msg)
          });

        this.connected = true;
         
    };
    connect(){
        this.socket.connect();
        this.connected = true;
    }
    disconnect(){
        this.socket.disconnect(true);
        this.connected = false;
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
        var telegram=[];
        
        console.log("telegram to transmit: command %s payload length %d bytes data: %s",
            command,
            payload_length,
            telegram)
        try {
            this.socket.send(telegram)
        } catch (error) {
            console.error("something went wrong while waiting for new data to arrive, buffer was set to %d",buffer_size);
        }
        
    }
}