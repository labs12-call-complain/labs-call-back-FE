import React, {Component} from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import './ComplaintCard.css';
import MaterialIcon, {colorPalette} from 'material-icons-react';
import axios from 'axios';

  export default class ComplaintCard extends Component {
      state = {
          votes: this.props.card.upvote
      }
      

    upvote = (e) => {
        console.log(this.props.card)
        this.setState({votes: this.state.votes + 1})

        axios.put(`http://adasdasd${this.props.card.id}`, {
            DisplayName: this.props.card.DisplayName ,
            Email: this.props.card.Email ,
            UID: this.props.card.UID ,
            StoreName: this.props.card.StoreName ,
            StoreLocation: this.props.card.StoreLocation ,
            text: this.props.card.text,
            upvote: this.state.votes
        })
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }

    downvote = (e) => {
        console.log(this.props.card)
        this.setState({votes: this.state.votes - 1})

        axios.put(`http://adasdasd${this.props.card.id}`, {
            DisplayName: this.props.card.DisplayName ,
            Email: this.props.card.Email ,
            UID: this.props.card.UID ,
            StoreName: this.props.card.StoreName ,
            StoreLocation: this.props.card.StoreLocation ,
            text: this.props.card.text,
            upvote: this.state.votes
        })
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }


    render() {
        return (
            <div>
                <Card className="card-container">

                        <div class="upvote-container">
                            <div>
                            <i class="fas fa-chevron-up" onClick={this.upvote}></i>
                        <p class="upvote">0</p>
                            <i class="fas fa-chevron-down"></i>
                            </div>
                        </div>

                    <CardBody>
                        
                    <div>
                        <div class="titleAddy">
                        <CardText className="cardTitle">{` ${this.props.card.StoreName}`}</CardText>

                        <CardText className="cardAddress">{`${this.props.card.StoreLocation}`}</CardText>
                        </div>

                        <CardText className="complaintText"><strong>{`${this.props.card.DisplayName}:`}</strong>{` ${this.props.card.text}`}</CardText>
                        

                        </div>

                    </CardBody>
                </Card>
            </div>
        );
    }
}
