import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Data from './components/Imgdata';

const App = () => {
  
  
  
  return (
    <>
      <Navbar />
      <div className="main-div">
        <h1 className="title"> My Projects </h1>
       {Data.map((val,ind) => {
              return ( 
               <>
               <Card key={ind} imgsrc={val.imgsrc} title={val.title} link={val.link} gitlink={val.gitlink}
                 />
               </>
                )
            })}     
    </div>
    </>
    )
}

export default App;