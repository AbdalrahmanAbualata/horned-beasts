import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import BeastsJson from "./components/BeastsJson.json";
import SelectedBeast from './components/SelectedBeast';
class App extends React.Component{

  constructor (props){
    super(props);
      this.state={
        clickedAnimal: {},
        show:false ,
      };
    }
    renderModal=(keyword)=>{
      let clickedBeast = BeastsJson.find((beast) => {
        if (beast.keyword === keyword) {
          return beast;
        };
      });
      this.setState({
        clickedAnimal: clickedBeast,
        show:true ,
      });
     
    };

    
    handleClose=()=>{
      this.setState({
        // clickedAnimal: {},
        show:false,
      });
    };

  render(){
    return(
      <>
     
        <Header  />
        <Main renderModal={this.renderModal}  />
        <SelectedBeast clickedAnimal={this.state.clickedAnimal} show={this.state.show} handleClose={this.handleClose}/>
        <Footer />
      </>
    
    )
  }
}

export default App;
