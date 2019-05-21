import React, { Component } from 'react';
import axios from 'axios';

export default class TwitterTemp extends Component {
    state = {
        tweet: ' '

    }

    head = {
        oauth_callback: 'http://localhost:3000',
        oauth_consumer_key: 'hdfa5JGHtsqsgzhQMqAPTjSns'
    }

    handleChange = e => {
        // e.preventDefault();
        this.setState({
            ...this.state.tweet,
            tweet: {[e.target.name]: e.target.value}
        })
    }

    handleSubmit = (e, tweet) => {
        e.preventDefault()
        axios
            .post(
                `https://api.twitter.com/1.1/statuses/update.json?status=${this.state.tweet}`, 
                {"headers": this.head }
            )
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
        <div>
            <form onSubmit = {this.handleSubmit}>
                {/* <input
                    type = "text"
                    name = ""  
                    value = ""
                    placeholder = ""
                    onChange = ""    
                /> */}
                <input 
                    type="text"
                    name="name"
                    value={this.state.tweet}
                    placeholder="Tweet..."
                    onChange={this.handleChange}
                />
                <button type="submit">Submit</button>

                
            </form>
        </div>
        )
    }
}
