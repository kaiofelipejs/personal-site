import React from "react";
import about from "./content";

const About = () => (
	<>
		<h3 data-testid="about-title">{about.title}</h3>
		<p>{about.description}</p>
	</>
);

export default About;
