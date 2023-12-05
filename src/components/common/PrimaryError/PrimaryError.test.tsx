import "@testing-library/jest-dom"
import renderer from "react-test-renderer"
import PrimaryError from "."
import { MOCK_ERROR } from "@/utils/mockData"

describe("Primary error component", () => {
  it("-- should match the snapshot", () => {
    const tree = renderer.create(<PrimaryError error={MOCK_ERROR} />)

    expect(tree).toMatchSnapshot()
  })
})
