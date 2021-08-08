import React from 'react';
import './HornedBeast.css';

class HornedBeast extends React.Component {
 
  render() {

    return (

      <div className='apples'>
        <h2> {this.props.title} </h2>
        <h3> {this.props.keyword}</h3>
        <h3> {this.props.horns} </h3>
        <img src={this.props.imageUrl} alt={this.props.imageAlt} title={this.props.imageTitle}></img>
        <p> {this.props.description} 
        </p>

      </div>

    );
  }
}

export default HornedBeast;
