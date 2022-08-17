import React from 'react'
import bg from '../assets/images/signUp.jpg'

export default function SigninPopup(props) {
  return (
    <div className='h-screen w-screen absolute -z-10 top-0'>
      <div className='h-screen w-screen sticky flex items-center justify-center'>
        <div className='gap-2 z-10 w-4/6 md:w-2/6 bg-offwhite border-solid border-navy border-2 rounded-lg flex items-start'>
          <img src={bg} alt='scenery' className='hidden md:block h-full w-1/3 border-r-light-blue border-solid border-2'></img>
          <div className='flex flex-col'>
            <div className='flex flex-col gap-4 ml-6 md:ml-0'>
              <input className='h-10 mt-4 bg-light-purple w-32 md:w-64 border-navy border-2 border-solid rounded-lg shadow-lg placeholder:text-offwhite placeholder:opacity-80  pl-4'
                placeholder='Email' onChange={(event) => { props.setLoginEmail(event.target.value) }}></input>
              <input className='h-10 bg-light-purple w-32 md:w-64 border-navy border-2 border-solid rounded-lg shadow-lg placeholder:text-offwhite placeholder:opacity-80 pl-4'
                placeholder='Password' onChange={(event) => { props.setLoginPassword(event.target.value) }}></input>
              <button className='h-10 bg-navy border-solid border-2 border-x-light-blue rounded-full text-offwhite shadow-lg' onClick={() => { props.login(); props.signIn() }}>Log in!</button>
              <p onClick={props.signUp} className="mb-2 text-center underline cursor-pointer text-light-blue">Sign up?</p>
            </div>
          </div>
          <button className='bg-navy text-offwhite  rounded-full text-xs md:text-sm h-4 w-4 md:h-8 md:w-8 shadow-lg mt-4 mr-4' onClick={props.signIn}>X</button>
        </div>
      </div>
    </div>
  )
}
