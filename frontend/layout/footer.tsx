const Footer = () => {
  return (
    <div className={`mt-[200px]`}>
      <div className="grid grid-cols-1">
        <div className="relative">
          <div className="relative w-full bg-[#192132] dark:bg-slate-900">
            <div className="relative -top-40 overflow-hidden rounded-xl bg-[#192132] px-6 py-10 shadow lg:px-8 dark:bg-slate-900 dark:shadow-gray-800">
              <div className="grid grid-cols-1 items-center gap-[30px] md:grid-cols-2">
                <div className="z-1 text-center md:text-start">
                  <h3 className="text-[26px] font-semibold text-slate-900 dark:text-white">
                    Subscribe to Newsletter!
                  </h3>
                  <p className="mx-auto max-w-xl text-slate-400">
                    Subscribe to get latest updates and information.
                  </p>
                </div>

                <div className="subcribe-form z-1">
                  <form className="relative max-w-lg md:ms-auto">
                    <input
                      type="email"
                      id="subcribe"
                      name="email"
                      className="h-[50px] w-full rounded-full bg-[#192132] pb-4 pe-40 ps-6 pt-4 text-slate-900 shadow outline-none dark:bg-slate-900 dark:text-white dark:shadow-gray-800"
                      placeholder="Enter your email :"
                    />
                    <button
                      type="submit"
                      className="btn absolute end-[3px] top-[2px] h-[46px] rounded-full border-violet-600 bg-violet-600 px-5 text-white hover:border-violet-700 hover:bg-violet-700"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>

              <div className="absolute -start-5 -top-5">
                <div className="uil uil-envelope -rotate-45 text-7xl text-slate-900/5 lg:text-[150px] dark:text-white/5"></div>
              </div>

              <div className="absolute -bottom-5 -end-5">
                <div className="uil uil-pen text-7xl text-slate-900/5 lg:text-[150px] dark:text-white/5"></div>
              </div>
            </div>

            <div className="-mt-24 grid grid-cols-1 gap-[30px] md:grid-cols-12">
              <div className="md:col-span-12 lg:col-span-4">
                <a href="#" className="text-[22px] focus:outline-none">
                  <img src="assets/images/logo-white.png" alt="" />
                </a>
                <p className="mt-6 text-gray-300">
                  Buy, sell and discover exclusive digital assets by the top
                  artists of NFTs world.
                </p>
              </div>

              <div className="md:col-span-4 lg:col-span-2">
                <h5 className="text-lg font-semibold tracking-[1px] text-gray-100">
                  Giglink
                </h5>
                <ul className="footer-list mt-6 list-none">
                  <li>
                    <a
                      href="explore-one.html"
                      className="text-[16px] text-gray-300 duration-500 ease-in-out hover:text-gray-400"
                    >
                      <i className="uil uil-angle-right-b me-1"></i> Explore
                      Item
                    </a>
                  </li>
                  <li className="mt-[10px]">
                    <a
                      href="auction.html"
                      className="text-[16px] text-gray-300 duration-500 ease-in-out hover:text-gray-400"
                    >
                      <i className="uil uil-angle-right-b me-1"></i> Live
                      Auction
                    </a>
                  </li>
                  <li className="mt-[10px]">
                    <a
                      href="activity.html"
                      className="text-[16px] text-gray-300 duration-500 ease-in-out hover:text-gray-400"
                    >
                      <i className="uil uil-angle-right-b me-1"></i> Activities
                    </a>
                  </li>
                  <li className="mt-[10px]">
                    <a
                      href="wallet.html"
                      className="text-[16px] text-gray-300 duration-500 ease-in-out hover:text-gray-400"
                    >
                      <i className="uil uil-angle-right-b me-1"></i> Wallets
                    </a>
                  </li>
                  <li className="mt-[10px]">
                    <a
                      href="creators.html"
                      className="text-[16px] text-gray-300 duration-500 ease-in-out hover:text-gray-400"
                    >
                      <i className="uil uil-angle-right-b me-1"></i> Creators
                    </a>
                  </li>
                </ul>
              </div>

              <div className="md:col-span-4 lg:col-span-3">
                <h5 className="text-lg font-semibold tracking-[1px] text-gray-100">
                  Usefull Links
                </h5>
                <ul className="footer-list mt-6 list-none">
                  <li>
                    <a
                      href="aboutus.html"
                      className="text-[16px] text-gray-300 duration-500 ease-in-out hover:text-gray-400"
                    >
                      <i className="uil uil-angle-right-b me-1"></i> About Us
                    </a>
                  </li>
                  <li className="mt-[10px]">
                    <a
                      href="blogs.html"
                      className="text-[16px] text-gray-300 duration-500 ease-in-out hover:text-gray-400"
                    >
                      <i className="uil uil-angle-right-b me-1"></i> Blog &amp;
                      News
                    </a>
                  </li>
                  <li className="mt-[10px]">
                    <a
                      href="terms.html"
                      className="text-[16px] text-gray-300 duration-500 ease-in-out hover:text-gray-400"
                    >
                      <i className="uil uil-angle-right-b me-1"></i> Terms &amp;
                      Condition
                    </a>
                  </li>
                  <li className="mt-[10px]">
                    <a
                      href="privacy.html"
                      className="text-[16px] text-gray-300 duration-500 ease-in-out hover:text-gray-400"
                    >
                      <i className="uil uil-angle-right-b me-1"></i> Privacy
                      policy
                    </a>
                  </li>
                  <li className="mt-[10px]">
                    <a
                      href="login.html"
                      className="text-[16px] text-gray-300 duration-500 ease-in-out hover:text-gray-400"
                    >
                      <i className="uil uil-angle-right-b me-1"></i> Login
                    </a>
                  </li>
                  <li className="mt-[10px]">
                    <a
                      href="contact.html"
                      className="text-[16px] text-gray-300 duration-500 ease-in-out hover:text-gray-400"
                    >
                      <i className="uil uil-angle-right-b me-1"></i> Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              <div className="md:col-span-4 lg:col-span-3">
                <h5 className="text-lg font-semibold tracking-[1px] text-gray-100">
                  Download the Giglink app
                </h5>

                <ul className="mt-6 list-none">
                  <li className="inline">
                    <img
                      src="assets/images/app.png"
                      className="inline-block h-9"
                      alt=""
                    />
                  </li>
                  <li className="inline">
                    <img
                      src="assets/images/playstore.png"
                      className="inline-block h-9"
                      alt=""
                    />
                  </li>
                </ul>

                <div className="mt-6">
                  <h5 className="text-lg font-semibold tracking-[1px] text-gray-100">
                    Contact Details
                  </h5>

                  <div className="mt-6 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-mail me-3 mt-1 h-5 w-5 text-violet-600"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                    <div className="">
                      <a
                        href="mailto:contact@example.com"
                        className="text-[16px] text-gray-300 duration-500 ease-in-out hover:text-gray-400"
                      >
                        contact@example.com
                      </a>
                    </div>
                  </div>

                  <div className="mt-6 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-phone me-3 mt-1 h-5 w-5 text-violet-600"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    <div className="">
                      <a
                        href="tel:+152534-468-854"
                        className="text-[16px] text-gray-300 duration-500 ease-in-out hover:text-gray-400"
                      >
                        +152 534-468-854
                      </a>
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
