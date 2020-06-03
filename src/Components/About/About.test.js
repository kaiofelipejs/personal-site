import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import About from "../About";

describe("<About />", () => {
	it("Should to be in the document", () => {
		const { getByTestId } = render(<About />);

		expect(getByTestId("about")).toBeInTheDocument();
	});
});
