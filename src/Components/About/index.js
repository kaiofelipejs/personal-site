import React from "react";
import about from "./content";

const About = () => {
	return (
		<>
			<h3>{about.title}</h3>
			<p>{about.description}</p>
		</>
	);
};

export default About;
