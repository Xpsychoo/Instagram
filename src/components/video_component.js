import React from 'react'

const Video_component = ({ videoMenuData }) => {
    return (
        <>

            {videoMenuData.map((videoApiData) => {

                return (<div className="list__row" key={videoApiData.id}>
                    <div className="img-section"><img src={videoApiData.image} alt="" /></div>
                    <div className="Text__sec">{videoApiData.Description} </div>
                </div>
                )
            })}
        </>
    )
}

export default Video_component;