import React from 'react'

const HomeMenuComponent = ({ HomeMenuData }) => {
    console.log(HomeMenuData);

  return (
    <>

{HomeMenuData.map((HomeApiData) => {

return (<div className="list__row" key={HomeApiData.id}>
  <div className="img-section"><img src={HomeApiData.image} alt="" /></div>
  <div className="Text__sec">{HomeApiData.Description} </div>
</div>
)
})}
    </>
  )
}

export default HomeMenuComponent;