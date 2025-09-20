import React from 'react';

const Footer: React.FC = () => {
    const githubUrl = "https://github.com/meruuuuooo";
    const emailAddress = "mailem.meldavid@gmail.com";
    const qrCodeUrl = "qr.png";
  

    return (
        <footer className="w-full mt-16 py-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    <div className="flex flex-col items-center md:items-start space-y-2">
                        <h4 className="font-semibold text-gray-300">SQL Formatter</h4>
                        <p className="text-sm">&copy; {new Date().getFullYear()}. All Rights Reserved.</p>
                        <p className="text-xs text-gray-500">Made by meru using Google Builder AI</p>
                    </div>

                    <div className="flex justify-center space-x-6">
                        <a
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition"
                            aria-label="View source code on GitHub"
                        >
                            GitHub
                        </a>
                        <a
                            href={`mailto:${emailAddress}?subject=Feedback%20on%20SQL%20Formatter`}
                            className="hover:text-white transition"
                            aria-label="Send feedback via email"
                        >
                            Send Feedback
                        </a>
                    </div>

                    <div className="flex flex-col items-center md:items-end space-y-2">
                        <h4 className="font-semibold text-gray-300">Enjoy the app?</h4>
                        <p className="text-sm">Scan to buy me a coffee!</p>
                        <img
                            src={qrCodeUrl}
                            alt="GCash QR Code for donation"
                            className="mt-2 rounded-lg bg-white p-1"
                            width="120"
                            height="120"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
