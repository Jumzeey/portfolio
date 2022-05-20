import React, { useState, useEffect}  from 'react'
import { client } from "../../client";
import AppWrap from '../../wrapper/AppWrap'
import { InlineWidget } from "react-calendly";

import motionWrap from '../../wrapper/motionWrap';
import './Footer.scss';

const Footer = () => {

    
    return (
      <>
        <h2 className="head-text">Let's Discusss Your Business</h2>
        <div className="app__footer-form app__flex" >
          <div className="app ">
             <InlineWidget url="https://calendly.com/jumzeey/60min" style={{ minWidth:320, height:630 }}/>                    
            </div>
        </div>
      </>
    )
  }
 

export default AppWrap(
  motionWrap(Footer, 'app__works'),
   'footer',
   'app__primarybg'
   )