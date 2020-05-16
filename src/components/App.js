import React, { Component } from 'react';
import SearchCarousel from './SearchCarousel'
import Featured from './Featured'

import '../../src/App.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


class App extends Component {
    
    render() {
        return (
        <div className="container1">
           <div className="container2">
           <SearchCarousel />  
           <Featured />
           </div>       
        </div>
        );
    }
}

export default App;