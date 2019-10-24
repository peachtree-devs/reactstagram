import React, { Component } from 'react';
import './Footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="home">
          <i class="fas fa-home fa-lg"></i>
        </div>
        <div className="upload">
          <i class="far fa-plus-square fa-lg"></i>
        </div>
      </div>
    )
  }
}
