import React, { Component } from 'react';
import Feed from './Feed/Feed';

export default class Content extends Component {
  constructor() {
    super();

    this.state = {
      feed: [
        {
          username: "Rederic Young",
          userImage:
            "https://pbs.twimg.com/profile_images/1154040898457464832/och2XoJd_x96.jpg",
          postImage:
            "https://instagram.fatl1-2.fna.fbcdn.net/vp/521ea00418af44e968d46937a0977f08/5DF33CDB/t51.2885-15/e35/s480x480/60444549_364553171074304_3758261591975102865_n.jpg?_nc_ht=instagram.fatl1-2.fna.fbcdn.net",
          likes: 49,
          hasBeenLiked: false,
          caption: "🐶",
          filter: "juno"
        },
        {
          username: "Rederic Young",
          userImage:
            "https://pbs.twimg.com/profile_images/1154040898457464832/och2XoJd_x96.jpg",
          postImage:
            "https://instagram.fatl1-2.fna.fbcdn.net/vp/521ea00418af44e968d46937a0977f08/5DF33CDB/t51.2885-15/e35/s480x480/60444549_364553171074304_3758261591975102865_n.jpg?_nc_ht=instagram.fatl1-2.fna.fbcdn.net",
          likes: 49,
          hasBeenLiked: false,
          caption: "🐶",
          filter: "juno"
        }
      ]
    } 
  }

  render() {
    const Peachstagram = this.state.feed.map((value, index) => {
      return <Feed key={index} post={value}></Feed>;
    });

    return (
      <div className="phone-content">
        <div className="feed">
          {Peachstagram}
        </div>
      </div>
    )
  }
}
