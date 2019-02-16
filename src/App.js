import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar/Navbar';
import ImageHeader from './ImageHeader/ImageHeader';
import AboutMe from './AboutMe/AboutMe';
import Exp from './Exp/Exp';
import Contact from './Contact/Contact';
import Fade from 'react-reveal/Fade';
import Footer from './Footer/Footer'


const exp = [
  {
    project_name: 'Face Detection',
    subject: 'Software Engineering',
    language: 'HTML, CSS, ReactJS, nodeJS, Postgresql, ExpressJS, API',
    detail: 'The website can detect the face human by using clarifai API. The user must log in before using face detection.',
    img_url: 'https://i.imgur.com/m3XFZFI.png?1'
  },
  {
    project_name: 'Finding Translator',
    subject: 'Software Engineering',
    language: 'HTML, Javascript, CSS, VueJS',
    detail: 'The website is about finding the translator to translate a task and the translator can register to find customers. By allowing both agree together.',
    img_url: 'https://i.imgur.com/mCm4OUW.jpg'
  },
  {
    project_name: 'meBUFFET',
    subject: 'OOAD',
    language: 'JavaFX',
    detail: 'This app is about managing the restaurant. A user can manage raw material, member, employee and others.',
    img_url: 'https://i.imgur.com/0gGM9Hp.jpg'
  },
  {
    project_name: 'Aspasia of chaois',
    subject: 'OOAD',
    language: 'JavaFX',
    detail: 'This game can play by two players who choose the race and battle each other by release pensioner. The winner is who can make a health bar of the opponent destroyed first',
    img_url: 'https://i.imgur.com/hkbhgmJ.png'
  },
]
const exp_all = exp.map((obj, index) => {
  return (
    <Exp
      project_name={obj.project_name}
      subject={obj.subject}
      language={obj.language}
      detail={obj.detail}
      img_url={obj.img_url}
      key={index}
    />
  )
})
class App extends Component {
  constructor(){
    super();
    this.state = {
      route : 'me'
    }
    this.me = React.createRef();
    this.experience = React.createRef();
    this.contact = React.createRef();
  }
  componentDidMount(){
  }

  onRouteChange = (route) =>{
    this.setState({route : route});
    if(route === "me"){
      this.me.current.scrollIntoView({ behavior: 'smooth', block: 'start' })  
    }else if(route === "experience"){
      this.experience.current.scrollIntoView({ behavior: 'smooth', block: 'start'})
    }else if(route === "contact"){
      this.contact.current.scrollIntoView({ behavior: 'smooth', block: 'start' })      
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar onRouteChange={this.onRouteChange} />
        <ImageHeader />
        <div ref={this.me} style={{paddingTop:'150px'}}></div>    {/*stop scroll for about Me*/}
        <Fade bottom>
          <AboutMe />
        </Fade>
        <div ref={this.experience} style={{paddingTop:'60px'}}></div>    {/*stop scroll for experience*/}
        <div className="bg-strip pb5" >
          <div className="w-100 pa4" >
            <Fade bottom>
              <h1 className="certer">Project Done</h1>
            </Fade>
          </div>
          <div className="pt4 w-100 center br4 exp-box" style={{ backgroundColor: "#fafafa" , maxWidth:"900px"}}>
            {exp_all}
          </div>
        </div>
        <div ref={this.contact}>         {/*stop scroll for experience*/}
          <Fade bottom>
            <Contact />
          </Fade>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
