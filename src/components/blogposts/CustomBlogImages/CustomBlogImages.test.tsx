import ReduxProvider from "@/redux/ReduxProvider"
import "@testing-library/jest-dom"
import renderer from "react-test-renderer"
import CustomBlogImages from "."
import { BLOG_IMAGES_ARRAY } from "@/utils/mockData"

describe("Custom Images Component", () => {
  it("-- should match the snapshot", () => {
    const tree = renderer.create(
      <ReduxProvider>
        <CustomBlogImages blogImages={BLOG_IMAGES_ARRAY} />
      </ReduxProvider>,
    )
    expect(tree).toMatchSnapshot()
  })
})
