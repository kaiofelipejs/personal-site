import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "@xstyled/styled-components";
import { ThemeProvider, GlobalStyle, TaskBar } from "@react95/core";

import Files from "./Components/Files/index";
import Loading from "./Components/Loading";
import TaskList from "./Components/TaskList";
import FileModal from "./Components/FileModal.js";

import FileNamesIcons from "./Components/FileNamesIcons";

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
	navigator.userAgent
);

const Title = styled.h1`
	font-size: 40px;
	width: 100%;
	text-align: center;
`;

const Subtitle = styled.h3`
	width: 100%;
	text-align: center;
`;

const Style = createGlobalStyle`
  body {
    font-size: 12px;
  }

  p {
	  line-height: 1.58; 
  }
`;

function App() {
	const [files, setFiles] = useState({});
	const [selectedFile, setSelectedFile] = useState({});
	const [showModal, toggleModal] = useState(false);
	const [loading, toggleLoading] = useState(false);

	function openModal() {
		toggleModal(true);
	}

	function closeModal() {
		toggleModal(false);
	}

	useEffect(() => {
		toggleLoading(true);

		setFiles(FileNamesIcons);

		setTimeout(() => toggleLoading(false));
	}, []);

	return (
		<ThemeProvider>
			<GlobalStyle />
			<Style />
			<Title>Kaio Felipe Silva</Title>
			<Subtitle>
				Hello!{" "}
				<span role="img" aria-label="waving hand">
					👋
				</span>
				<br /> Welcome and enjoy the Windows 95 experience!
			</Subtitle>

			{Object.keys(files).length > 0 && (
				<Files
					files={files}
					openModal={openModal}
					setSelectedFile={setSelectedFile}
					isMobile={isMobile}
				/>
			)}

			{showModal && (
				<FileModal
					selectedFile={selectedFile}
					closeModal={closeModal}
					isMobile={isMobile}
				/>
			)}

			<TaskBar list={<TaskList />} />

			{loading && <Loading />}
		</ThemeProvider>
	);
}

export default App;
