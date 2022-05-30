import React from 'react'

const HomeMenuComponent = ({ HomemenuData }) => {
  console.log(HomemenuData);
  return (
    <>

      {HomemenuData.map((HomeApiData) => {

        return (
          <div className="list__row_Home" key={HomeApiData.id}>
            <div className="img-section"><img src={HomeApiData.image} alt="" /></div>
            <div className="like--sec"><span className="fas fa-heart"></span><span>{HomeApiData.count} Likes</span></div>
            <div className="Text__sec">{HomeApiData.Description} </div>
          </div>
        )
      })}
    </>
  )
}

export default HomeMenuComponent;