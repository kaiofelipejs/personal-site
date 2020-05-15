import React from "react";
import styled from "@xstyled/styled-components";
import { resume, education, courses } from "./content";
import Divider from "../Divider";

const Link = styled.a.attrs({
	target: "_blank",
	rel: "noopener noreferrer",
})`
	cursor: pointer;
`;

const Career = () => (
	<>
		<h2>Resume</h2>
		{resume.map((r) => (
			<div key={r.companyName}>
				<p>
					<strong>{r.job}</strong> | {r.companyName}
				</p>
				<span>
					{r.dates.startMonth}/{r.dates.startYear} -
					{r.dates.endMonth === ""
						? " Actual"
						: ` ${r.dates.endMonth}/${r.dates.endYear}`}
				</span>

				<p>{r.description}</p>

				<Divider />
			</div>
		))}

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
