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
            <p>After a few years in an IT support role, i'm now furthering my knowledge towards the engineering parts of the tech industry.</p>
            <p>I’ve recently went through a 9-week intensive Bootcamp @Ironhack where I learned a variety of technology’s such as this React.js project.</p>
            <p>Ready2Work is a React application fetching an API of jobs in Germany. It allows users to apply for work that best suits their skills.</p>
            <a href='https://www.linkedin.com/in/nashzangio/'><img className='githubIcon' alt="github" src={LinkedIn}></img>LinkedIn account</a>
            <br/>
            <a href='github.com/LGG93'><img className='githubIcon' alt="github" src={GitHub}></img>github.com/LGG93</a>
         </div>
        

        </div>
        <div className='infoDiv'>
        
        <img alt='Lorena' className='lorenaPic' src={pic}></img>
        <h1>Lorena Garcia</h1>
         <div className="descriptioncontainer">
            <p>After working in Tourism for years I decided to do a career change and start this amazing adventure at Ironhack.</p>
            <p>Something Nash and I have in common is that we both live currently in Germany and try to find an opportunity as Web Developers, that is how we came to the idea of creating Ready2Work, a place for people like us in search of our dream job.</p>
            <a href='https://www.linkedin.com/in/lorena-garcia-galan'><img className='githubIcon' alt="github" src={LinkedIn}></img>LinkedIn account</a>
            <br/>
            <a href='github.com/LGG93'><img className='githubIcon' alt="github" src={GitHub}></img>github.com/LGG93</a>
            
         </div>   
        </div>
    </div>
  )
}

export default About;