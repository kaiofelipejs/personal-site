import styled from "@xstyled/styled-components";

const Link = styled.a.attrs({
	target: "_blank",
	rel: "noopener noreferrer",
})`
	cursor: pointer;
`;

export default Link;
