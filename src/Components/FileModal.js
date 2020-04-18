import React from "react";
import { Modal } from "@react95/core";

import Career from "./Career";

const FileModal = ({ selectedFile, closeModal, isMobile }) => {
	const boxProps = {
		width: isMobile ? window.innerWidth : 500,
		height: isMobile ? window.innerHeight - 30 : "auto",
	};

	return (
		<Modal
			{...boxProps}
			style={{ top: 0 }}
			icon={selectedFile.icon}
			title={selectedFile.name}
			closeModal={closeModal}
			buttons={[{ value: "Close", onClick: closeModal }]}
		>
			{selectedFile.name === "Career" ? <Career /> : ""}
		</Modal>
	);
};

export default FileModal;
