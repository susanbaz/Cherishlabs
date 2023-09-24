import React from 'react';
import Header from './Home/Header';
import TopHeader from './Home/TopHeader';
import MainHeader from './Home/MainHeader';
import Footer from './Home/Footer';
import ContactForm from './ContactForm';

const Contact = () => {
    return (
        <div className="App">
        <Header />
        <TopHeader />
        <MainHeader />
        <ContactForm />
        <Footer />
        </div>
    );
    }
export default Contact;