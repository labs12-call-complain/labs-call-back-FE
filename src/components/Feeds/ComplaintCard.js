import React, {Component} from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import './ComplaintCard.css';
import MaterialIcon, {colorPalette} from 'material-icons-react';

  export default class ComplaintCard extends Component {
    render() {
        return (
            <div>
                <Card className="card-container">
                    <CardBody>
                        <div class="playbuttons">
                        <MaterialIcon icon="fast_rewind" />
                        <MaterialIcon icon="pause" />
                        <MaterialIcon icon="play_arrow" />
                        <MaterialIcon icon="fast_forward" />
                        </div>
                        <CardText class="complaintText">{this.props.card.complaint}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}
