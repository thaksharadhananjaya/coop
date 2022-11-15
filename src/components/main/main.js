import React, { Component } from 'react'

import './CSS/button.css'
import './CSS/menubuttons.css'
import Home from '../home/Homepage'
import Product from '../product/product'
import coopsystem from '../../assets/coopsystem.png'

class Main extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          selectMenu: <Home/>
        };
      }

  render() {
    return (
      <div>
        <header>
          <div className="user">
            <img src={coopsystem}/>
          </div>
          <nav className="navbar">
            <ul>
              <li><a style={{color:"white"}} onClick={() => this.setState({selectMenu:<Home/>})}>Home</a></li>
              <li><a style={{color:"white"}}  onClick={() => this.setState({selectMenu:<Product/>})}>Shop</a></li>
              <li><a style={{color:"white"}} >Education</a></li>
              <li><a style={{color:"white"}} >Banking</a></li>
              <li><a style={{color:"white"}}>Contact</a></li>
            </ul>
          </nav>
        </header>

        {this.state.selectMenu}
       
 
        {/* <a href="#home" className="top">
          <img src="images/scroll-top-img.png" alt="" />
        </a> */}
      </div>

    )
  }
}

export default Main;