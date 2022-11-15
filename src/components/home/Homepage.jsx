import React, { Component } from 'react'
import './CSS/Homepage.css'
import './CSS/button.css'

import girlimage from '../../assets/girlimage.png'

class Home extends Component {
  render() {
    return (
      <div>
        <div id="menu" className="fas fa-bars" />
        <section className="home" id="home">
          <div className="row">
            <div className="info">
              <h1><span>Bring your business online</span></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio deserunt aspernatur fugiat minus enim ullam repudiandae sint sed magnam tenetur! Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, at.
              </p>
                   <div className="btn">
                     <a href="#login"><button className="login-btn">Login <i className="fas fa-user" /></button></a>
                     <a href="#signup"><button className="signup-btn">Sign Up <i className="fas fa-user" /></button></a>
                  </div>
            </div>
            <div className="image">
              <img src={girlimage} alt=""/>
            </div>
          </div>
        </section>
        <section className="shop" id="shop">
        <h1 className="heading"> <span>Shop</span></h1>
        </section>
        <section className="education" id="education">
          <h1 className="heading"><span>education</span> </h1>
        </section>
        <section className="banking" id="banking">
          <h1 className="heading"><span>Banking</span> </h1>
        </section>
        <section className="contact" id="contact">
          <h1 className="heading"> <span>contact</span></h1>
        </section>
        {/* <a href="#home" className="top">
          <img src="images/scroll-top-img.png" alt="" />
        </a> */}
      </div>

    )
  }
}

export default Home;