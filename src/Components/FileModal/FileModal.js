import React from "react";
import { Modal, Frame } from "@react95/core";
import Career from "../Career";
import About from "../About";
import Projects from "../Projects";
import Contact from "../Contact";
import BlogPosts from "../BlogPosts";

const FileModal = ({ selectedFile, closeModal, isMobile }) => {
	const boxProps = {
		width: isMobile ? window.innerWidth : 500,
		height: isMobile ? window.innerHeight - 30 : "auto",
	};

	const renderContent = (selectedFile) => {
		switch (selectedFile.name) {
			case "About":
				return <About />;
			case "Projects":
				return <Projects />;
			case "Career":
				return <Career />;
			case "Blog posts":
				return <BlogPosts />;
			default:
				return <Contact />;
		}
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
			<Frame
				bg="white"
				boxShadow="in"
				height="100%"
				p={10}
				style={{
					overflowY: "auto",
					maxHeight: "77vh",
				}}
			>
				{renderContent(selectedFile)}
			</Frame>
		</Modal>
	);
};

export default FileModal;
