import React from 'react';

const Footer = () => {
    return (
        <div className="bg-purple-300 h-12 flex justify-center items-center gap-3 px-4 text-center">
            <img
                className="h-8 w-8 invert rounded-full"
                src="public/icons/password.gif"
                alt="Secure Icon"
            />
            <span className="font-semibold">Passwords Secured</span>
        </div>
    );
};

export default Footer;