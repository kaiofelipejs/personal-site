import React from "react";
import styled from "@xstyled/styled-components";
import Resume from "../Resume";
import Divider from "../Divider";
import { education, courses } from "./content";

const Link = styled.a.attrs({
	target: "_blank",
	rel: "noopener noreferrer",
})`
	cursor: pointer;
`;

const Career = () => (
	<>
		<Resume />
		<h2>Education</h2>
		{education.map((e) => (
			<div key={e.schoolName}>
				<p>
					<strong>
						{e.degree} in {e.fieldStudy}
					</strong>{" "}
					| {e.schoolName}
				</p>
				<span>
					{e.dates.startYear} - {e.dates.endYear}
				</span>

				<p>{e.description}</p>

				<Divider />
			</div>
		))}

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
