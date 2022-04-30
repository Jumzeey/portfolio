import React from 'react'

const NaviagationDots = ({active}) => {
  return (
    <div className="app__navigation">
        {['home', 'about','work','skills','testimonial','case study','contact'].map((item, index) => (
         <a 
         href={`#${item}`} 
         key={item + index}
         className='app__navigation-dot'
         style={active === item ? { backgroundColor: '#313BAC' } : {}}
         
         />
        ))}
    </div> 
  )
}

export default NaviagationDots