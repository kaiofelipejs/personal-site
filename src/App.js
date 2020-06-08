import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "@xstyled/styled-components";
import { ThemeProvider, GlobalStyle, TaskBar } from "@react95/core";
import Files from "./Components/Files";
import Loading from "./Components/Loading";
import TaskList from "./Components/TaskList";
import FileModal from "./Components/FileModal";
import FilesNamesIcons from "./Components/Files/FilesNamesIcons";

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
	animation: blinkCursor 900ms steps(40) infinite normal,
		typing 4s steps(40) 1s normal both;

	border-right: 2px solid rgba(0, 0, 0, 0.75);
	margin: 0 auto;
	white-space: nowrap;
	overflow: hidden;

	@keyframes typing {
		from {
			width: 0;
		}
		to {
			width: 19em;
		}
	}

	@keyframes blinkCursor {
		from {
			border-right-color: rgba(0, 0, 0, 0.75);
		}
		to {
			border-right-color: transparent;
		}
	}
`;

const Style = createGlobalStyle`
  body {
    font-size: 13px;
  }

  p {
	  line-height: 1.58; 
  }
`;

const App = () => {
	const [files, setFiles] = useState({});
	const [selectedFile, setSelectedFile] = useState({});
	const [showModal, toggleModal] = useState(false);
	const [loading, toggleLoading] = useState(false);

	const openModal = () => {
		toggleModal(true);
	};

	const closeModal = () => {
		toggleModal(false);
	};

	useEffect(() => {
		toggleLoading(true);
		setFiles(FilesNamesIcons);
		setTimeout(() => toggleLoading(false));
	}, []);

	return (
		<ThemeProvider>
			<GlobalStyle />
			<Style />
			<Title>
				Hello!{" "}
				<span role="img" aria-label="waving hand">
					👋🏽
				</span>
			</Title>

			<Subtitle>I'm Kaio, a simple guy that writes some codes.</Subtitle>

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
};

export default App;
