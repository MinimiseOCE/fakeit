import React from 'react'
import bg from '../assets/images/signUp.jpg'

export default function SignupPopup(props) {
  return (
    <div className='h-screen w-screen absolute -z-10 top-0'>
      <div className='h-screen w-screen sticky flex items-center justify-center'>
        <div className='gap-4 z-10 w-2/6 bg-offwhite border-solid border-navy border-2 rounded-lg flex items-start'>
          <img src={bg} alt='scenery' className='h-full w-1/3 border-r-light-blue border-solid border-2'></img>
          <div className='flex flex-col'>
            <form className='flex flex-col gap-4'>
              <input className='h-10 mt-4 bg-light-purple border-navy border-2 border-solid rounded-lg shadow-lg placeholder:text-offwhite placeholder:opacity-80  pl-4' placeholder='Email'></input>
              <input className='h-10 bg-light-purple border-navy border-2 border-solid rounded-lg shadow-lg placeholder:text-offwhite placeholder:opacity-80 pl-4' placeholder='Username'></input>
              <input className='h-10 bg-light-purple border-navy border-2 border-solid rounded-lg shadow-lg placeholder:text-offwhite placeholder:opacity-80 pl-4' placeholder='Password'></input>
              <input className='h-10 bg-light-purple border-navy border-2 border-solid rounded-lg shadow-lg placeholder:text-offwhite placeholder:opacity-80 pl-4' placeholder='Confirm Password'></input>
              <button className='h-10 bg-navy border-solid border-2 border-x-light-blue rounded-full text-offwhite shadow-lg'>Sign Up!</button>
            </form>
          </div>
          <button className='bg-navy text-offwhite rounded-full h-8 w-8 shadow-lg mt-4 flex items-center justify-center' onClick={props.signUp}>X</button>
        </div>
      </div>
    </div>
  )
}
