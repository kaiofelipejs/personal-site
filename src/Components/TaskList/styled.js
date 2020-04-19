import styled from "@xstyled/styled-components";
import { List } from "@react95/core";

export const ListItem = styled(List.Item)`
	${({ smallIcon }) =>
		smallIcon
			? `
  i {
    padding: 4px;
    background-origin: content-box;
    flex-shrink: 0;
  }
  `
			: ""}
`;

export const Link = styled.a.attrs({
	target: "_blank",
	rel: "noopener noreferrer",
})`
	flex-grow: 1;
	height: 30;
	padding-top: 9;
	text-decoration: none;
	color: inherit;
`;
