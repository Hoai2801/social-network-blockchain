import React from 'react';

const Footer = () => {
    return (
        <div className={`mt-[200px]`}>

            <div className="grid grid-cols-1">
                <div className="relative">
                    <div className="relative w-full bg-[#192132] dark:bg-slate-900">
                        <div
                            className="relative -top-40 bg-[#192132] dark:bg-slate-900 lg:px-8 px-6 py-10 rounded-xl shadow dark:shadow-gray-800 overflow-hidden">
                            <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                                <div className="md:text-start text-center z-1">
                                    <h3 className="text-[26px] font-semibold text-slate-900 dark:text-white">Subscribe
                                        to Newsletter!</h3>
                                    <p className="text-slate-400 max-w-xl mx-auto">Subscribe to get latest updates and
                                        information.</p>
                                </div>

                                <div className="subcribe-form z-1">
                                    <form className="relative max-w-lg md:ms-auto">
                                        <input type="email" id="subcribe" name="email"
                                               className="pt-4 pe-40 pb-4 ps-6 w-full h-[50px] outline-none text-slate-900 dark:text-white rounded-full bg-[#192132] dark:bg-slate-900 shadow dark:shadow-gray-800"
                                               placeholder="Enter your email :"/>
                                        <button type="submit"
                                                className="btn absolute top-[2px] end-[3px] h-[46px] px-5 bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full">Subscribe
                                        </button>
                                    </form>
                                </div>
                            </div>

                            <div className="absolute -top-5 -start-5">
                                <div
                                    className="uil uil-envelope lg:text-[150px] text-7xl text-slate-900/5 dark:text-white/5 -rotate-45"></div>
                            </div>

                            <div className="absolute -bottom-5 -end-5">
                                <div
                                    className="uil uil-pen lg:text-[150px] text-7xl text-slate-900/5 dark:text-white/5"></div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px] -mt-24">
                            <div className="lg:col-span-4 md:col-span-12">
                                <a href="#" className="text-[22px] focus:outline-none">
                                    <img src="assets/images/logo-white.png" alt=""/>
                                </a>
                                <p className="mt-6 text-gray-300">Buy, sell and discover exclusive digital assets by the
                                    top artists of NFTs world.</p>

                            </div>

                            <div className="lg:col-span-2 md:col-span-4">
                                <h5 className="tracking-[1px] text-lg text-gray-100 font-semibold">Giglink</h5>
                                <ul className="list-none footer-list mt-6">
                                    <li><a href="explore-one.html"
                                           className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i
                                        className="uil uil-angle-right-b me-1"></i> Explore Item</a></li>
                                    <li className="mt-[10px]"><a href="auction.html"
                                                                 className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i
                                        className="uil uil-angle-right-b me-1"></i> Live Auction</a></li>
                                    <li className="mt-[10px]"><a href="activity.html"
                                                                 className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i
                                        className="uil uil-angle-right-b me-1"></i> Activities</a></li>
                                    <li className="mt-[10px]"><a href="wallet.html"
                                                                 className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i
                                        className="uil uil-angle-right-b me-1"></i> Wallets</a></li>
                                    <li className="mt-[10px]"><a href="creators.html"
                                                                 className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i
                                        className="uil uil-angle-right-b me-1"></i> Creators</a></li>
                                </ul>
                            </div>

                            <div className="lg:col-span-3 md:col-span-4">
                                <h5 className="tracking-[1px] text-lg text-gray-100 font-semibold">Usefull Links</h5>
                                <ul className="list-none footer-list mt-6">
                                    <li><a href="aboutus.html"
                                           className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i
                                        className="uil uil-angle-right-b me-1"></i> About Us</a></li>
                                    <li className="mt-[10px]"><a href="blogs.html"
                                                                 className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i
                                        className="uil uil-angle-right-b me-1"></i> Blog &amp; News</a></li>
                                    <li className="mt-[10px]"><a href="terms.html"
                                                                 className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i
                                        className="uil uil-angle-right-b me-1"></i> Terms &amp; Condition</a></li>
                                    <li className="mt-[10px]"><a href="privacy.html"
                                                                 className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i
                                        className="uil uil-angle-right-b me-1"></i> Privacy policy</a></li>
                                    <li className="mt-[10px]"><a href="login.html"
                                                                 className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i
                                        className="uil uil-angle-right-b me-1"></i> Login</a></li>
                                    <li className="mt-[10px]"><a href="contact.html"
                                                                 className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out"><i
                                        className="uil uil-angle-right-b me-1"></i> Contact Us</a></li>
                                </ul>
                            </div>

                            <div className="lg:col-span-3 md:col-span-4">
                                <h5 className="tracking-[1px] text-lg text-gray-100 font-semibold">Download the Giglink
                                    app</h5>

                                <ul className="list-none mt-6">
                                    <li className="inline"><img src="assets/images/app.png" className="h-9 inline-block"
                                                                alt=""/></li>
                                    <li className="inline"><img src="assets/images/playstore.png"
                                                                className="h-9 inline-block" alt=""/></li>
                                </ul>

                                <div className="mt-6">
                                    <h5 className="tracking-[1px] text-lg text-gray-100 font-semibold">Contact
                                        Details</h5>

                                    <div className="flex mt-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                             stroke-linecap="round" stroke-linejoin="round"
                                             className="feather feather-mail w-5 h-5 text-violet-600 me-3 mt-1">
                                            <path
                                                d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                            <polyline points="22,6 12,13 2,6"></polyline>
                                        </svg>
                                        <div className="">
                                            <a href="mailto:contact@example.com"
                                               className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out">contact@example.com</a>
                                        </div>
                                    </div>

                                    <div className="flex mt-6">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                             stroke-linecap="round" stroke-linejoin="round"
                                             className="feather feather-phone w-5 h-5 text-violet-600 me-3 mt-1">
                                            <path
                                                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                        </svg>
                                        <div className="">
                                            <a href="tel:+152534-468-854"
                                               className="text-[16px] text-gray-300 hover:text-gray-400 duration-500 ease-in-out">+152
                                                534-468-854</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Footer;
