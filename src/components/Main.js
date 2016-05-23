require('normalize.css/normalize.css');
require('styles/App.less');

let imageDatas =  require('../data/imageDatas.json');

import React from 'react';
// import {ReactDOM }from 'react-dom';
var ReactDOM = require('react-dom');

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
      <figure className='img-figure' style={this.props.style}>
        <img src={this.props.data.imageUrl}/>
        <figcaption>
        <h2 className='img-title'>{this.props.data.title}</h2>
        </figcaption>
      </figure>
      );
  }
});



class AppComponent extends React.Component {
  // var constants = {};

  constructor(props) {
    super(props);
    this.state = { asb:'ddd',imgsArrangeArr:[]};
    // this.setState({aa:'asd'})
    console.log(3333, this.state.asb);
    this.constants = {
      centerPos: {
        left: 0,
        top: 0
      },
      hPosRange: {
        leftSecX: [0,0],
        rightSecX: [0,0],
        y: [0,0]
      },
      vPosRange: {
        x: [0,0],
        topY: [0,0]
      }
    }
  }


  componentDidMount() {
    let stageDom = ReactDOM.findDOMNode(this.refs.stage),
        stageW = stageDom.scrollWidth,
        stageH = stageDom.scrollHeight,
        halfStageW = Math.ceil(stageW / 2),
        halfStageH = Math.ceil(stageH / 2);

    let imgFigureDOM = ReactDOM.findDOMNode(this.refs.imgFigure0),
        imgW = imgFigureDOM.scrollWidth,
        imgH = imgFigureDOM.scrollHeight,
        halfImgW = Math.ceil(imgW / 2),
        halfImgH = Math.ceil(imgH / 2);

    this.constants.centerPos = {
      left: halfStageW - halfImgW,
      top: halfStageH - halfImgH
    }
    this.constants.hPosRange.leftSecX[0] = -halfImgW;
    this.constants.hPosRange.leftSecX[1] = halfStageW - halfImgW *3;
    this.constants.hPosRange.rightSecX[0] = halfStageW + halfImgW;
    this.constants.hPosRange.rightSecX[1] = stageW - halfImgW;
    this.constants.hPosRange.y[0] = -halfImgH;
    this.constants.hPosRange.y[1] = halfStageH - halfImgH;

    this.constants.vPosRange.topY[0] = -halfImgH;
    this.constants.vPosRange.topY[1] = halfStageH - halfImgH * 3;
    this.constants.vPosRange.x[0] = halfStageH - halfImgH;
    this.constants.vPosRange.x[0] = halfStageH;

    console.log(12333, this.constants);
    this.reArrange(0);
  }

  reArrange(centerIndex){
    let imgsArrangeArr = this.state.imgsArrangeArr;
    console.log(111, imgsArrangeArr);
    let constants = this.constants;
    let centerPos = constants.centerPos;
    let hPosRange = constants.hPosRange;
    let vPosRange = constants.vPosRange;
    let hPosRangeLeftSecX = hPosRange.leftSecX;
    let hPosRangeRightSecX = hPosRange.RightSecX;
    let hPosRangeY = hPosRange.y;
    let vPosRangeTopY = vPosRange.topY;
    let vPosRangeX = vPosRange.x;

    let imgsArrangeTopArr = [];
    let topImgNum = Math.ceil( Math.random() * 2);
    let topImgIndex = 0;
    let imgCenterArr = imgsArrangeArr.splice(centerIndex, 1);
    imgCenterArr[0].pos = centerPos;
    console.log(222, imgCenterArr[0].pos);
    imgsArrangeArr.splice(centerIndex, 0, imgCenterArr[0]);
    this.setState({imgsArrangeArr: imgsArrangeArr});
    console.log(222, imgsArrangeArr[0]);
  };


  render() {
    let controllerUnits = [];
    let pics = [];

    imageDatas.forEach( function(value, index) {

      if (!this.state.imgsArrangeArr[index]) {
        this.state.imgsArrangeArr[index] = {
          pos: {
            left: 10,
            top: 110
          }
        }
      }
      // console.log(123, this.state.imgsArrangeArr[index].pos);
      //
      pics.push(<ImgFigure data={value} ref={'imgFigure' + index} style={this.state.imgsArrangeArr[index].pos}/>);
    }.bind(this));
    console.log(111,pics);

    return (
      <section className="stage" ref='stage'>
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
