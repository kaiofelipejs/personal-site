import React from "react";
import { render } from "@testing-library/react";
import About from "../About";

test("Should title is h3 tag", () => {
	const { getByTestId } = render(<About />);
	const title = getByTestId("about-title");

	expect(title.tagName).toBe("H3");
});
