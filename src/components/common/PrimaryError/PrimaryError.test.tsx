import "@testing-library/jest-dom"
import renderer from "react-test-renderer"
import PrimaryError from "."
import mockRouter from "next-router-mock"
import { MOCK_ERROR } from "@/utils/mockData"

jest.mock("next/navigation", () => require("next-router-mock"))

describe("Primary error component", () => {
  mockRouter.push({
    pathname: "/home",
  })

  it("-- should match the snapshot", () => {
    const tree = renderer.create(<PrimaryError error={MOCK_ERROR} />)

    expect(tree).toMatchSnapshot()
  })
})
