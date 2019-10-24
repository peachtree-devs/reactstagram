import React, { Component } from 'react';
import PeachStagram from '../../assets/peach.png';
import './Header.scss';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={PeachStagram} alt="PeachStagram"></img>
      </div>
    )
  }
}
