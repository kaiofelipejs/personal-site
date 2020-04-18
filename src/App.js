import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "@xstyled/styled-components";
import { ThemeProvider, GlobalStyle, TaskBar } from "@react95/core";

import Files from "./Components/Files/index";
import Loading from "./Components/Loading";
import TaskList from "./Components/TaskList";
import FileModal from "./Components/FileModal.js";

import Content from "./Components/Content";

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
	navigator.userAgent
);

const Hero = styled.h1`
	font-size: 40px;
	width: 100%;
	text-align: center;
`;

const Style = createGlobalStyle`
  body {
    font-size: 12px;
  }
`;

function App() {
	const [files, setFiles] = useState({});
	const [, setFileContent] = useState();
	const [selectedFile, setSelectedFile] = useState({});
	const [showModal, toggleModal] = useState(false);
	const [loading, toggleLoading] = useState(false);

	function openModal() {
		toggleModal(true);
	}

	function closeModal() {
		toggleModal(false);
	}

	function fetchData() {
		toggleLoading(true);

		setFiles(Content);
		setFileContent(Content.content);

		setTimeout(() => toggleLoading(false));
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<ThemeProvider>
			<GlobalStyle />
			<Style />
			<Hero>Kaio Felipe Silva</Hero>

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
