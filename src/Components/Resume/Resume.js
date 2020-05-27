import React from "react";
import Divider from "../Divider";
import Content from "./content";

const Resume = () => (
	<>
		<h2>Resume</h2>
		{Content.map((c) => (
			<div key={c.companyName}>
				<p>
					<strong>{c.job}</strong> | {c.companyName}
				</p>
				<span>
					{c.dates.startMonth}/{c.dates.startYear} -
					{c.dates.endMonth === ""
						? " Actual"
						: ` ${c.dates.endMonth}/${c.dates.endYear}`}
				</span>

				<p>{c.description}</p>

				<Divider />
			</div>
		))}
	</>
);

export default Resume;
