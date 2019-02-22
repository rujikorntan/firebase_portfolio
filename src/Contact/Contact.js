import React,{Component} from 'react';
import './Contact.css';
import Zoom from 'react-reveal/Zoom';

class Contact extends Component {
  componentDidMount(){
  }

  render(){
    return (
      <div className="w-100 flex container-contact">
        <Zoom>
          <div className="w-40 box-img">
            <img src='https://i.imgur.com/QC7wdDU.jpg' alt="map" className="img-map" />
          </div>
            <div className="card-addr w-20">
              <h1 className="txt-contact">Contact</h1>
              <p className="text-addr">
                419/1  Chalongkrung1 Ladkrabang <br />
                Ladkeabang Bangkok <br />
                Thailand,10520 <br />
              </p>
              <p>Tel : 097-2620-341</p>
              <p>Email : ruji-tan@hotmail.com</p>
            </div>
        </Zoom>
      </div>
    )
  }

}
export default Contact;