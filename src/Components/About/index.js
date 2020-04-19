import React from "react";
import about from "./content";

const About = () => {
	return (
		<>
			<h4>{about.title}</h4>
			<p>{about.description}</p>
		</>
	);
};

export default About;
