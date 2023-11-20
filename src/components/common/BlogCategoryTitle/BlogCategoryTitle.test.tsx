import ReduxProvider from "@/redux/ReduxProvider"
import "@testing-library/jest-dom"
import renderer from "react-test-renderer"
import BlogCategoryTitle from "."

describe("Blog category title section component", () => {
  it("-- should match the snapshot", () => {
    const tree = renderer.create(
      <ReduxProvider>
        <BlogCategoryTitle category="travel" />
      </ReduxProvider>,
    )

    expect(tree).toMatchSnapshot()
  })
})
