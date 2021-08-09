import React from 'react';
import './HornedBeast.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card} from 'react-bootstrap/';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        numberOfFavorites: 0
    }
}

increaseNumOfFavorites= () => {
    this.setState({
      numberOfFavorites: this.state.numberOfFavorites + 1
    })
}
  render() {

    return (

      <div className='apples'>
        {/* <h2> {this.props.title} </h2>
        <h3> keyword: {this.props.keyword}</h3>
        <h3> horns: {this.props.horns} </h3>
        <img onClick={this.increaseNumOfFavorites} src={this.props.imageUrl} alt={this.props.imageAlt} title={this.props.imageTitle}></img>
        <p className="favorites"> 💖favorites:{this.state.numberOfFavorites}</p>
        <p id='dis'> {this.props.description} 
        </p> */}
         <Card style={{ width: 'auto' }}>
         <Card.Title><h2> {this.props.title} </h2></Card.Title>
         {/* <Card.Title>keyword: {this.props.keyword}</Card.Title> */}
         <Card.Title><h3> horns: {this.props.horns} </h3></Card.Title>
                    <Card.Img onClick={this.increaseNumOfFavorites} variant="top" src={this.props.imageUrl} alt={this.props.imageAlt}title={this.props.imageTitle} />
                    <Card.Body>
                        
                        <Card.Text>
                        <p className="favorites"> 💖favorites:{this.state.numberOfFavorites}</p>
                        </Card.Text>
                        <p id='dis'> {this.props.description} 
        </p>
                    </Card.Body>
                </Card>


      </div>

    );
  }
}

export default HornedBeast;
