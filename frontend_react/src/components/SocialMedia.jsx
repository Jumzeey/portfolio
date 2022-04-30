import React from 'react';
import { BsTwitter, BsWhatsapp, BsInstagram, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <BsTwitter/>
        </div>
        <div>
            <BsWhatsapp/>
        </div>
        <div>
            <BsInstagram/>
        </div>
        <div>
            <BsLinkedin/>
        </div>
    </div>
  )
}

export default SocialMedia