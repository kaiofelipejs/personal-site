import React from "react";
import career from "./content";
import { Divider } from "./styled";

const Career = () => {
	return (
		<>
			{career.map((c) => (
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
};

export default Career;
