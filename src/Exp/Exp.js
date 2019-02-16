import React from 'react';
import './Exp.css';
import TextEllipsis from 'react-text-ellipsis';
import Fade from 'react-reveal/Fade';

const Exp = ({ project_name, subject, language, detail, img_url }) => {
  return (
    <div className=" container-aboutme w-100 h-50 ">
      <div className="card-exp center flex " style={{ textAlign: 'left' }}>
        <div style={{ width: '60%', height: '100%' }} className="pa4 card-text-exp">
          <Fade bottom>
            <TextEllipsis
              lines={5}
              tag={'p'}
              ellipsisChars={'...'}
              tagClass={'className'}
              debounceTimeoutOnResize={200}
              useJsOnly={false}
              onResult={(result) => {
                if (result === TextEllipsis.RESULT.TRUNCATED)
                  console.log('text get truncated');
                else
                  console.log('text does not get truncated');
              }}>
              <span className="name-ex">{project_name}</span>  <br/>
              <span className="lang-ex">{language} </span>  <br/>
              <span className="detail-ex">{detail}</span>
            </TextEllipsis>
          </Fade>
        </div>
        <div className="img-ex h-100">
          <Fade bottom>
            <img src={img_url} alt="img" className="shadow-img br3" /> 
          </Fade>
        </div>
      </div>
      <div className="hr-ex"></div>
    </div>
  )
}
export default Exp;