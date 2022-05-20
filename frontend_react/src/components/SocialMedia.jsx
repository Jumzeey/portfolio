import React from 'react';
import { BsTwitter, BsWhatsapp, BsInstagram, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
            <a href= 'https://twitter.com/DevJumzeey'><BsTwitter/></a>
        </div>
        <div>
            <a href= 'https://wa.link/xzpemx'><BsWhatsapp/></a>
        </div>
        <div>
            <a href= 'https://www.instagram.com/jumzeey.dev/'><BsInstagram/></a>
        </div>
        <div>
            <a href= 'https://www.linkedin.com/in/jumat-adeogun-29a021121/'><BsLinkedin/></a>
        </div>
    </div>
  )
}

export default SocialMedia