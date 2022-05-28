
import React from 'react';
//import logo from '../logo.svg';




class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {input: ""};
        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(event) { 
        console.log('The checkbox was toggled'); 
        if (this.state.input==''){
            this.setState({input: "hhhahhahahahahah"})
        } else {
            this.setState({input: ""})
        }
        
      }; 


    render() {

        let input_text = this.state.input

        return (
            <div className="App">
                <p>Hello Welcome to my portfolio</p>
                <div>  
                    <input type="checkbox" onChange={this.handleChange} /> 
                    <label>Introduction</label>
                </div>
                <p>{input_text}</p>
            </div>
            
        );
    }

};

export default Home;