import Carousel from 'react-slick2';
import React from 'react';
import assign from 'object-assign';

const AntCarousel = React.createClass({
  getDefaultProps() {
    return {
      dots: true,
      arrows: false
    };
  },
  render() {
    let props = assign({}, this.props);

    if (props.effect === 'fade') {
      props.fade = true;
    }

    let className = 'ant-carousel';
    if (props.vertical) {
      className = className + ' ant-carousel-vertical';
    }

    return (
      <div className={className}>
        <Carousel {...props} />
      </div>
    );
  }
});

export default AntCarousel;
