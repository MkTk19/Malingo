import React from 'react'

function ActivityRequest({title}) {
    return (
        <div className="suggestion">
            <p>{title}</p>
            <button>Follow</button>
        </div>
    )
}

export default ActivityRequest
