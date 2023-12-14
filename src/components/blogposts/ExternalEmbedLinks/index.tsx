import { PODCAST_IFRAME_LINKS_DEFAULT } from "@/utils/constants"
import { ExternalEmbedLinkObject } from "@/utils/interfaces"
import { Box } from "@mui/material"
import React, { useCallback, useState } from "react"
import { styles } from "./styles"
import EmbediFrameSkeleton from "@/components/common/Skeletons/EmbediFrameSkeleton"

interface ExternalEmbedLinksProps {
  embedLinks: ExternalEmbedLinkObject[]
}

const ExternalEmbedLinks = ({ embedLinks }: ExternalEmbedLinksProps) => {
  const [isEmbedLoaded, setIsEmbedLoaded] = useState(false)

  const embedLoadingHandler = useCallback(() => {
    setIsEmbedLoaded(true)
  }, [])

  return (
    <Box className="externalLinksIFrameContainer">
      {embedLinks.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <Box margin={"1rem 0rem 0rem"}>{item.title}</Box>
            {item.label === "spotify" && (
              <Box sx={styles.spotifyEmbedWrapper}>
                {!isEmbedLoaded && <EmbediFrameSkeleton />}
                <iframe
                  style={styles.commonIFrameStyles}
                  src={item.link ?? PODCAST_IFRAME_LINKS_DEFAULT.SPOTIFY}
                  width="100%"
                  height="100%"
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  onLoad={embedLoadingHandler}
                />
              </Box>
            )}
            {item.label === "youtube" && (
              <Box sx={styles.youtubeEmbedWrapper}>
                {!isEmbedLoaded && <EmbediFrameSkeleton />}
                <iframe
                  style={styles.commonIFrameStyles}
                  width="100%"
                  height="100%"
                  src={item.link ?? PODCAST_IFRAME_LINKS_DEFAULT.YOUTUBE}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  onLoad={embedLoadingHandler}
                />
              </Box>
            )}
          </React.Fragment>
        )
      })}
    </Box>
  )
}

export default ExternalEmbedLinks
