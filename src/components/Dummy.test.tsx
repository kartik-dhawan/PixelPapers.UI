import "@testing-library/jest-dom"
import renderer from "react-test-renderer"
import Dummy from "./Dummy"
import ReduxProvider from "@/redux/ReduxProvider"

describe("Experience section", () => {
  it("-- should match the snapshot", () => {
    const tree = renderer.create(
      <ReduxProvider>
        <Dummy />
      </ReduxProvider>,
    )
    expect(tree).toMatchSnapshot()
  })
})
