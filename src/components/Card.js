import React from 'react'

const Card = ({ MenuData }) => {
    console.log(MenuData);
  return (
    <>


{ MenuData.map((ApiData) => {

    return(
        <div className="card" key={ApiData.id}>
            <h1 className="heads"> {ApiData.name} </h1>
            <p className="para">About: {ApiData.description} </p>
            <div className="price"> <img src={ApiData.image} alt="" /></div>
        </div>
    )
})}
    

    </>
  )
}
export default Card;
