import styled from "@xstyled/styled-components";

export const PostTitle = styled.a.attrs({
	target: "_blank",
	rel: "noopener noreferrer",
})`
	display: block;
	padding-top: 10px;
	font-size: 16px;
	cursor: pointer;
	font-weight: bold;
`;

export const Divider = styled.hr`
	border: 0.5px solid #c3c7cb;
`;

export const PostDescription = styled.p``;

export const PostDate = styled.p``;
