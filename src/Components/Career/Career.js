import React from "react";
import styled from "@xstyled/styled-components";
import Resume from "../Resume";
import Education from "../Education";
import Divider from "../Divider";
import { courses } from "./content";

const Link = styled.a.attrs({
	target: "_blank",
	rel: "noopener noreferrer",
})`
	cursor: pointer;
`;

const Career = () => (
	<>
		<Resume />
		<Education />

		<h2>Courses</h2>
		{courses.map((c) => (
			<div key={c.name}>
				<p>
					<strong>{c.name}</strong> | {c.organization}
				</p>

				<span>
					{c.issueDate.month}/{c.issueDate.year}
				</span>
				<p>
					<Link href={c.certificateUrl}>Certificate</Link>
				</p>
				<Divider />
			</div>
		))}
	</>
);

export default Career;
