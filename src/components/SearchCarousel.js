import React, { Component } from 'react';
import Slider from "react-slick"

class NewSearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            inputValue:""      
        }

this.handleChange = this.handleChange.bind(this)   
    }

componentDidMount() {
    fetch('http://demo3136867.mockable.io/carousel')
    .then ((response) => response.json())
    .then(res => 
    this.setState({
      images: res.data,
      imagesCopy: res.data,        
      }))
    }

handleChange(e) {
    let newList = [];
    const inputVal = e.target.value;
    console.log('images: ', this.state.images);
if (inputVal !== "") {
    newList = this.state.imagesCopy.filter(item => {
    const lc = item.title.toLowerCase();
    const filter = inputVal.toLowerCase();
    return lc.includes(filter);
  });
} else {
    newList = [...this.state.images];
}
    
this.setState({
    images: newList,
    inputValue: inputVal
});
}

render() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    }
    return(
        <div>
        <div>
            <input type="text" className="text-input" value={this.state.inputValue} onChange={this.handleChange} placeholder="Search for..." />
        </div>
        
        <div className="featured-title">
            Popular around you
        </div> 
        {console.log('len: ', this.state.images.length)}       
        <Slider {...settings}>              
        {this.state.images&&this.state.images.map((res) => (                                    
            <div key={res.title} className="card2">
            
            <img className="image2" src={res.img} alt={res.title}/>
            <div className="title">
                {res.title}
            </div>
            <div className="location">
                {res.title}
            </div>
            </div>                  
            )                
            )}                                         
        </Slider>        
    </div>
    
    )}
}

export default NewSearchBar