import { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import classes from './Form.module.css';
import 'react-toastify/dist/ReactToastify.css';

const Form = () => {
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();

  const handleNameBlur = () => {
    if (nameRef.current.value.trim().length === 0) {
      setNameError(true);
      return;
    }

    setNameError(false);
  };

  const handleEmailBlur = () => {
    if (emailRef.current.value.trim().length === 0) {
      setEmailError(true);
      return;
    }
    setEmailError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailError && !nameError) {
      toast.success(
        `Sucessfully registered with email ${emailRef.current.value}!`,
        {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        }
      );
      nameRef.current.value = '';
      emailRef.current.value = '';
    }
  };

  return (
    <>
      <form className={classes.form} onSubmit={handleSubmit}>
        <header>Subscribe</header>
        <label>
          <span>Name *</span>
          <input
            type="text"
            ref={nameRef}
            onBlur={handleNameBlur}
            className={`${classes.input} ${nameError ? classes.error : ''}`}
          />
        </label>
        <label>
          <span>Email *</span>
          <input
            type="text"
            ref={emailRef}
            onBlur={handleEmailBlur}
            className={`${classes.input} ${emailError ? classes.error : ''}`}
          />
        </label>
        <button
          onClick={() => {
            handleNameBlur();
            handleEmailBlur();
          }}
        >
          Subscribe
        </button>
      </form>
      <ToastContainer />
    </>
  );
};

export default Form;
