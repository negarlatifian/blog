import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';
import classes from './notification.module.css';

const Notification = (props) => {
  const { title, message, status } = props;
  const [domReady, setDomReady] = useState(false);

  useEffect(() => {
    setDomReady(true);
  }, []);

  let statusClasses = '';

  if (status === 'success') {
    statusClasses = classes.success;
  }

  if (status === 'error') {
    statusClasses = classes.error;
  }

  const cssClasses = `${classes.notification} ${statusClasses}`;

  return domReady
    ? ReactDOM.createPortal(
        <div className={cssClasses}>
          <h2>{title}</h2>
          <p>{message}</p>
        </div>,
        document.querySelector('#notifications')
      )
    : null;
};

export default Notification;
