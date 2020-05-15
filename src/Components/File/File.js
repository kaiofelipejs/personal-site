import React from "react";
import { Icon } from "@react95/core";
import styled from "@xstyled/styled-components";

const StyledFile = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	text-align: center;

	width: 25%;
	padding: 10px 0;
`;

const Name = styled.span`
	word-break: break-word;
`;

const File = ({ filename, icon, ...rest }) => (
	<StyledFile {...rest}>
		<Icon name={icon} style={{ marginBottom: 4 }} />
		<Name>{`${filename}`}</Name>
	</StyledFile>
);

export default File;
