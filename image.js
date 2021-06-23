import React from 'react';
import logo from './img/lion.jpg'; // relative path to image 
import logos from './img/logo192.png';
import logox from './img/Dog.jpg';

export class Image extends React.Component { 
    render() {
        function makeDog(e) {
            e.target.setAttribute( 'src', 'https://source.unsplash.com/LYK3ksSQyeo');
            e.target.setAttribute('alt', 'dog');
          }
        return (
            <div>
                <img src={logo} alt={"logo"} width={'20%'} height={'20%'}/>
                <img src={logos} alt={"logo"} width={'20%'} height={'20%'}/>
                <img src={logox} alt={"logo"} width={'20%'} height={'20%'} onClick={makeDog}/>

            </div>
         
      
      
    );
  }
}


export default Image;
function makeDog(e) {
    e.target.setAttribute( 'src', 'https://source.unsplash.com/LYK3ksSQyeo');
    e.target.setAttribute('alt', 'dog');
  }
  
  const cat = (
    <div>
  <img src="https://source.unsplash.com/Qmox1MkYDnY" alt="cat" onClick={makeDog}
    />
      <p>Click on the photo</p>
    </div>
  );
  
