import icon from '../assets/icons/icon.png'
import userIcon from '../assets/icons/userIcon.svg'
import searchIcon from '../assets/icons/searchIcon.svg'
import downIcon from '../assets/icons/downIcon.svg'
import infoIcon from '../assets/icons/infoIcon.svg'
import loginIcon from '../assets/icons/loginIcon.svg'
import { useState } from 'react'

import SignupPopup from "../Popups/SignupPopup";
import SigninPopup from '../Popups/SigninPopup'

function SignInHeader(props) {

    const [isShown, setIsShown] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
    const [isSignin, setIsSignin] = useState(false);

    const handleClick = event => {
        setIsShown(current => !current);
    };
    const signUp = event => {
        setIsSignup(current => !current);
        if (isSignin === true) {
            setIsSignin(false);
        }

    };
    const signIn = event => {
        setIsSignin(current => !current);
        if (isSignup === true) {
            setIsSignup(false);
            setIsShown(false);
        }
        setIsShown(false);
    };
    return (
        <div className="w-screen bg-navy gap-2 h-14 flex items-center justify-around md:justify-between border-b-2 shadow-lg border-solid border-offwhite">
            <div className='flex ml-5 gap-1 items-center hover:cursor-pointer'>
                <img src={icon} alt='Logo' className='w-9'></img>
                <h1 className="text-offwhite text-xl font-title hidden md:block">fakeit</h1>
            </div>
            <form className='flex h-8 w- items-center border-solid border-2 border-offwhite border-opacity-90 rounded-md hover:border-opacity-100 md:pr-64 active:border-opacity-100'>
                <img className='h-10 opacity-80' src={searchIcon} alt='Search'  ></img>
                <input className='bg-navy w-16 text-offwhite placeholder:text-offwhite placeholder:text-opacity-80 focus:border-offwhite' placeholder='Search'></input>
            </form>
            <div className='flex mr-8 gap-8 items-center'>
                <button className='hidden md:block text-offwhite border-offwhite border-2 rounded-full p-1 pl-8 pr-8 hover:bg-offwhite hover:bg-opacity-10' onClick={signIn}>Log In</button>
                <button className='hidden md:block text-navy bg-offwhite rounded-full p-1 pl-8 pr-8 hover:bg-opacity-90' onClick={signUp}>Sign Up</button>
                <div className='flex pr-2 w-20 h-10 rounded-lg hover:cursor-pointer items-center hover:border-solid hover:border-2 hover:border-offwhite hover:border-opacity-20 ' onClick={handleClick}>
                    <img src={userIcon} alt='Profile' className='h-12 invert '></img>
                    <img src={downIcon} alt='Profile' className='h-5 '></img>
                </div>
            </div>
            {isShown && (<Dropdown signIn={signIn} />)}
            {isSignin && (<SigninPopup signIn={signIn} signUp={signUp} setLoginEmail={props.setLoginEmail} setLoginPassword={props.setLoginPassword} login={props.login} />)}
            {isSignup && (<SignupPopup signUp={signUp} setRegisterEmail={props.setRegisterEmail} setRegisterPassword={props.setRegisterPassword} createUser={props.createUser} />)}
        </div>
    );
}

function Dropdown(props) {
    return (
        <div className='absolute right-4 top-16 flex flex-col justify-start items-center bg-navy border-2 shadow-lg border-solid border-offwhite text-offwhite'>
            <div className='w-48 h-12 pl-4 mt-4 flex items-center  hover:cursor-pointer hover:bg-brown hover:bg-opacity-10'>
                <img className='h-12 w-12 invert' alt='profile' src={infoIcon}></img>
                <h2>About Fakeit</h2>
            </div>
            <div className='w-48 h-12 pl-4 mt-4 mb-4 flex items-center  hover:cursor-pointer hover:bg-brown hover:bg-opacity-10' onClick={props.signIn}>
                <img className='h-12 w-12 invert' alt='profile' src={loginIcon}></img>
                <h2>Sign In</h2>
            </div>
        </div>
    )
}

export default SignInHeader;