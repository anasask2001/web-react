import React, { useState } from 'react';
import { RiMailLine } from '@remixicon/react';
import SlideUp from '../../../utlits/animations/slideUp';
import emailjs from '@emailjs/browser';
import { toast } from 'sonner';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, SetEmail] = useState('');
    const [message, SetMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = 'service_iue6atc';
        const templateId = 'template_sklbkjn';
        const publicKey = 'VW9Qbi4E7Vq1uoukn';

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: 'Muhammed Anas',
            message: message,
        };

        emailjs
            .send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email Sent Successfully', response);
                toast.success("Email Sent Successfully")
                setName('');
                SetEmail('');
                SetMessage('');
            })
            .catch((error) => {
                console.error('Error Sending Mail:', error);
            });
    };

    return (
        <div className="col-lg-8">
            <SlideUp>
                <div className="contact-form contact-form-area">
                    <form onSubmit={handleSubmit} id="contactForm" className="contactForm" name="contactForm">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="name">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="form-control"
                                        value={name}
                                        placeholder="Steve Milner"
                                        required
                                        data-error="Please enter your Name"
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                    <label htmlFor="name" className="for-icon">
                                        <i className="far fa-user"></i>
                                    </label>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label htmlFor="email">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="form-control"
                                        value={email}
                                        placeholder="hello@websitename.com"
                                        required
                                        data-error="Please enter your Email"
                                        onChange={(e) => SetEmail(e.target.value)}
                                    />
                                    <label htmlFor="email" className="for-icon">
                                        <i className="far fa-envelope"></i>
                                    </label>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label htmlFor="message">Your Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        className="form-control"
                                        rows="4"
                                        value={message}
                                        placeholder="Write Your message"
                                        required
                                        data-error="Please Write your Message"
                                        onChange={(e) => SetMessage(e.target.value)}
                                    ></textarea>
                                    <div className="help-block with-errors"></div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group mb-0">
                                    <button type="submit" className="theme-btn">
                                        Send Me Message <i><RiMailLine size={15} /></i>
                                    </button>
                                    <div id="msgSubmit" className="hidden"></div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </SlideUp>
        </div>
    );
};

export default ContactForm;