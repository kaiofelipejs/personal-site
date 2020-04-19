import React from "react";
import gif from "./hourglass.gif";

import { Wrapper, Hourglass } from "./styled";

const Loading = () => (
	<Wrapper>
		<Hourglass src={gif} />
	</Wrapper>
);

export default Loading;
