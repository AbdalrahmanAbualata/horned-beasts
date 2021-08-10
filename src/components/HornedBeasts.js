import React from 'react';
import './HornedBeast.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap/';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfFavorites: 0
    }
  }

  increaseNumOfFavorites = () => {
    this.setState({
      numberOfFavorites: this.state.numberOfFavorites + 1
    })
  };
  renderModal=()=>{
    this.props.renderModal(this.props.keyword);
  };
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
        <Card   style={{ width: 'auto' }}>
          <Card.Title onClick={this.renderModal}><h2> {this.props.title} </h2></Card.Title>
          {/* <Card.Title>keyword: {this.props.keyword}</Card.Title> */}
          <Card.Title><h3> horns: {this.props.horns} </h3></Card.Title>
          <Card.Img  onClick={this.increaseNumOfFavorites} variant="top" src={this.props.imageUrl} alt={this.props.imageAlt} title={this.props.imageTitle} />
          <Card.Body>
            <Card.Text>
              <Button  onClick={this.renderModal} id="button" variant="primary"> ℹ️ Show Information </Button>

              <p className="favorites"> 💖favorites:{this.state.numberOfFavorites} </p>
              <p id='dis'> {this.props.description} </p>
            </Card.Text>
            
          </Card.Body>
        </Card>


      </div>

    );
  }
}

export default HornedBeast;
