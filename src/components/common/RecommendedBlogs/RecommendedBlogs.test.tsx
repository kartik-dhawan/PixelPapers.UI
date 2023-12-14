import "@testing-library/jest-dom"
import renderer from "react-test-renderer"
import { BLOG_DATA_MOCK } from "@/utils/mockData"
import RecommendedBlogs from "."
import ReduxProvider from "@/redux/ReduxProvider"

describe("Custom RecommendedBlogs component", () => {
  it("-- should match the snapshot", () => {
    const tree = renderer.create(
      <ReduxProvider>
        <RecommendedBlogs blogs={[BLOG_DATA_MOCK]} path="/" fullWidth />,
      </ReduxProvider>,
    )

    expect(tree).toMatchSnapshot()
  })
})
