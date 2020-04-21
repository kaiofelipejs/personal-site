import styled from "@xstyled/styled-components";

export const Divider = styled.hr`
	margin-top: 15px;
	border: 0.5px solid #c3c7cb;
`;

export const Link = styled.a.attrs({
	target: "_blank",
	rel: "noopener noreferrer",
})`
	cursor: pointer;
`;
