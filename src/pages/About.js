import React from 'react'
import pic from "../components/Screenshot_20220805-095639_Instagram.jpg";
import foto from "../components/Screenshot 2022-09-13 at 20.47.43.png";
import  GitHub  from './GitHub.png';
import LinkedIn from './linkedin_icon.png'

const About = () => {
  return (
    <div className='aboutMainDiv'>
        
        <div className='infoDiv'>
        <img alt='Nash' className='lorenaPic' src={foto}></img>
        <h1>
            Nash Zangio
        </h1>
        <div className="descriptioncontainer">
            <p>adasdasdasdasdasdaasdasdas</p>
         </div>
        

        </div>
        <div className='infoDiv'>
        
        <img alt='Lorena' className='lorenaPic' src={pic}></img>
        <h1>Lorena Garcia</h1>
         <div className="descriptioncontainer">
            <p>After working in Tourism for years I decided to do a career change and start this amazing adventure at Ironhack.</p>
            <p>Something Nash and I have in common is that we both live currently in Germany and try to find an opportunity as Web Developers, that is how we came to the idea of creating Ready2Work, a place for people like us in search of our dream job.</p>
            <p><img className='githubIcon' alt="github" src={GitHub}></img>github.com/LGG93</p>
            <p><img className='githubIcon' alt="github" src={LinkedIn}></img>www.linkedin.com/in/lorena-garcia-galan</p>
         </div>   
        </div>
    </div>
  )
}

export default About;