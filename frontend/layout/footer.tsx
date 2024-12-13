import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <div className={`mt-[200px]`}>
      <div className="grid grid-cols-1">
        <div className="relative">
          <div className="relative w-full bg-[#192132] dark:bg-slate-900">
            <div className="relative -top-40 overflow-hidden bg-[#192132] px-6 py-10 shadow lg:px-8 dark:bg-slate-900 dark:shadow-gray-800">
              <div className="container grid grid-cols-1 items-center gap-[30px] md:grid-cols-2">
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

            <div className="container -mt-24 grid grid-cols-1 gap-[30px] pb-5 md:grid-cols-12">
              <div className="md:col-span-12 lg:col-span-4">
                <a href="#" className="text-[22px] focus:outline-none">
                  <img src="/assets/images/logo-white.png" alt="" />
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
                  {[
                    { href: "explore-one.html", text: "Explore Item" },
                    { href: "auction.html", text: "Live Auction" },
                    { href: "activity.html", text: "Activities" },
                    { href: "wallet.html", text: "Wallets" },
                    { href: "creators.html", text: "Creators" },
                  ].map((link, index) => (
                    <li key={index} className={index > 0 ? "mt-[10px]" : ""}>
                      <a
                        href={link.href}
                        className="text-[16px] text-gray-300 duration-500 ease-in-out hover:text-gray-400"
                      >
                        <i className="uil uil-angle-right-b me-1"></i>{" "}
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-4 lg:col-span-3">
                <h5 className="text-lg font-semibold tracking-[1px] text-gray-100">
                  Usefull Links
                </h5>
                <ul className="footer-list mt-6 list-none">
                  {[
                    { href: "aboutus.html", text: "About Us" },
                    { href: "blogs.html", text: "Blog & News" },
                    { href: "terms.html", text: "Terms & Condition" },
                    { href: "privacy.html", text: "Privacy policy" },
                    { href: "login.html", text: "Login" },
                    { href: "contact.html", text: "Contact Us" },
                  ].map((link, index) => (
                    <li key={index} className={index > 0 ? "mt-[10px]" : ""}>
                      <a
                        href={link.href}
                        className="text-[16px] text-gray-300 duration-500 ease-in-out hover:text-gray-400"
                      >
                        <i className="uil uil-angle-right-b me-1"></i>{" "}
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-4 lg:col-span-3">
                <h5 className="text-lg font-semibold tracking-[1px] text-gray-100">
                  Download the Giglink app
                </h5>

                <ul className="mt-6 list-none">
                  <li className="inline">
                    <img
                      src="/assets/images/app.png"
                      className="inline-block h-9"
                      alt=""
                    />
                  </li>
                  <li className="inline">
                    <img
                      src="/assets/images/playstore.png"
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
                    <Mail className="me-3 mt-1 h-5 w-5 text-violet-600" />
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
                    <Phone className="me-3 mt-1 h-5 w-5 text-violet-600" />
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
