import React from "react";
import Divider from "../Divider";
import content from "./content";

const Education = () => (
	<>
		<h2>Education</h2>
		{content.map((c) => (
			<div key={c.schoolName}>
				<p>
					<strong>
						{c.degree} in {c.fieldStudy}
					</strong>{" "}
					| {c.schoolName}
				</p>
				<span>
					{c.dates.startYear} - {c.dates.endYear}
				</span>

				<p>{c.description}</p>

				<Divider />
			</div>
		))}
	</>
);

export default Education;
