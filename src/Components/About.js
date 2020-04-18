import React from "react";

const About = () => {
	const content = {
		title: "About me",
		description:
			"Passionate for technology, nerd, curious and always interested in learning new something. Most of my studies are focused on technology and in my free time I like development something (usually involving frontend), attend events, knowing different something and, somehow, contribute to the open-source world. Also, I lovely music and a good coffee. ",
	};

	return (
		<>
			<h4>{content.title}</h4>
			<p>{content.description}</p>
		</>
	);
};

export default About;
