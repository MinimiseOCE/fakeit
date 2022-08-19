import React from 'react'
import bg from '../assets/images/signUp.jpg'

export default function SignupPopup(props) {
  return (
    <div className='h-screen w-screen absolute -z-10 top-0'>
      <div className='h-screen w-screen sticky flex items-center justify-center'>
        <div className='gap-4 z-10 w-4/6 md:w-2/6 bg-offwhite border-solid border-navy border-2 rounded-lg flex items-start'>
          <img src={bg} alt='scenery' className='hidden md:block h-full w-1/3 border-r-light-blue border-solid border-2'></img>
          <div className='flex flex-col'>
            <div className='flex flex-col gap-4 ml-6 md:ml-0'>
              <input className='h-10 w-32 md:w-64 mt-4 bg-light-purple border-navy border-2 border-solid rounded-lg shadow-lg placeholder:text-offwhite placeholder:opacity-80  pl-4'
                placeholder='Email' onChange={(event) => { props.setRegisterEmail(event.target.value) }}>
              </input>
              <input className='h-10 w-32 md:w-64 bg-light-purple border-navy border-2 border-solid rounded-lg shadow-lg placeholder:text-offwhite placeholder:opacity-80 pl-4'
                placeholder='Username' ></input>
              <input className='h-10 w-32 md:w-64 bg-light-purple border-navy border-2 border-solid rounded-lg shadow-lg placeholder:text-offwhite placeholder:opacity-80 pl-4'
                placeholder='Password' type='password' onChange={(event) => { props.setRegisterPassword(event.target.value) }}></input>
              <input className='h-10 w-32 md:w-64 bg-light-purple border-navy border-2 border-solid rounded-lg shadow-lg placeholder:text-offwhite placeholder:opacity-80 pl-4' type='password' placeholder='Confirm Pass'></input>
              <button className='h-10 bg-navy border-solid border-2 border-x-light-blue rounded-full text-offwhite shadow-lg'
                onClick={() => { props.signUp(); props.createUser() }}>Sign Up!</button>
            </div>
          </div>
          <button className='bg-navy text-offwhite rounded-full text-xs md:text-sm h-4 w-4 md:h-8 md:w-8 shadow-lg mt-4 flex items-center justify-center' onClick={props.signUp}>X</button>
        </div>
      </div>
    </div>
  )
}
