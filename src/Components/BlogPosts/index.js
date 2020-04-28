import React, { useEffect, useState } from "react";

import { Wrapper } from "./styled";

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

	return (
		<Wrapper>
			<div>
				{posts.map((post) => (
					<p>{post.title}</p>
				))}
			</div>
		</Wrapper>
	);
};

export default Posts;
