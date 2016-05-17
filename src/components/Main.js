require('normalize.css/normalize.css');
require('styles/App.css');

let imageDatas =  require('../data/imageDatas.json');

import React from 'react';

let yeomanImage = require('../images/1.jpg');

let getImageURL = (imageDataArr) =>{
  console.log(1233)
  for(var i = 0, j = imageDataArr.length; i < j; i++){
    let ima = imageDataArr[i];
    ima.imageUrl = require('../images/' + ima.fileName);
  }
  return imageDataArr;
}

imageDatas = getImageURL(imageDatas);
console.log(111, imageDatas);

class AppComponent extends React.Component {
  render() {
    return (
      <section className="stage">
        <section className='img-sec'>
        </section>
        <nav className='controller-nav'>
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
