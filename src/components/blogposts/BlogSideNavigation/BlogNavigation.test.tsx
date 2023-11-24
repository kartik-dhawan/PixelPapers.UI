import ReduxProvider from "@/redux/ReduxProvider"
import "@testing-library/jest-dom"
import renderer from "react-test-renderer"
import BlogSideNavigation from "."
import { BLOG_DATA_MOCK } from "@/utils/mockData"

describe("Blog Side Navigation Component", () => {
  it("-- it should match the snapshot", () => {
    const tree = renderer.create(
      <ReduxProvider>
        <BlogSideNavigation
          blogType="Travel"
          blogs={[BLOG_DATA_MOCK, BLOG_DATA_MOCK]}
          themeColor="#222"
        />
      </ReduxProvider>,
    )

    expect(tree).toMatchSnapshot()
  })
})
