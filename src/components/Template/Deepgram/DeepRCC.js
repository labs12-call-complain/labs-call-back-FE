import React, { Component } from 'react'
import getUserMedia from 'get-user-media-promise';
import MicrophoneStream from 'microphone-stream';
const micStream = new MicrophoneStream();


export default class DeepRCC extends Component {
    handleStart = () => {

        try {
            const stream = getUserMedia({video: false, audio: true});
            micStream.setStream(stream);
        } catch (error) {
            console.log(error)
        }

        micStream.on('format', format => {
            console.log(format);
        })

        // micStream.pipe()
    }

    handleStop = () => {
        micStream.stop();
    }

    render() {
        return (
        <div>
            <h3>Mic Test</h3>
            <br/>
            <button onClick={this.handleStart}>Start</button>
            <button onClick={this.handleStop}>Stop</button>
        </div>
        )
    }
}
