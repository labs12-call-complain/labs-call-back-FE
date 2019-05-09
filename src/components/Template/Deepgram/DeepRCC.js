import React, { Component } from 'react'

export default class DeepRCC extends Component {
    state = {
        recording: null
    }
    
componentDidMount( ){

    let constraintObj = {
        audio: true,
        video: true
    }


    //References Navigator in the the Browser.. Needed to access Mic and/or Camera
    if (navigator.mediaDevices === undefined) {
        navigator.mediaDevices = {};
        navigator.mediaDevices.getUserMedia = function(constraintObj) {
            let getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
            if (!getUserMedia) {
                return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
            }
            return new Promise(function(resolve, reject) {
                getUserMedia.call(navigator, constraintObj, resolve, reject);
            });
        }
    }else{
        navigator.mediaDevices.enumerateDevices()
        .then(devices => {
            devices.forEach(device=>{
                console.log(device.kind.toUpperCase(), device.label);
                //, device.deviceId
            })
        })
        .catch(err=>{
            console.log(err.name, err.message);
        })
    }
}
    

    render() {
        return (
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit molestiae itaque facere totam saepe tempore esse temporibus, quae reprehenderit aliquid iusto ea laborum, iure eligendi odio exercitationem sapiente illum quos.</p>
        
            <p><button id="btnStart">START RECORDING</button><br/>
            <button id="btnStop">STOP RECORDING</button></p>
            
            <audio controls></audio>
            
            <audio id="audio2" controls></audio>
        </div>
        )
    }
}
