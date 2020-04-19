import styled from "@xstyled/styled-components";

export const Link = styled.a.attrs({
	target: "_blank",
	rel: "noopener noreferrer",
})`
	margin-right: 15px;
	cursor: pointer;
`;

export const ListItem = styled.li`
	margin-bottom: 5px;
`;
