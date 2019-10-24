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
          username: "peachtreedevs",
          userImage:
            "https://instagram.fatl1-2.fna.fbcdn.net/vp/7955d213c710a678db14ee1dde03bfa4/5E1174EF/t51.2885-19/s320x320/55837746_615397762256415_5224294280645836800_n.jpg?_nc_ht=instagram.fatl1-2.fna.fbcdn.net",
          postImage:
            "https://instagram.fatl1-2.fna.fbcdn.net/vp/14eb4cd23c01bf1c05846315d20a78ce/5E098E3C/t51.2885-15/e35/c0.180.1440.1440a/s480x480/67982653_1210120935849903_1906877691783617405_n.jpg?_nc_ht=instagram.fatl1-2.fna.fbcdn.net",
          likes: 20,
          hasBeenLiked: false,
          caption: "SKRR SKKKRRRRRT 🚗",
          filter: "clarendon"
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
