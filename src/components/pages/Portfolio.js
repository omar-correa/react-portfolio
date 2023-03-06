import React from "react";

export default function Blog() {
  return (
    <div>
      <h3 id="work1">Work</h3>
      <section class="work2 container">
        <section class="imgsec">
          <a
            href="https://climbing.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="Assets/climbing.JPG"
              alt="Rock climbing website"
              class="rcsite"
            />
            <div class="bot-mid1">Climbing Site</div>
          </a>
        </section>
        <section class="imgsec">
          <a
            href="https://en.wikipedia.org/wiki/Real_estate"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="Assets/re-site.jpg"
              alt="Real estate website"
              class="resite"
            />
            <div class="bot-mid1">Real Estate Site</div>
          </a>
        </section>
        <section class="imgsec">
          <a
            href="https://www.soccer.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="Assets/messi.jpg"
              alt="soccer video game"
              class="soccergame"
            />
            <div class="bot-mid1">Soccer Video Game</div>
          </a>
        </section>
        <section class="imgsec">
          <a
            href="https://blog.hubspot.com/marketing/what-is-marketing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./Assets/marketing-site.jpg"
              alt="marketing app"
              class="marksite"
            />
            <div class="bot-mid1">Marketing Site</div>
          </a>
        </section>
      </section>
    </div>
  );
}
