import React from "react";
import { List } from "@react95/core";

import { ListItem, Link } from "./styled";

const TaskList = () => (
	<List>
		<ListItem smallIcon icon="plugin">
			<Link href="https://github.com/React95/React95">React95 Library</Link>
		</ListItem>
		<List.Divider />
		<ListItem icon="computer_3">
			<Link href="https://github.com/kaiofelipejs/personal-site">
				Source Code
			</Link>
		</ListItem>
	</List>
);

export default TaskList;
