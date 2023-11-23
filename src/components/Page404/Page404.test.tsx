import ReduxProvider from "@/redux/ReduxProvider"
import "@testing-library/jest-dom"
import renderer from "react-test-renderer"
import Page404 from "."

describe("The 404 Page component", () => {
  it("-- should match the snapshot", () => {
    const tree = renderer.create(
      <ReduxProvider>
        <Page404 />
      </ReduxProvider>,
    )

    expect(tree).toMatchSnapshot()
  })
})
