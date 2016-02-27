'use strict';

import React from 'react';
import Radium from 'radium';

let CrossIcon = Radium(React.createClass({

  propTypes: {
    image: React.PropTypes.string,
    styles: React.PropTypes.object
  },

  getCrossStyle(type) {
    return {
      position: 'absolute',
      width: 3,
      height: 14,
      transform: type === 'before' ? 'rotate(45deg)' : 'rotate(-45deg)'
    };
  },

  getDefaultProps() {
    return {
      image: '',
      styles: {}
    };
  },

  render() {
    var icon;
    var buttonWrapperStyle = {
      position: 'absolute',
      width: 24,
      height: 24,
      right: 8,
      top: 8
    };
    var buttonStyle = {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      margin: 0,
      padding: 0,
      border: 'none',
      fontSize: 8,
      color: 'transparent',
      background: 'transparent',
      outline: 'none'
    };

    if (this.props.image) {
      icon = <img src={ this.props.image } alt="Cross icon" className="bm-cross" style={ [{width: '100%', height: '100%'}, this.props.styles.bmCross] }/>;
    } else {
      icon = (
        <span style={ [{position: 'absolute', top: '6px', right: '14px'}] }>
          <span className="bm-cross" style={ [this.getCrossStyle('before'), this.props.styles.bmCross] }></span>
          <span className="bm-cross" style={ [this.getCrossStyle('after'), this.props.styles.bmCross] }></span>
        </span>
      );
    }

    return (
      <div className="bm-cross-button" style={ [buttonWrapperStyle, this.props.styles.bmCrossButton] }>
        { icon }
        <button onClick={ this.props.onClick } style={ buttonStyle }>Close Menu</button>
      </div>
    );
  }
}));

export default CrossIcon;
