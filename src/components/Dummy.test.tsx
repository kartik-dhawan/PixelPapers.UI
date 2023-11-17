import "@testing-library/jest-dom"
import renderer from "react-test-renderer"
import Dummy from "./Dummy"

describe("Experience section", () => {
  it("-- should match the snapshot", () => {
    const tree = renderer.create(<Dummy />)
    expect(tree).toMatchSnapshot()
  })
})
