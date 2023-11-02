import React from "react";
import profileImage from "../../assets/Profile/profileimage.jpg";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            Greetings! My name is Candace Gostinski. I am a graphic designer and web developer residing in Winston-Salem, North Carolina. For the past four years, I have been providing clients with the best possible designs for web and print, and am enthusiastic to share my web development skills with you here.
            Please feel free to browse my online portfolio for a glimpse of my work. If you're interested, you can navigate to the contact page in order to schedule an appointment where we might meet to discuss your project.</p>
        </div>
      </div>
    </section>
  );
}

export default About;