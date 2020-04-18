import React from "react";
import styled from "@xstyled/styled-components";
import { Frame, Modal } from "@react95/core";

import File from "../File";

const Wrapper = styled.div`
	display: flex;
	grid-template-columns: repeat(4, 1fr);
	flex-wrap: wrap;
`;

const Files = ({ files, setSelectedFile, openModal, isMobile }) => {
	const boxProps = {
		defaultPosition: isMobile
			? { x: 0, y: 50 }
			: { x: window.innerWidth / 2 - 250, y: 100 },
		width: isMobile ? window.innerWidth - 40 : 500,
		style: isMobile ? { marginLeft: 20, height: "auto" } : "",
	};

	return (
		<Modal
			title={`${files.length} files`}
			icon="windows_explorer"
			{...boxProps}
			menu={[]}
		>
			<Frame
				bg="white"
				boxShadow="in"
				height="100%"
				p={10}
				style={{
					overflowY: "auto",
					maxHeight: "60vh",
				}}
			>
				<Wrapper>
					{files.map((file) => (
						<File
							key={file.name}
							onClick={() => {
								setSelectedFile(file);
								openModal();
							}}
							filename={file.name}
							icon={file.icon}
						/>
					))}
				</Wrapper>
			</Frame>
		</Modal>
	);
};

export default Files;
