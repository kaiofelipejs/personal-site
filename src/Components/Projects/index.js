import React from "react";
import { Button } from "@react95/core";
import { Link, ListItem, Divider } from "./styled";

import projects from "./content";

const Projects = () => {
	return (
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
};

export default Projects;
