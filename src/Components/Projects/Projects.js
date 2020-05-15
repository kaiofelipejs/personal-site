import React from "react";
import styled from "@xstyled/styled-components";
import { Button } from "@react95/core";
import projects from "./content";

const Link = styled.a.attrs({
	target: "_blank",
	rel: "noopener noreferrer",
})`
	margin-right: 15px;
	cursor: pointer;
`;

const ListItem = styled.li`
	margin-bottom: 5px;
`;

const Divider = styled.hr`
	margin-top: 15px;
	border: 0.5px solid #c3c7cb;
`;

const Projects = () => (
	<>
		{projects.map((project, i) => (
			<div key={i}>
				<h4>{project.name}</h4>
				<p>{project.description}</p>
				<p>Tools:</p>
				<ul>
					{project.tools.map((tool, i) => {
						return <ListItem key={i}>{tool}</ListItem>;
					})}
				</ul>

				<Link href={project.urls.appUrl}>
					<Button style={{ cursor: "pointer" }} value={"Open"} />
				</Link>

				<Link href={project.urls.sourceCode}>Source Code</Link>

				<Divider />
			</div>
		))}
	</>
);

export default Projects;
