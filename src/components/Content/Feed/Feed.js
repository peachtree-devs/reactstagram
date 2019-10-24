import React, { Component } from 'react';
import './Feed.scss';

export default class Feed extends Component {
  render() {
    return (
      <div className="feed">
        
        {/* User Header  */}
        <div className="post-header">
          <img alt="UserImage" src={this.props.post.userImage}></img>
          <span className="userName">{this.props.post.username}</span>
        </div>

        {/* User Content */}
        <div className="post-content">
          <img src={this.props.post.postImage}></img>
        </div>

        {/* User Content */}
        <div className="post-stats">
          <div className="hearts">
            <i class="far fa-heart fa-lg"></i>
          </div>
          <div className="likes">
            <span>{this.props.post.likes} Likes</span>
          </div>
          <div className="caption">
            <span>{this.props.post.username} {this.props.post.caption}</span>
          </div>
        </div>

      </div>
    )
  }
}
