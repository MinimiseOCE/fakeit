import icon from '../assets/icons/icon.png'
import userIcon from '../assets/icons/userIcon.svg'
import searchIcon from '../assets/icons/searchIcon.svg'
import downIcon from '../assets/icons/downIcon.svg'
import infoIcon from '../assets/icons/infoIcon.svg'
import createIcon from '../assets/icons/createIcon.svg'
import logoutIcon from '../assets/icons/logoutIcon.svg'
import { useState } from 'react'

function Header(props) {

    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        setIsShown(current => !current);
    };


    return (
        <div className="mw-screen bg-navy h-14 flex items-center justify-between border-b-2 shadow-lg border-solid border-offwhite">
            <div className='flex ml-5 gap-1 items-center hover:cursor-pointer'>
                <img src={icon} alt='Logo' className='h-9'></img>
                <h1 className="text-offwhite text-2xl font-title hidden md:block">fakeit</h1>
            </div>
            <form className='flex h-8 items-center border-solid border-2 border-offwhite border-opacity-90 rounded-md md:pr-64 hover:border-opacity-100 active:border-opacity-100'>
                <img className='h-10 md:16 opacity-80' src={searchIcon} alt='Search'  ></img>
                <input className='bg-navy h-6 w-16 md:w-64 text-offwhite placeholder:text-offwhite placeholder:text-opacity-80 placeholder:text-xs md:placeholder:text-sm focus:border-offwhite' placeholder='Search Fakeit'></input>
            </form>
            <div className='flex md:mr-8 mr-1 gap-1 hover:cursor-pointer items-center p-1 hover:border-2 hover:border-solid hover:border-offwhite' onClick={handleClick}>
                <img src={props.user?.photoURL} alt='profile pic' className='w-8 h-8'></img>
                <div className='text-offwhite'>{props.user?.displayName}</div>
            </div>
            {isShown && (<Dropdown logout={props.logout} handleClick={handleClick} />)}
        </div>
    );
}

function Dropdown(props) {
    return (
        <div className='absolute right-4 top-16 flex flex-col justify-start items-center bg-navy border-2 shadow-lg border-solid border-offwhite text-offwhite'>
            <div className='w-48 h-12 pl-4 mt-4 flex items-center hover:cursor-pointer hover:bg-brown hover:bg-opacity-10'>
                <img className='h-12 w-12 invert' alt='profile' src={userIcon}></img>
                <h2>Profile</h2>
            </div>
            <div className='w-48 h-12 pl-4 mt-4 flex items-center  hover:cursor-pointer hover:bg-brown hover:bg-opacity-10'>
                <img className='h-12 w-12 invert' alt='profile' src={infoIcon}></img>
                <h2>About Fakeit</h2>
            </div>
            <div className='w-48 h-12 pl-4 mt-4 flex items-center  hover:cursor-pointer hover:bg-brown hover:bg-opacity-10'>
                <img className='h-12 w-12 invert' alt='profile' src={createIcon}></img>
                <h2>Create A Community</h2>
            </div>
            <div onClick={() => { props.logout(); props.handleClick() }} className='w-48 h-12 pl-4 mt-4 mb-4 flex items-center  hover:cursor-pointer hover:bg-brown hover:bg-opacity-10'>
                <img className='h-12 w-12 invert' alt='profile' src={logoutIcon}></img>
                <h2>Log Out</h2>
            </div>

        </div>
    )
}

export default Header;