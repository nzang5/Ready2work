import React from 'react'
import pic from "../components/Screenshot_20220805-095639_Instagram.jpg";
import foto from "../components/Screenshot 2022-09-13 at 20.47.43.png";

const About = () => {
  return (
    <div className='aboutMainDiv'>
        
        <div className='infoDiv'>
        <img alt='Nash' className='lorenaPic' src={foto}></img>
        <h1>
            Nash Zangio
        </h1>
        <div className="descriptioncontainer">
            <p>
            
                adasdasdasdasdasda
                asdasdasrtdhsfdghsdasadasdasdas
                testtesttest
            </p>
            <p>adasdasdasdasdasdaasdasdas
            
            </p>
         </div>
        

        </div>
        <div className='infoDiv'>
        
        <img alt='Lorena' className='lorenaPic' src={pic}></img>
        <h1>Lorena Garcia</h1>
         <div className="descriptioncontainer">
            <p>
                adasdasdasdasdasda
                asdasdasdasadasdasdas
            </p>
            <p>adasdasdasdasdasdaasdasdas
            
            </p>
         </div>   
        </div>
    </div>
  )
}

export default About;