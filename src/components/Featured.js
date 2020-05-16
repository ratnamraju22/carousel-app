import React, { Component } from 'react';
import '../../src/App.css'

class Featured extends Component {
    state = { result: {} }    

componentDidMount() {
   fetch('https://demo3136867.mockable.io/featured')
  .then ((response) => response.json())
  .then(data => {
    this.setState({
        result: data        
        })  
    })
    }
  
render() {
    return (
        <div>
            <div className="featured-title">
            Featured
            </div>
        <div className="featured">            
            {this.state.result&&this.state.result.data&&this.state.result.data.map((res) => (
            
            <div key={res.title} class="card">
                <img className="image" src={res.img} alt={res.title}/>
                <div className="title">
                {res.title}
                </div>
                <div className="location">
                
                {res.location}
                </div>     
            </div>)
                )}            
            </div>
        </div>       
        );        
        }
}

export default Featured;