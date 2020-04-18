import React from "react";
import styled from "@xstyled/styled-components";

import { Button } from "@react95/core";

const Link = styled.a.attrs({
	target: "_blank",
	rel: "noopener noreferrer",
})`
	margin-right: 10px;
`;

const Projects = () => {
	const content = [
		{
			projectName: "Website Psicóloga Vanessa Mattos",
			description: "An website with blog.",
			tools: ["Figma", "PHP", "Wordpress"],
			urls: {
				sourceCode: "https://github.com/kaiofelipejs/psico-vanessa-mattos",
				url: "http://www.vanessamattos.com.br/",
			},
		},
		{
			projectName: "Remote HeartCount",
			description: "An app for hiring team",
			tools: ["Figma", "NodeJS", "React", "Knex", "Postgres"],
			urls: {
				sourceCode: "https://github.com/kaiofelipejs/psico-vanessa-mattos",
				url: "http://www.vanessamattos.com.br/",
			},
		},
	];

	return (
		<>
			{content.map((c, i) => (
				<div key={i}>
					<h4>{c.projectName}</h4>
					<p>{c.description}</p>
					<p>Tools: </p>
					<ul>
						{c.tools.map((tool, i) => {
							return <li key={i}>{tool}</li>;
						})}
					</ul>

					<Link href={c.urls.sourceCode}>
						<Button value={"Source Code"} />
					</Link>

					<Link href={c.urls.url}>
						<Button value={"View"} />
					</Link>
				</div>
			))}
		</>
	);
};

export default Projects;
