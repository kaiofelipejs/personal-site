import React from "react";
import { Icon } from "@react95/core";

import { StyledFile, Name } from "./styled";

const File = ({ filename, icon, ...rest }) => (
	<StyledFile {...rest}>
		<Icon name={icon} style={{ marginBottom: 4 }} />
		<Name>{`${filename}.txt`}</Name>
	</StyledFile>
);

export default File;
