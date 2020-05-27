import React from "react";
import content from "./content";
import Divider from "../Divider";
import Link from "../Link";

const Courses = () => (
	<>
		<h2>Courses</h2>
		{content.map((c) => (
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

export default Courses;
