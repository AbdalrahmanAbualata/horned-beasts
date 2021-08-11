
import React from 'react';
import HornedBeast from "./HornedBeasts"
import './Main.css';
import FilteredBeasts from "./FilteredBeasts"

class Main  extends React.Component {
  constructor (props){
    super(props);
      this.state={
        data : this.props.BeastsJsonM ,
        
      };
    }
    selectHorns = async (e) => {
      e.preventDefault();
      let filterdData = [];
      let num =Number(e.target.value);
      if (!(isNaN(num))) {
        console.log(num);
        filterdData = this.props.BeastsJsonM.filter((obj) => {
          if (obj.horns === num) {
            return 1;
          }
        });
      } else {
        console.log(num);
        filterdData = this.props.BeastsJsonM ;
      }
      await this.setState({
        data: filterdData,
      });
    };
    render() {
        return (
            <>
            <FilteredBeasts selectHorns={this.selectHorns}/>
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