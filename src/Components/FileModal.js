import React from "react";
import { Modal, TextArea } from "@react95/core";

async function share({ title, text }) {
	await navigator.share({
		title,
		text: `*${title}*
    
${text}`,
		url: "https://ggdaltoso.dev/95Recipes/",
	});
}

const FileModal = ({ selectedFile, closeModal, isMobile }) => {
	const text = `${selectedFile.name}`;

	console.log(selectedFile);

	const boxProps = {
		width: isMobile ? window.innerWidth : undefined,
		height: isMobile ? window.innerHeight - 30 : "auto",
	};

	return (
		<Modal
			{...boxProps}
			style={{ top: 0 }}
			icon={selectedFile.icon}
			title={selectedFile.name}
			closeModal={closeModal}
			buttons={[
				...(navigator.share !== undefined
					? [
							{
								value: "Share",
								onClick: () => share({ title: selectedFile.name, text }),
							},
					  ]
					: []),
				{ value: "Close", onClick: closeModal },
			]}
		>
			<TextArea legend="Ingredients" value={text} rows={30} readOnly />
		</Modal>
	);
};

export default FileModal;
