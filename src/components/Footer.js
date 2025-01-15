import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <>
            <div className="Toastify"></div>
            <div className="footer-module">
                <div className="footer-module1">
                    <div>
                        <p>Grounds</p>
                        <p>Tournaments</p>
                        <p>Book matches</p>
                    </div>
                    <div>
                        <p>Contact us</p>
                        <p>Blogs</p>
                    </div>
                    <div>
                        <p>Privacy policy</p>
                        <p>Terms of service</p>
                    </div>
                    <div>
                        <p>Follow us on</p>
                        <a
                            href="https://www.instagram.com/cric_konnect_?igsh=MWhrZHZnMDRkaWE4OA=="
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span
                                role="img"
                                aria-label="instagram"
                                style={{ fontSize: '32px', color: '#E1306C' }}
                                className="anticon anticon-instagram"
                            >
                                <svg
                                    viewBox="64 64 896 896"
                                    focusable="false"
                                    data-icon="instagram"
                                    width="1em"
                                    height="1em"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path d="M512 306.9c-113.5 0-205.1 91.6-205.1 205.1S398.5 717.1 512 717.1 717.1 625.5 717.1 512 625.5 306.9 512 306.9zm0 338.4c-73.4 0-133.3-59.9-133.3-133.3S438.6 378.7 512 378.7 645.3 438.6 645.3 512 585.4 645.3 512 645.3zm213.5-394.6c-26.5 0-47.9 21.4-47.9 47.9s21.4 47.9 47.9 47.9 47.9-21.3 47.9-47.9a47.84 47.84 0 00-47.9-47.9zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zm-88 235.8c-7.3 18.2-16.1 31.8-30.2 45.8-14.1 14.1-27.6 22.9-45.8 30.2C695.2 844.7 570.3 840 512 840c-58.3 0-183.3 4.7-235.9-16.1-18.2-7.3-31.8-16.1-45.8-30.2-14.1-14.1-22.9-27.6-30.2-45.8C179.3 695.2 184 570.3 184 512c0-58.3-4.7-183.3 16.1-235.9 7.3-18.2 16.1-31.8 30.2-45.8s27.6-22.9 45.8-30.2C328.7 179.3 453.7 184 512 184s183.3-4.7 235.9 16.1c18.2 7.3 31.8 16.1 45.8 30.2 14.1 14.1 22.9 27.6 30.2 45.8C844.7 328.7 840 453.7 840 512c0 58.3 4.7 183.2-16.2 235.8z" />
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
                <div>
                    <div className="footer-bottom"></div>
                    <p className="footer-copyright">
                        Crickonnect 2025. All Rights Reserved.
                    </p>
                </div>
            </div>
        </>
    );
};

export default Footer;