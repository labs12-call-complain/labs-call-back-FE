import React, { Component } from 'react';
import AudioAnalyser from './AudioAnalyser';

const audioType = 'audio/wav';

class Recording extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audio: null,
      recording: false,
      audios: [],
    };
    this.toggleMicrophone = this.toggleMicrophone.bind(this);
  }

  async getMicrophone() {
    const audio = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: false
    });
    this.setState({ audio });

    let mediaRecorder = new MediaRecorder(audio);
    // init data storage for video chunks
    this.chunks = [];
    // listen for data from media recorder
    mediaRecorder.ondataavailable = e => {
      if (e.data && e.data.size > 0) {
        this.chunks.push(e.data);
      }
    };
    console.log("right console log?", this.chunks)
    mediaRecorder.start(10);
    this.setState({recording: true});
  }

  stopMicrophone() {
    this.state.audio.getTracks().forEach(track => track.stop());
    this.setState({ audio: null });

    // this.mediaRecorder.stop();
    this.setState({recording: false});
    this.saveAudio();
  }

  async saveAudio() {
    const blob = await new Blob(this.chunks, {type: audioType});
    // generate video url from blob
    const audioURL = window.URL.createObjectURL(blob);
    // const file = blobToFile(blob, "my-recording.wav")
    // append videoURL to list of saved videos for rendering
    const audios = this.state.audios.concat([audioURL]);
    this.setState({audios});
    console.log(this.state.audios)
  }

  deleteAudio(audioURL) {
    // filter out current videoURL from the list of saved videos
    const audios = this.state.audios.filter(a => a !== audioURL);
    this.setState({audios});
  }

  toggleMicrophone() {
    if (this.state.audio) {
      this.stopMicrophone();
    } else {
      this.getMicrophone();
    }
  }

  render() {
    return (
      <div className="App">
        <div className="controls">
          <button onClick={this.toggleMicrophone}>
            {this.state.audio ? 'Stop Recording' : 'Start Recording'}
          </button>
        </div>
        {this.state.audio ? <AudioAnalyser audio={this.state.audio} /> : ''}
        <div>
          <h3>Recordings</h3>
          {this.state.audios.map((audioURL, i) => (
            <div key={i}>
              <audio controls style={{width: 200}} src={audioURL}   />
              <div>
                <button onClick={() => this.deleteAudio(audioURL)}>Delete Recording</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Recording;