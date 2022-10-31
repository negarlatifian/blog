import { useState, useEffect } from 'react';
import Notification from '../ui/notification';
import classes from './contact-form.module.css';

const sendContactData = async (contactData) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  if (!response.ok) {
    throw new Error(data.message || 'something went wrong');
  }
};

const ContactForm = () => {
  const [enteredEmail, setEmail] = useState('');
  const [enteredName, setName] = useState('');
  const [enteredMessage, setMessage] = useState('');
  const [status, setStatus] = useState();
  const [requestError, setRequestError] = useState();
  useEffect(() => {
    if (status === 'success' || status === 'error') {
      const timer = setTimeout(() => {
        setRequestError(null);
        setStatus(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const submitHandler = async (event) => {
    event.preventDefault();

    setStatus('pending');
    try {
      await sendContactData({
        email: enteredEmail,
        name: enteredName,
        message: enteredMessage,
      });
      setStatus('success');
      setEmail('');
      setMessage('');
      setName('');
    } catch (error) {
      setStatus('error');
      setRequestError(error.message);
    }
  };
  let notification;
  switch (status) {
    case 'pending':
      notification = {
        status: 'pending',
        title: 'Sending message ...',
        message: 'Your message is on its way',
      };
      break;
    case 'success':
      notification = {
        status: 'success',
        title: 'Success!',
        message: 'Message sent successfully',
      };
      break;
    case 'error':
      notification = {
        status: 'error',
        title: 'Error!',
        message: requestError,
      };
      break;
  }
  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor='email'>Your Email</label>
            <input
              type='email'
              id='email'
              required
              value={enteredEmail}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor='name'>Your Name</label>
            <input
              type='text'
              id='name'
              required
              value={enteredName}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor='message'>Your Message</label>
          <textarea
            id='message'
            rows='5'
            required
            value={enteredMessage}
            onChange={(event) => setMessage(event.target.value)}
          />
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
