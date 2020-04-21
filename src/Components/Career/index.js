import React from "react";
import { resume, education } from "./content";
import { Divider } from "./styled";

const Career = () => {
	return (
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
		</>
	);
};

export default Career;
