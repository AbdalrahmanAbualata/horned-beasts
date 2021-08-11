import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form ,FloatingLabel} from 'react-bootstrap/';
export class FilteredBeasts extends React.Component {
    
    changePic=(e)=>{
        this.props.selectHorns(e);
      };
  
    render() {
        return (
            <div id="form">
                <FloatingLabel  controlId="floatingSelect" label="Select To Filter By Number Of Horns 🦄">
                    <Form.Select aria-label="Floating label select example" onChange={this.changePic} >
                        <option value="all" >  All The Horned Beasts </option>
                        <option value="1">One(1 🦄)</option>
                        <option value="2">Two(2 🦄)</option>
                        <option value="3">Three(3 🦄)</option>
                        <option value="100">hundred(100 🦄)</option>
                    </Form.Select>
                </FloatingLabel>
           </div>
        )
    }
}

export default FilteredBeasts
