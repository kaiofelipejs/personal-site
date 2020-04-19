import React from "react";

import { links, email } from "./content";
import Icons from "./Icons";

import {
	SocialLinksList,
	SocialLinksWrapper,
	SocialLinksItem,
	SocialLinksLink,
} from "./styled";

const Contact = () => (
	<>
		<h3>Let's talk!</h3>
		<p>You can find me in these sites:</p>
		<SocialLinksWrapper>
			<SocialLinksList>
				{links.map((link, i) => {
					const Icon = Icons[link.label];

					return (
						<SocialLinksItem key={i}>
							<SocialLinksLink
								href={link.url}
								title={link.label}
								target="_blank"
								rel="noopener noreferrer"
							>
								<Icon />
							</SocialLinksLink>
						</SocialLinksItem>
					);
				})}
			</SocialLinksList>
		</SocialLinksWrapper>
		<p>
			Or sending me a message in:
			<a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
				{` ${email}`}
			</a>
		</p>
	</>
);

export default Contact;
