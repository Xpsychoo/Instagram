import React, { useEffect, useState } from 'react'
import Menu from '../Assets/Basics/MenuApi';
import Card from './Card'
const Bottom = () => {
    
    const [MenuData, setMenuData] = useState(Menu);
//    console.log(MenuData);
    return (
        <div className='bottomSec'>
            <Card MenuData = {MenuData}/>
        </div>
    )
}

export default Bottom;


// const getCovidData = async () => {
//     try {
//         const res = fetch('https://api.covid19india.org/data.json');
//         const actualData =  await res();
//         console.log(actualData.statewise[0]);
//     } catch (err) {
//         console.log(err);
//     }
// }
// useEffect(() => {
//     getCovidData();
// }, [])