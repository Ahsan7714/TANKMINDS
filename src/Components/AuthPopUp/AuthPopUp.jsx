// AuthPopUp.jsx
import React, { useState } from 'react';
import { BsWhatsapp } from 'react-icons/bs';
import './AuthPopUp.css';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { useAuthPopUp } from '../../context/authPopUpContext';

const AuthPopUp = () => {
  const {  type, onClose, onOpen } = useAuthPopUp();

  const [signInData, setSignInData] = useState({
    pin: '',
    wantUpdatesOnWhatsapp: false,
  });

  const [signUpData, setSignUpData] = useState({
    firstName: '',
    lastName: '',
    mobile: '',
    pin: '',
    wantUpdatesOnWhatsapp: false,
  });

  const onSignInChange = (e) => {
    setSignInData({
      ...signInData,
      [e.target.name]: e.target.value,
    });
  };

  const onSignUpChange = (e) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUpClick = () => {
    onClose(); // Close the modal
    onOpen('signUp'); // Open the sign-up modal
  };


  const handleSignInClick = () => {
    onClose(); // Close the modal
    onOpen('signIn'); // Open the sign-in modal
  }
  return (
    <div className="backdrop_shadow">
      <div className="modal_body">
        {type === 'signIn' ? (
          <div className="signIn_body">
          <div className="close_modal" onClick={()=>onClose()}>
          <IoCloseCircleOutline />


          </div>
            <div className="upper_image">
              <img src="/images/signinBanner.png" alt="" />
            </div>
            <div className="lower_body">
              <form>
                <label htmlFor="sigin_pin">Pin Code</label>
                <input
                  type="text"
                  placeholder="Enter the Pin Code"
                  name="pin"
                  id="sigin_pin"
                  onChange={onSignInChange}
                  value={signInData.pin}
                />
<span className="whatsapp_span">

                <input
                  type="checkbox"
                  id="signin_whatsapp_status"
                  value={signInData.wantUpdatesOnWhatsapp}
                  onChange={onSignInChange}
                />
                <label htmlFor="signin_whatsapp_status">
                  <span>Get updates on Whatsapp</span>
                  <button>
                    <BsWhatsapp />
                  </button>
                </label>
</span>

                <button className="signin_btn">sign in</button>
                <p>
                  new member ?{' '}
                  <button type="button" onClick={handleSignUpClick}>
                    create an account
                  </button>
                </p>
              </form>
            </div>
          </div>
        ) : (
          <div className="signUp_body">
            <div className="close_modal" onClick={()=>onClose()}>
            <IoCloseCircleOutline />
            </div>
            <h1>Create An Account </h1>
            <input type="text" placeholder="First Name*" />
            <input type="text" placeholder="Last Name*" />
            <input type="text" placeholder="Mobile Number*" />
            <input type="text" placeholder="Pin Code*" />
            <span className="whatsapp_span">
            <input type="checkbox" id="signup_whatsapp_status" />
            <label htmlFor="signup_whatsapp_status">
              <span>Get updates on Whatsapp</span>
              <button>
                <BsWhatsapp />
              </button>
            </label>
            </span>
            <button className='signUpBtn'>Sign Up</button>
            <p>
              Have an account ?{' '}
              <button type="button" onClick={handleSignInClick}>
                Sign in
              </button>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthPopUp;
