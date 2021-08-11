
import React from 'react';
import HornedBeast from "./HornedBeasts"
// import BeastsJson from "./BeastsJson";
import './Main.css';
class Main  extends React.Component {
  constructor (props){
    super(props);
      this.state={
        data : this.props.BeastsJsonM

      };
    }
    render() {
        return (
            <>
        {
           this.state.data.map((x,indx)=>{
            return(
              <HornedBeast  renderModal={this.props.renderModal}  key={indx} title = {x.title} imageUrl = {x.image_url} description = {x.description} keyword = {x.keyword} horns = {x.horns}/>
            );
          })
        }
            </>
        )
    }
}

export default Main;