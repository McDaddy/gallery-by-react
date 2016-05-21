require('normalize.css/normalize.css');
require('styles/App.less');

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

let ImgFigure = React.createClass({
  render: function(){
    return (
      <figure className='img-figure'>
        <img src={this.props.data.imageUrl}/>
        <figcaption>
        <h2 className='img-title'>{this.props.data.title}</h2>
        </figcaption>
      </figure>
      );
  }
});

class AppComponent extends React.Component {
  render() {
    let controllerUnits = [];
    let pics = [];

    imageDatas.forEach( function(value) {
      pics.push(<ImgFigure data={value} />);
    });
    console.log(111,pics);

    return (
      <section className="stage">
        <section className='img-sec'>
          {pics}
        </section>
        <nav className='controller-nav'>
          {controllerUnits}
        </nav>
      </section>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
