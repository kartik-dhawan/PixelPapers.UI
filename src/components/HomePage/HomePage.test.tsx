import ReduxProvider from "@/redux/ReduxProvider"
import "@testing-library/jest-dom"
import renderer from "react-test-renderer"
import HomePage from "."

describe("Home page & all its components", () => {
  it("-- should match the snapshot", () => {
    const tree = renderer.create(
      <ReduxProvider>
        <HomePage />
      </ReduxProvider>,
    )

    expect(tree).toMatchSnapshot()
  })
})
