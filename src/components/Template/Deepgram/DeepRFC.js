import React from 'react'

const DeepRFC = () => {
    
    let constraintObj = {
        audio: true,
        video: true
    }

    
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
    } else {
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

    navigator.mediaDevices.getUserMedia(constraintObj)
        .then(function(mediaStreamObj) {
            //connect the media stream to the first video element
            let video = document.querySelector('video');
            if ("srcObject" in video) {
                video.srcObject = mediaStreamObj;
            } else {
                //old version
                video.src = window.URL.createObjectURL(mediaStreamObj);
            }
            
            video.onloadedmetadata = function(ev) {
                //show in the video element what is being captured by the webcam
                video.play();
            };
            
            //add listeners for saving video/audio
            let start = document.getElementById('btnStart');
            let stop = document.getElementById('btnStop');
            let vidSave = document.getElementById('vid2');
            let mediaRecorder = new MediaRecorder(mediaStreamObj);
            let chunks = [];
            
            start.addEventListener('click', (ev)=>{
                mediaRecorder.start();
                console.log(mediaRecorder.state);
            })
            stop.addEventListener('click', (ev)=>{
                mediaRecorder.stop();
                console.log(mediaRecorder.state);
            });
            mediaRecorder.ondataavailable = function(ev) {
                chunks.push(ev.data);
            }
            mediaRecorder.onstop = (ev)=>{
                let blob = new Blob(chunks, { 'type' : 'video/mp4;' });
                chunks = [];
                let videoURL = window.URL.createObjectURL(blob);
                vidSave.src = videoURL;
            }
        })
        .catch(function(err) { 
            console.log(err.name, err.message); 
        });
        

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

export default DeepRFC


// import React from 'react';

// export default Deep = () => {

//     let constraintObj = {
//         audio: true,
//         video: false
//     }

//     if (navigator.mediaDevices === undefined) {
//         navigator.mediaDevices = {};
//         navigator.mediaDevices.getUserMedia = function(constraintObj) {
//             let getUserMedia = navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
//             if (!getUserMedia) {
//                 return Promise.reject(new Error('getUserMedia is not implemented in this browser'));
//             }
//             return new Promise(function(resolve, reject) {
//                 getUserMedia.call(navigator, constraintObj, resolve, reject);
//             });
//         }
//     }else{
//         navigator.mediaDevices.enumerateDevices()
//         .then(devices => {
//             devices.forEach(device=>{
//                 console.log(device.kind.toUpperCase(), device.label);
//                 //, device.deviceId
//             })
//         })
//         .catch(err=>{
//             console.log(err.name, err.message);
//         })
//     }

//     navigator.mediaDevices.getUserMedia(constraintObj)
//         .then(function(mediaStreamObj) {
//             //connect the media stream to the first video element
//             let video = document.querySelector('video');
//             if ("srcObject" in video) {
//                 video.srcObject = mediaStreamObj;
//             } else {
//                 //old version
//                 video.src = window.URL.createObjectURL(mediaStreamObj);
//             }
            
//             video.onloadedmetadata = function(ev) {
//                 //show in the video element what is being captured by the webcam
//                 video.play();
//             };
            
//             //add listeners for saving video/audio
//             let start = document.getElementById('btnStart');
//             let stop = document.getElementById('btnStop');
//             let vidSave = document.getElementById('vid2');
//             let mediaRecorder = new MediaRecorder(mediaStreamObj);
//             let chunks = [];
            
//             start.addEventListener('click', (ev)=>{
//                 mediaRecorder.start();
//                 console.log(mediaRecorder.state);
//             })
//             stop.addEventListener('click', (ev)=>{
//                 mediaRecorder.stop();
//                 console.log(mediaRecorder.state);
//             });
//             mediaRecorder.ondataavailable = function(ev) {
//                 chunks.push(ev.data);
//             }
//             mediaRecorder.onstop = (ev)=>{
//                 let blob = new Blob(chunks, { 'type' : 'video/mp4;' });
//                 chunks = [];
//                 let videoURL = window.URL.createObjectURL(blob);
//                 vidSave.src = videoURL;
//             }
//         })
//         .catch(function(err) { 
//             console.log(err.name, err.message); 
//         });
        
        /*********************************
        getUserMedia returns a Promise
        resolve - returns a MediaStream Object
        reject returns one of the following errors
        AbortError - generic unknown cause
        NotAllowedError (SecurityError) - user rejected permissions
        NotFoundError - missing media track
        NotReadableError - user permissions given but hardware/OS error
        OverconstrainedError - constraint video settings preventing
        TypeError - audio: false, video: false
        *********************************/

    

    // var establishConnection = function() {
    //     console.log("Establishing connection.");
    
    //     // Configure the websocket connection.
    //     // The JSON WebSocket API doesn't allow extra headers (like "Authorization"),
    //     // but will still add the Basic Auth header if we embed credentials in the
    //     // connection string.
    //     socket = new WebSocket('wss://USERNAME:PASSWORD@brain.deepgram.com/listen/stream');
    //     socket.onopen = (m) => {
    //         console.log("Socket opened!");
    //     };
    //     socket.onclose = (m) => {
    //         console.log("Socket closed.");
    //     };
    
    //     socket.onmessage = (m) => {
    //         m = JSON.parse(m.data);
    
    //         // Grab the transcript.
    //         if (m.alternatives) {
    //             let transcript = m.alternatives[0].transcript;
    //             console.log("Received transcript: " + transcript);
    //         } else {
    //             console.log("Received metadata: " + m);
    //         }
    //     };
    // };
    
    // var socket = null;
    // establishConnection();
    
    // // Fake some data.
    // socket.send(new Uint8Array(1000));
    
    // // Close the connection.
    // socket.send(new Uint8Array(0));
    
// }