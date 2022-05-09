import React from 'react'


const NotificationComponent = ({ NotificationData }) => {
  console.log(NotificationData);

  return (
    <>
      {NotificationData.map((NotApiData) => {

        return (<div className="list__row" key={NotApiData.id}>
          <div className="img-section"><img src={NotApiData.image} alt="" /></div>
          <div className="Text__sec">{NotApiData.Description} </div>
        </div>
        )
      })}
    </>
  )
}

export default NotificationComponent;