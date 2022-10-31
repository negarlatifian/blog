import Head from 'next/head';
import { Fragment } from 'react';
import ContactForm from '../components/contact/contact-form';

const ContactPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Contact Me</title>
        <meta name='description' content='Send me You Messages' />
      </Head>
      <ContactForm />;
    </Fragment>
  );
};

export default ContactPage;
