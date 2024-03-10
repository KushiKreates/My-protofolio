// components/About.jsx
import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="spacingbig"></div> {/* Spacer */}
      
      <div className="content">
        <div className="text-groups">
          <h1 className="big-text">Hi!, Im Kushi_k 🥰</h1>
          <div className="spacing"></div> {/* Spacer */}
          <div className="spacing"></div> {/* Spacer */}
          <h1 className="sub-text">The Simple Developer</h1>
          <div className="spacing"></div> {/* Spacer */}

          <p class="bold-text">
            Im an Active Developer, I 💙 to code and I love to learn new things. 
            Plus I code Minecraft plugins Sometimes 🧊, I'm also a minecraft bedwars player at heart.
            Meet me @ <a href="https://pika-network.net/">Pika-network</a> or on Hypixel. Minecraft username Kushi_k 💖
            Don't forget to follow me on Twitter 🐦 and GitHub 🐙 for more updates!
            Also, catch me streaming live on Twitch 📺 and YouTube 🎥 every week!
          </p>
          <a href="https://www.youtube.com/channel/UC0NEUBogT98IReGm0TXuKUw" target="_blank" rel="noopener noreferrer">
            <button type="button" class="cool-button">Youtube 💻</button>
          </a>

        </div>
        
          

          <img src="https://logolook.net/wp-content/uploads/2021/06/Symbol-Youtube.png" alt="YouTube" className="youtube-image" />
        
        
        <img src="/R.png" alt="Custom" className="custom-image" />
        <img src="/skin.webp" alt="Full" className="full-image" />
        
      </div>
      <div className="spacing"></div> {/* Spacer */}
      <div className="spacing"></div> {/* Spacer */}
      <div className="spacing"></div> {/* Spacer */}
      <div className="spacing"></div> {/* Spacer */}
    </section>
  );
}

export default About;
