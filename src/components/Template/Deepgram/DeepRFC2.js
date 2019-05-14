import React from 'react';
import getUserMedia from 'get-user-media-promise';
import MicrophoneStream from 'microphone-stream';
const micStream = new MicrophoneStream();

export default function DeepRFC2() {
    

    try {
        const stream = getUserMedia({video: false, audio: true});
        micStream.setStream(stream);
    } catch (error) {
        console.log(error)
    }

    const handleStart = () => micStream.on('format', format => {
        console.log(format);
    })

    const handleStop = () => micStream.stop();
    
    return (
        <div>
            <h3>Mic Test</h3>
            <br/>
            <button onClick={handleStart}>Start</button>
            <button onClick={handleStop}>Stop</button>
        </div>
    )
}
