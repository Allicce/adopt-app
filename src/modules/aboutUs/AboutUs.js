import React from "react";
import { AboutUsWrapper } from "./AboutUsWrapper";

import RectangleButton from "../../common/components/buttons/rectangleButton/RectangleButton";

const AboutUs = () => (
  <AboutUsWrapper>
    <div className="container">
      <div className="image-container">
        <div className="team team1" />
        <div className="team team4" />
        <div className="team team3" />
      </div>
      <div className="button-container">
        <RectangleButton>More way to help</RectangleButton>
      </div>
    </div>

    <div className="content-container">
      <h2>About us</h2>
      <p>
        Netus et malesuada fames ac turpis egestas maecenas pharetra. Fusce id
        velit ut tortor pretium viverra suspendisse potenti. Ut tortor pretium
        viverra suspendisse potenti nullam ac tortor vitae. Mattis pellentesque
        id nibh tortor id aliquet lectus proin nibh. Amet nisl purus in mollis.
        Nisi vitae suscipit tellus mauris. Netus et malesuada fames ac turpis
        egestas maecenas pharetra. Fusce id velit ut tortor pretium viverra
        suspendisse potenti. Ut tortor pretium viverra suspendisse potenti
        nullam ac tortor vitae. Mattis pellentesque id nibh tortor id aliquet
        lectus proin nibh. Amet nisl purus in mollis. Nisi vitae suscipit tellus
        mauris. Netus et malesuada fames ac turpis egestas maecenas pharetra.
        Fusce id velit ut tortor pretium viverra suspendisse potenti. Ut tortor
        pretium viverra suspendisse potenti nullam ac tortor vitae. Mattis
        pellentesque id nibh tortor id aliquet lectus proin nibh. Amet nisl
        purus in mollis. Nisi vitae suscipit tellus mauris. Netus et malesuada
        fames ac turpis egestas maecenas pharetra. Fusce id velit ut tortor
        pretium viverra suspendisse potenti. Ut tortor pretium viverra
        suspendisse potenti nullam ac tortor vitae. Mattis pellentesque id nibh
        tortor id aliquet lectus proin nibh. Amet nisl purus in mollis. Nisi
        vitae suscipit tellus mauris.
      </p>
    </div>

    <div className="container">
      <div className="image-container">
        <div className="team team2" />
        <div className="team team4" />
        <div className="team team3" />
      </div>
      <div className="button-container">
        <RectangleButton>More about us</RectangleButton>
      </div>
    </div>
  </AboutUsWrapper>
);

export default AboutUs;
