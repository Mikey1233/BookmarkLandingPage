import React from 'react'
import BlueBtn from '../BlueBtn'
function Tab({head,image,header,text,index}) {
  return (
    <div>
      <div  className={`${head!==index?'toggle-tab hidden':'toggle-tab'}`}>
      <div className="blue-container">
        <img src={image} alt="illustration-features-1" className="image1" />
        <div className="blue-spot"></div>
      </div>
      <div className="toggle-article">
        <h1>{header}</h1>
        <p>{text}</p>
        <div>
        <BlueBtn BtnValue={'More info'}/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Tab
