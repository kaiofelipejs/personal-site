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

const SubtitleWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Subtitle = styled.h3`
	width: 100%;
	text-align: center;
	animation: blinkCursor 900ms steps(40) infinite normal,
		typing 4s steps(40) 1s normal both;

	border-right: 2px solid rgba(0, 0, 0, 0.75);
	text-align: center;
	margin: 0 auto;
	white-space: nowrap;
	overflow: hidden;

	@keyframes typing {
		from {
			width: 0;
		}
		to {
			width: 24em;
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
			<Title>
				Hello!{" "}
				<span role="img" aria-label="waving hand">
					👋🏽
				</span>
			</Title>
			<SubtitleWrapper>
				<Subtitle>
					I'm Kaio Felipe Silva, a simple guy that write some codes.
				</Subtitle>
			</SubtitleWrapper>

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
