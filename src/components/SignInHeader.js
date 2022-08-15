import icon from '../images/icon.png'
import userIcon from '../images/userIcon.svg'
import searchIcon from '../images/searchIcon.svg'
import downIcon from '../images/downIcon.svg'
import infoIcon from '../images/infoIcon.svg'
import loginIcon from '../images/loginIcon.svg'
import { useState } from 'react'

function Header() {

    const [isShown, setIsShown] = useState(false);
    const handleClick = event => {
        setIsShown(current => !current);

    };
    return (
        <div className="w-screen bg-navy h-14 flex items-center justify-between border-b-2 shadow-lg border-solid border-offwhite">
            <div className='flex ml-5 gap-1 items-center hover:cursor-pointer'>
                <img src={icon} alt='Logo' className='h-9'></img>
                <h1 className="text-offwhite text-2xl font-title">fakeit</h1>
            </div>
            <form className='flex h-8 items-center border-solid border-2 border-offwhite border-opacity-90 rounded-md pr-64 hover:border-opacity-100 active:border-opacity-100'>
                <img className='h-16 opacity-80' src={searchIcon} alt='Search'  ></img>
                <input className='bg-navy h-6 text-offwhite placeholder:text-offwhite placeholder:text-opacity-80 focus:border-offwhite' placeholder='Search Fakeit'></input>
            </form>
            <div className='flex mr-8 gap-8 items-center'>
                <button className='text-offwhite border-offwhite border-2 rounded-full p-1 pl-8 pr-8 hover:bg-offwhite hover:bg-opacity-10'>Log In</button>
                <button className='text-navy bg-offwhite rounded-full p-1 pl-8 pr-8 hover:bg-opacity-90'>Sign Up</button>
                <div className='flex pr-2 w-20 h-10 rounded-lg hover:cursor-pointer items-center hover:border-solid hover:border-2 hover:border-offwhite hover:border-opacity-20 ' onClick={handleClick}>
                    <img src={userIcon} alt='Profile' className='h-12 invert '></img>
                    <img src={downIcon} alt='Profile' className='h-5 '></img>
                </div>
            </div>
            {isShown && (<Dropdown />)}
        </div>
    );
}

function Dropdown() {
    return (
        <div className='absolute right-4 top-16 flex flex-col justify-start items-center bg-navy border-2 shadow-lg border-solid border-offwhite text-offwhite'>
            <div className='w-48 h-12 pl-4 mt-4 flex items-center  hover:cursor-pointer hover:bg-brown hover:bg-opacity-10'>
                <img className='h-12 w-12 invert' alt='profile' src={infoIcon}></img>
                <h2>About Fakeit</h2>
            </div>
            <div className='w-48 h-12 pl-4 mt-4 mb-4 flex items-center  hover:cursor-pointer hover:bg-brown hover:bg-opacity-10'>
                <img className='h-12 w-12 invert' alt='profile' src={loginIcon}></img>
                <h2>Sign In</h2>
            </div>

        </div>
    )
}

export default Header;