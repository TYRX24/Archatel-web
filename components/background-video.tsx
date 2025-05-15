"use client"

import React from "react"

const BackgroundVideo = () => {
  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden">
      <video
        src="https://web3-cnt-dev2.cnt.id//iphone.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
        preload="auto"
        controls={false}
      />
    </div>
  )
}

export default BackgroundVideo
