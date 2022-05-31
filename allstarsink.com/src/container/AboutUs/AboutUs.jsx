import React from 'react';

import { images } from '../../constants';

import './AboutUs.css';

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="G_overlay" />
    </div>

    <div className="app__aboutus-content_about">
      <h1 className="headtext__cosmorant">About Us</h1>
      <img src={images.spoon} alt="about_spoon" className='spoon__img'/>
      <p className= "p__opensans" >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non nulla velit architecto? Consequuntur natus voluptatem et facilis excepturi illo quas blanditiis culpa quam quaerat. Nisi libero natus vel repellendus deserunt?</p>
      <button type="button" className="custom__button">Know More</button>
    </div>

  </div>
);

export default AboutUs;


/*

links to phone number and emails here */
