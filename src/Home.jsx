import React from 'react'

const Home = () => {
  return (
    <div style = {{
        height: "350px",
        width: "550px",
        padding:'40px',
        backgroundImage:
        'url("https://img.freepik.com/free-photo/wide-angle-shot-singletree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg")',
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
     }}>
    <center>
    
    <div className='dil'>
      <input className='fil' type='text' placeholder='Enter your Name'/>
      <input className='fil'  type='text' placeholder='Enter your Email'/>
      <input className='fil'  type='text' placeholder='Password'/>
      <input  className='fil' type='text' placeholder='confirm password'/>
      <button className='gil'>Submit</button>

    </div>
    </center>
    </div>
  )
}

export default Home;

