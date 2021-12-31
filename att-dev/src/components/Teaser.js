import React, { useState } from "react"
import TeaserFront from "../components/teaser/teaserFront"
import TeaserBack from "../components/teaser/teaserBack"

import Button from "react-bootstrap/Button"

export default function Teaser() {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <>
      <div className="teaser-wrapper">
        <div className="teaser-container">
          {!isFlipped ? <TeaserFront /> : <TeaserBack />}
        </div>

        <div className="teaser-button-container">
          <Button type="button" onClick={handleClick}>
            Ask The Tarot
          </Button>
        </div>
      </div>
    </>
  )
}
