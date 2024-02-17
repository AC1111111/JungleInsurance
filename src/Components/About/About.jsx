import React from "react";
import Yahrim from "../../assets/bf6MCyqq_400x400.jpg";
import Danger from "../../assets/a604rad7j4651.webp"
import Golira from "../../assets/Golira.png";
import Vetris from "../../assets/3c355c2aea6fbae635014568f22bdda1.png";
import OnlyFax from "../../assets/TomboyNoText.jpg";

function About() {
  return (
    <div>
      <p style={{ textAlign: 'left' }}>
        We aim to create a safe environment for everyone in the Goliras jungle by providing services that will allow you to be at minimum risk and when at risk and when accused in court we will come to defend you till the bitter end.
      </p><br/>
      <p style={{ textAlign: 'left' }}><a href="https://discord.gg/golira">Be a part of the Jungle</a> or else</p>
      <br />
      <h1><b>Founders</b></h1>
      <p>This company was founded on the dream of security in the jungle by our beloved CEOs</p>
      <br />
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2>Yahrim, The Ballin one</h2>
          <a href="https://twitter.com/YharimTheBaller">
            <img src={Yahrim} alt="Yahrim, the CEO" />
          </a>
          <h5>The one who balls, nuff said</h5>
        </div>
        <div>
          <h2>DangerDragon610</h2>
          <a href="https://www.youtube.com/channel/UCdgV7bOIVQJjBPnjQfpbvqA">
            <img src={Danger} alt="British horse CEO" height={400} width={400} />
          </a>
          <h5>A British horse who learnt and perfected the ways of capitalism</h5>
        </div>
      </div>
      <h1><b>Special Thanks</b></h1>
      <p>The tyrants of the Jungle</p>
      <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h2>Golira</h2>
          <a href="https://www.youtube.com/@golira5549">
            <img src={Golira} alt="Ultimate Gooner" height={400} width={400} />
          </a>
          <h5>Warcriminal turned YouTuber</h5>
        </div>
        <div>
          <h2>Vetris</h2>
          <a href="https://twitter.com/func_twintails">
            <img src={Vetris} alt="Mr. Scratch" height={400} width={400} />
          </a>
          <h5>Literally Alan Wake</h5>
        </div>
      </div>
      <h1><b>Web Intern</b></h1>
      <p>I'm getting paid in exposure shut the fuck up</p>
      <div style={{alignItems: 'center' }}>
        <div>
          <h2>OnlyFax</h2>
          <a href="https://www.youtube.com/@FreemanTraceur">
            <img src={OnlyFax} alt="Intern boy" height={400} style={{aspectRatio: 4/3}}/>
          </a>
          <h5>God's weakest zorker</h5>
        </div>
      </div>
    </div>
  );
}

export default About