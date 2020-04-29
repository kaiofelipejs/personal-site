import React, { useEffect, useState } from "react";

import { PostTitle, PostDescription, PostDate, Divider } from "./styled";

const Posts = () => {
	const [posts, setPosts] = useState([]);
	const [loading, toggleLoading] = useState(false);

	const getPosts = async () => {
		return fetch(
			"https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@kaiofelipejs"
		)
			.then((res) => res.json())
			.then((data) => {
				const res = data.items;
				return res;
			});
	};

	useEffect(() => {
		async function fetchData() {
			toggleLoading(true);
			const allPosts = await getPosts();
			const posts = allPosts.filter((item) => item.categories.length > 0);

			setPosts(posts);
			setTimeout(() => toggleLoading(false));
		}
		fetchData();
	}, []);

	function removeTimeStamp(date) {
		return date.split(" ")[0];
	}

	function formatDate(date) {
		const formatedDate = removeTimeStamp(date);

		const month = formatedDate.slice(5, 7);
		const year = formatedDate.slice(0, 4);
		const day = formatedDate.slice(8);

		return `${day}/${month}/${year}`;
	}

	function getTextFromTag(description, tag) {
		const startTag = description.search(`<${tag}>`) + (tag.length + 2);
		const endTag = description.search(`</${tag}>`);
		const text = description.slice(startTag, endTag);
		return text;
	}

	return (
		<>
			<h2>Posts on Medium</h2>
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

export default Posts;
