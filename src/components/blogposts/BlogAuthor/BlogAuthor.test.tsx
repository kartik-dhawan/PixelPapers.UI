import ReduxProvider from "@/redux/ReduxProvider"
import "@testing-library/jest-dom"
import renderer from "react-test-renderer"
import { BLOG_DATA_MOCK } from "@/utils/mockData"
import BlogAuthor from "."

describe("Blog Author Section Component", () => {
  it("-- it should match the snapshot", () => {
    const tree = renderer.create(
      <ReduxProvider>
        <BlogAuthor currentBlog={BLOG_DATA_MOCK.fields} content={{}} />
      </ReduxProvider>,
    )

    expect(tree).toMatchSnapshot()
  })
})
