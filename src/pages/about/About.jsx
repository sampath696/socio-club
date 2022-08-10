/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import "./About.css";
// import { InstagramEmbed } from "react-social-media-embed";
import socioclubsuperapp from "../../assets/socioclubsuperapp.jpeg";

function About() {
  return (
    <div>
      <h1>
        {" "}
        <u>
          {" "}
          <i>Our Super App</i>{" "}
        </u>
      </h1>
      <div className="iframe-container">
        <iframe
          className="ytl"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/2Jh9ApWWrjg"
          title="SocioClub promo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <p className="para">
        {" "}
        <h1>Socio Club is the Indian Super App</h1> which focus on only social
        and entertainment part. It is a one stop destination for all your social
        needs.
        <br />
        <p>
          This Super app has a club for everyone's taste! There are many
          opportunities to win, amazing prizes, and more.
        </p>{" "}
        When you have everything at one place, you can save your time, money and
        memory. You don't need to know multiple password and no need of multiple
        apps. Now it's time for you to experience the power of the super app.
      </p>{" "}
      <hr />
      <h1>Socio Club, Why it's unique?</h1>
      <div className="iframe-container">
        <img
          src={socioclubsuperapp}
          className="imagesuper"
          alt="socioclubsuperapp"
          width="560"
          height="315"
        />
      </div>
      <p className="para">
        Its main theme sets the app apart from the other entertainment apps in
        India. It's all user-oriented. <br /> <br /> 1- <h4>The socio club</h4>
        other than the best time pass app also prioritizes users by making money
        through various ways like different contests in which participants &
        winners get rewards. <br /> <br /> 2-Users can also make money through
        tokenization by spending more time on the app. <br /> <br /> 3-The app
        overall put users on all the positives like value, knowledge, comfort,
        saved memory, satisfaction, money, laughter, & all sorts of
        entertainment proving to be the most useful app. <br /> <br /> 4- You
        can use any most popular and best free entertainment apps for fun but
        why go for different apps when socio club can give you all sorts of
        quality entertainment and value at one stop. <br /> <br /> 5-The icing
        on the cake is it's not age-restricted. The app can be of use to a child
        to an aged person. Every niche is covered and accessible in one place.
      </p>
      {/* <blockquote class="twitter-tweet">
        <p lang="en" dir="ltr">
          Games Club - Play Unlimited Games for Free on Socio Club .
        </p>
        Coming Soon...
        <a href="https://twitter.com/hashtag/games?src=hash&amp;ref_src=twsrc%5Etfw">
          #games
        </a>
        <a href="https://twitter.com/hashtag/socioclub?src=hash&amp;ref_src=twsrc%5Etfw">
          #socioclub
        </a>
        <a href="https://twitter.com/hashtag/superapp?src=hash&amp;ref_src=twsrc%5Etfw">
          #superapp
        </a> */}
      {/* <img
          src="https://www.instagram.com/p/Ce_kyScJM1U/?igshid=YmMyMTA2M2Y%3D "
          alt="socio"
          width={40}
          height={50}
        /> */}
      {/* </blockquote> */}
    </div>
  );
}

export default About;
