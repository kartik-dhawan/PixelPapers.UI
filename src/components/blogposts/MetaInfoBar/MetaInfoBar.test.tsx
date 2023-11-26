import ReduxProvider from "@/redux/ReduxProvider"
import "@testing-library/jest-dom"
import renderer from "react-test-renderer"
import MetaInfoBar from "."
import { BLOG_DATA_MOCK } from "@/utils/mockData"

describe("Meta Information Bar Component", () => {
  it("-- should match the snapshot", () => {
    const tree = renderer.create(
      <ReduxProvider>
        <MetaInfoBar currentBlog={BLOG_DATA_MOCK.fields} />
      </ReduxProvider>,
    )
    expect(tree).toMatchSnapshot()
  })
})
