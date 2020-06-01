import React from "react";
import { links, email } from "./content";
import Icons from "./Icons";
import styled from "@xstyled/styled-components";
import Link from "../Link";

const SocialLinksWrapper = styled.nav`
	display: flex;
	flex: 1;
	justify-content: center;
`;

const SocialLinksList = styled.ul`
	margin: 0;
	padding: 0;
	box-sizing: bordex-box;
	display: flex;
	list-style: none;
`;

const SocialLinksItem = styled.li``;

const SocialLinksLink = styled.a`
	display: inline-block;
	text-align: center;
	font-size: 20px;
	padding: 10px;
	color: inherit;
	text-decoration: inherit;
`;

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
			Or sending me a message in: <Link href={`mailto:${email}`}>{email}</Link>
		</p>
	</>
);

export default Contact;
