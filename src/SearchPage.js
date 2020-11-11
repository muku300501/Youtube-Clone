import React from "react";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__filter">
        <TuneOutlinedIcon />
        <h2>FILTER</h2>
      </div>
      <hr />

      <ChannelRow
        image="https://instagram.fbom2-1.fna.fbcdn.net/v/t51.2885-19/s320x320/82660695_165746604714449_4953850631082213376_n.jpg?_nc_ht=instagram.fbom2-1.fna.fbcdn.net&_nc_ohc=Pbw5rpQMEOIAX9gkb1u&oh=9fc0df5bac1819b3f701f027d1d0eccf&oe=5FCC36BC"
        channel="Mukund Chamariya"
        verified
        subs="555M"
        noOfVideos={575}
        description="Tough Times are like Best friends. They hurt you but bring the best version out of you."
      />
      <hr />

      <VideoRow
        views="1.3M Views"
        subs="555M"
        description="lets just earn smarty guys💰"
        timestamp="2 months ago"
        channel="Mukund Chamariya"
        title="How to Sell on Amazon & Start Business | Selling Products Online"
        image="https://i.ytimg.com/vi/PdR57X11CIc/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCHvyjolwpWBawuE8U2l4kqTdrNow"
      />
      <VideoRow
        views="14M Views"
        subs="666M"
        description="The Harshad Mehta Story - Big Bull"
        timestamp="1 month ago"
        channel="Harshad Mehta - The Bull"
        title="Scam 1992 – The Harshad Mehta Story | Official Trailer | Streaming from 09-10-2020"
        image="https://i.ytimg.com/vi/ISORfez27og/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBnM1q8DUui9EJhwl9Ku0SSOEqMfg"
      />
      <VideoRow
        views="3.5M Views"
        subs="545M"
        description="The Song of love💓"
        timestamp="2 months ago"
        channel="Amazon Prime"
        title="Labb Par Aaye Video Song | Bandish Bandits | Javed Ali | Shankar Ehsaan Loy | Amazon Original"
        image="https://i.ytimg.com/vi/7kR6tqaq_zY/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDAWGfeolTyxPlX99qiM6vmcILqwg"
      />
      <VideoRow
        views="16M Views"
        subs="333M"
        description="The Ultimate suspense Thriller Web series"
        timestamp="8 month ago"
        channel="Stranger Things"
        title="Stranger Things 4 | From Russia with love… | Netflix"
        image="https://i.ytimg.com/vi/oB2GYwbIAlM/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDk6kRzCsjAuSmCuUDjGbHHNl1YZg"
      />
      <VideoRow
        views="1.3M Views"
        subs="565M"
        description="BB ki vines - World Famous Vine channel"
        timestamp="3 years ago"
        channel="BB ki Vines"
        title="BB Ki Vines- | Titu Mama |"
        image="https://i.ytimg.com/vi/h25S27rh4oY/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAplkHenkEd5RP344ZSLmz-lawtKg"
      />
    </div>
  );
}

export default SearchPage;
