import React from 'react';
import './AboutMe.css'

const AboutMe = () => {
  return (
    <div className="container-about  w-100">

      <div className="text-about-me">
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          Hello, my name is Rujikorn Yoocharoensub and my nickname is Tan.       
          This year I am 21 years old. Now, I am studying in the 3rd year of the faculty of computer engineering, 
          King Mongkut's Institute of Technology Ladkrabang(KMITL) and
          interested in web developer and Android developer. <br /><br />
          
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            At this moment, I am looking for an internship for summer (June - July) although I don’t have 
          any experience for real work I believe that my education and my effort will make me work 
          assignments successfully.
        </p>
        
      </div>
      {/* <img src='https://i.imgur.com/a9xmS5S.jpg' height="auto" width="10%" alt="aboutMe" className="center bg-img-about"/> */}
      <img src='https://i.imgur.com/7WIrdIr.jpg' height="auto" width="100%" alt="aboutMe" className="center image-center "/>


    </div>
  )
}
export default AboutMe;