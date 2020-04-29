import React, { useEffect, useState } from "react";

const Posts = () => {
	const [posts, setPosts] = useState([]);

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
			const allPosts = await getPosts();
			const posts = allPosts.filter((item) => item.categories.length > 0);

			setPosts(posts);
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
			<h2>Posts</h2>
			{posts.map((post) => (
				<div key={post.title}>
					<a href={post.guid} target="_blank" rel="noopener noreferrer">
						<strong>{post.title}</strong>
					</a>
					<p>{formatDate(post.pubDate)}</p>
					<p className="description">{getTextFromTag(post.description, "p")}</p>
				</div>
			))}
		</>
	);
};

export default Posts;
