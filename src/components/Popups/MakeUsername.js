import React from 'react'

export default function MakeUsername(props) {
  return (
    <div className='h-screen w-screen absolute -z-10 top-0'>
      <div className='h-screen w-screen sticky flex items-center justify-center'>
        <div className='gap-2 z-10 h-3/6 w-4/6 md:w-1/6 md:h-2/6 bg-offwhite border-solid border-navy border-2 rounded-lg flex items-center justify-around'>
          <div className='flex flex-col gap-4 items-center justify-between'>
            <input className='h-10 mt-4 bg-light-purple w-48 md:w-64 border-navy border-2 border-solid rounded-lg shadow-lg placeholder:text-offwhite placeholder:opacity-80  pl-4'
              placeholder='Username' onChange={(event) => { props.setDisplayName(event.target.value) }}></input>
            <button className='h-10 bg-navy border-solid border-2 border-x-light-blue rounded-full  text-offwhite shadow-lg w-48 md:w-64' onClick={props.makeUsername}>Create Username</button>
            <p className="mb-2 text-center text-navy">Select a cool username (⌐■_■) </p>
          </div>
        </div>
      </div>
    </div>
  )
}
