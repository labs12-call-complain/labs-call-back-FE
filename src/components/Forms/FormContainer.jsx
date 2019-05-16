import React, { Component } from "react";
import * as firebase from "firebase";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import fire from "../Firebase/firebase";
import Form1 from "./Form1.jsx";
import Form2 from "./Form2.jsx";
import Form3 from "./Form3.jsx";
import Form4 from "./Form4.jsx";
import Success from "./Form5.jsx";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import Navigation from "../Navigation/navigation";
import axios from "axios";

const audioType = "audio/wav";

class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      username: "jay",
      email: "",
      icon: null,
      audio: null,
      recording: false,
      audios: [],
      transcription: "",
      audioUrl: "",
      audioChunks: []
    };
    
  }


  

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  // async getMicrophone() {
  //   const audio = await navigator.mediaDevices.getUserMedia({
  //     audio: true,
  //     video: false
  //   });
  //   this.setState({ audio });

  //   let mediaRecorder = new MediaRecorder(audio);
  //   // init data storage for video chunks
  //   this.chunks = [];
  //   // listen for data from media recorder
  //   mediaRecorder.ondataavailable = e => {
  //     if (e.data && e.data.size > 0) {
  //       this.chunks.push(e.data);
  //     }
  //   };
  //   console.log("right console log?", this.chunks);
  //   mediaRecorder.start(10);
  //   this.setState({ recording: true });
  // }

  // stopMicrophone() {
  //   this.state.audio.getTracks().forEach(track => track.stop());
  //   this.setState({ audio: null });

  //   // this.mediaRecorder.stop();
  //   this.setState({ recording: false });
  //   // save audio is working
  //   this.saveAudio();
  // }

  async saveAudio() {
    const blob = await new Blob(this.chunks, { type: audioType });
    // generate video url from blob
    const audioURL = window.URL.createObjectURL(blob);

    this.setState({
      audioUrl: audioURL
    });
    // const file = blobToFile(blob, "my-recording.wav")
    // append videoURL to list of saved videos for rendering
    const audios = this.state.audios.concat([audioURL]);
    this.setState({ audios });
    // acutal working axios call
    console.log(this.state.audios);
    console.log(blob);
    let data = blob;
    let contentType = "audio/wav";
    let authHeaders =
      "Basic Y2FsbGFuZGNvbXBsYWluQGdtYWlsLmNvbTpjYWxsY29tcGxhaW4xMjM0NTY3ODk=";
    let dgheaders = {
      "Content-Type": contentType,
      Authorization: authHeaders
    };
    console.log(data, dgheaders);
    axios
      .post(`https://brain.deepgram.com/v2/listen`, data, {
        headers: dgheaders
      })
      .then(res => {
        console.log(
          "response:",
          res.data.results.channels[0].alternatives[0].transcript
        );
        this.setState({
          transcription: res.data.results.channels[0].alternatives[0].transcript
        });
      })
      .catch(err => console.log(err));
  }

  deleteAudio(audioURL) {
    // filter out current videoURL from the list of saved videos
    const audios = this.state.audios.filter(a => a !== audioURL);
    this.setState({ audios });
  }

  toggleMicrophone() {
    if (this.state.audio) {
      this.stopMicrophone();
    } else {
      this.getMicrophone();
    }
  }

  transcribe = e => {
    e.preventDefault();
    // let data = this.state.audios
    // let contentType = 'audio/wav';
    // let authHeaders = 'Basic Y2FsbGFuZGNvbXBsYWluQGdtYWlsLmNvbTpjYWxsY29tcGxhaW4xMjM0NTY3ODk='
    // let dgheaders = {
    //     "Content-Type": contentType,
    //     "Authorization": authHeaders
    // }
    // console.log(data, dgheaders)
    // axios
    //     .post(`https://brain.deepgram.com/v2/listen`, data, {headers: dgheaders})
    //     .then(res => {
    //         console.log("response:", res)
    //         })
    //     .catch(err => console.log(err));
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  updateTranscription = (transcription) => {
    this.setState({
      text: transcription 
    })
  }

  recording = (recording) => {
    this.setState({
      recording: recording 
    })
  }

  audio = (audio) => {
    this.setState({
      audio: audio 
    })
  }

  setAudioUrl = (url) => {
    this.setState({
      audioUrl: url
    })
  }

  setAudios = (audios) => {
    this.setState({
      audios: audios
    })
  }

  setTranscription = (transcript) => {
    this.setState({
      transcription: transcript
    })
    
  }



  render() {
    const { step } = this.state;
    const { username, email } = this.state;
    const values = { username, email };

    switch (step) {
      case 1:
        return (
          <>
            <Form1
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          </>
        );
      case 2:
        return (
          <>
            <Form2
            stateTranscription={this.state.transcription}
            setTranscriptionProps={this.setTranscription}
            setAudiosProp={this.setAudios}
            setUrl={this.setAudioUrl}
            audioState={this.audio}
            recordingState={this.recording}
            updateTranscriptionProp={this.updateTranscription}
            transcription={this.state.transcription}
              saveAudio={this.saveAudio}
              transcribe={this.transcribe}
              deleteAudio={this.deleteAudio}
              audios={this.state.audios}
              audio={this.state.audio}
              toggleMicrophone={this.toggleMicrophone}
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          </>
        );
      case 3:
        return (
          <>
            <Form3
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          </>
        );
      case 4:
        return (
          <>
            <Form4
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          </>
        );
      case 5:
        return (
          <>
            <Success />
          </>
        );
    }

    return <p>{this.state.username}</p>;
  }
}

export default FormContainer;
