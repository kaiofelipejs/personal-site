import React, { useEffect, useState } from "react";
import styled from "@xstyled/styled-components";
import Divider from "../Divider";

const PostTitle = styled.a.attrs({
	target: "_blank",
	rel: "noopener noreferrer",
})`
	display: block;
	padding-top: 10px;
	font-size: 16px;
	cursor: pointer;
	font-weight: bold;
`;

const PostDescription = styled.p``;
const PostDate = styled.p``;

const BlogPosts = () => {
	const [posts, setPosts] = useState([]);
	const [loading, toggleLoading] = useState(false);

	const getAllPosts = async () => {
		return fetch(
			"https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kaiofelipejs"
		)
			.then((res) => res.json())
			.then(({ items }) => {
				return items;
			});
	};

	useEffect(() => {
		async function fetchData() {
			toggleLoading(true);
			const allPosts = await getAllPosts();
			const posts = allPosts.filter((post) => post.categories.length > 0);

			setPosts(posts);
			setTimeout(() => toggleLoading(false));
		}
		fetchData();
	}, []);

	const removeTimeStamp = (date) => {
		return date.split(" ")[0];
	};

	const formatDate = (date) => {
		const formatedDate = removeTimeStamp(date);

		const month = formatedDate.slice(5, 7);
		const year = formatedDate.slice(0, 4);
		const day = formatedDate.slice(8);

		return `${day}/${month}/${year}`;
	};

	const getTextFromTag = (description, tag) => {
		const startTag = description.search(`<${tag}>`) + (tag.length + 2);
		const endTag = description.search(`</${tag}>`);
		const text = description.slice(startTag, endTag);
		return text;
	};

	return (
		<>
			{posts.map((post) => (
				<div key={post.title}>
					<PostTitle href={post.guid}>{post.title}</PostTitle>
					<PostDate>{formatDate(post.pubDate)}</PostDate>
					<PostDescription>
						{getTextFromTag(post.description, "p")}
					</PostDescription>
					<Divider />
				</div>
			))}

			{loading && "Loading..."}
		</>
	);
};

export default BlogPosts;
