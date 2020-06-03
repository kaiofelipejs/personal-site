import React from "react";
import styled from "@xstyled/styled-components";

const LabelText = styled.span`
	font-weight: bold;
`;

const About = () => (
	<div data-testid="about">
		<h2>Nice to meet you!</h2>
		<LabelText>TL;DR:</LabelText>
		<p>
			Software Engineer, passionate for technology, theology reformed, books,
			music, soccer, and a good coffee.
		</p>

		<LabelText>Long version:</LabelText>
		<p>
			My name is Kaio Felipe Silva, I am 21 years old and from Florianópolis/SC
			- Brazil. Currently, I working in RD Station, the biggest platform for
			marketing automation, and sales for SMBs across the world. I like solving
			problems, build awesome products, and contribute to open-source projects.
			Most of my skills are on the frontend (with React mainly), but I venture
			in backend sometimes.
		</p>

		<p>
			For my hobby, I like to play music, play video games, read good books, see
			and play soccer too.
		</p>

		<p>Feel free to reach out! :)</p>
	</div>
);

export default About;
