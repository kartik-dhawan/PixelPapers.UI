import ReduxProvider from "@/redux/ReduxProvider"
import "@testing-library/jest-dom"
import renderer from "react-test-renderer"
import TravelBlogThumbnail from "."
import Thumbnail, { ThumbnailHeadings } from "./Thumbnail"
import { TRAVEL_PAGE_THUMBNAIL_CARD_DATA } from "@/utils/mockData"

describe("Travel blog thumbnail cards component", () => {
  it("-- should match the snapshot", () => {
    const tree = renderer.create(
      <ReduxProvider>
        <TravelBlogThumbnail type="stories" largeCardIndex={2} />
      </ReduxProvider>,
    )

    expect(tree).toMatchSnapshot()
  })
})

describe("The thumbnail card component", () => {
  it("-- should match the snapshot", () => {
    const tree = renderer.create(
      <ReduxProvider>
        <Thumbnail
          item={TRAVEL_PAGE_THUMBNAIL_CARD_DATA}
          index={0}
          largeCardIndex={2}
        />
      </ReduxProvider>,
    )

    expect(tree).toMatchSnapshot()
  })
})

describe("The thumbnail text data component", () => {
  it("-- should match the snapshot", () => {
    const tree = renderer.create(
      <ReduxProvider>
        <ThumbnailHeadings item={TRAVEL_PAGE_THUMBNAIL_CARD_DATA} />
      </ReduxProvider>,
    )

    expect(tree).toMatchSnapshot()
  })
})
