import React from "react";
import { cleanup, render } from "@testing-library/react";
import HeroSection from "Components/Hero/hero.js";

afterEach(cleanup);

it("should render hero component", () => {
  const { container } = render(<HeroSection />);

  expect(container.firstChild).toMatchSnapshot();
});
