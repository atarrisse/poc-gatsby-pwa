import React, { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"
import YouTube from "react-youtube"

const videoId = "XxVg_s8xAms"

export default function Home() {
  const [isVideoLoading, setIsVideoLoading] = useState(false)
  const [isPlayerOpen, setIsPlayerOpen] = useState(false)

  const handleImageClick = () => {
    setIsPlayerOpen(true)
    setIsVideoLoading(true)
  }

  const handleOverlayClick = () => {
    setIsPlayerOpen(false)
  }

  const onReady = event => {
    console.log(
      `YouTube Player object for videoId: "${videoId}" has been saved to state.`
    )
    setIsVideoLoading(false)
  }

  return (
    <main>
      <h1>Enquanto isso</h1>
      <div className="image" onClick={handleImageClick}>
        <div className="image-overlay" />
        <StaticImage src="https://placekitten.com/300/200" alt="A kitten" />
      </div>
      {isPlayerOpen && (
        <>
          <div className="overlay" onClick={handleOverlayClick}></div>
          <dialog open={isPlayerOpen}>
            {isVideoLoading && <p className="loading">Loading</p>}
            <YouTube
              containerClassName="youtubeContainer"
              className="youtube"
              videoId={videoId}
              onReady={onReady}
              data-loading={isVideoLoading}
            />
          </dialog>
        </>
      )}
    </main>
  )
}
