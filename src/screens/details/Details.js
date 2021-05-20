import React, { Component } from 'react';
import Header from '../../common/header/Header.js';
class Details extends Component{
    render(){
        return(
            <div className = "container">
                <Header />
                <div className = "left"></div>
                <div className = "right"></div>
                <div className = "middle"></div>
            </div>
        );
    }
}
export default Details;