import React from 'react'

function JoinedActivity({ img, title }) {
    return (
        <div className="story">
            <img src={img} alt="Story 1" />
            <p>{title}</p>
        </div>
    )
}

export default JoinedActivity


