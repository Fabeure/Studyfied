import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import Home from "./Home"

test("Renders the Home page", () => {
    render(<Home />)
    expect(true).toBeTruthy()
});