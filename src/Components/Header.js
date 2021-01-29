import React, { useState } from "react";
import me from "../Me.jpg"
import JobForm from "./JobForm";
import "../style/Header.css"

export default function Header() {

  const [click, setClick] = useState(false);

  function handleClick() {
    setClick(!click);
  }
  return (
    <header>
      <div>
        <h1 className="title">LORENZO MARTINOLI</h1>
        <img alt="Me" src={me} />
      </div>
      <div className="infoBox">
        <p>17/09/1995</p>
        <p>Milan, Italy</p>
        <p>Driving license: B</p>
        <h3>Who am I?</h3>
        <p className="introduction">
          Hi! My name is Lorenzo and I’m an aspiring Web Developer.
          I like to think that I’m a curious person, always ready to learn
          something new and to face new challenges. I’m sure that
          team effort is what help achieve great results, so I’m always
          open for collaborations and projects based on team-work.
          </p>
      </div>
      <button value={click} onClick={handleClick}>Send me an email!</button>
      {click ? <JobForm state={{setClick}} /> : null}
    </header>
  );
}