import React from 'react';

const MyComponent = () => {
    return (
        <div>

            <span
                className="fixed blur-[200px] w-[600px] h-[600px] rounded-full top-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 -translate-y-1/2 bg-gradient-to-tl from-red-600/20 to-violet-600/20 dark:from-red-600/40 dark:to-violet-600/40"></span>


            <section className="relative md:pt-48 pt-36 overflow-hidden">
                <div className="container">
                    <div className="grid grid-cols-1 justify-center text-center mt-10">
                        <div className="relative">
                            <div className="relative mb-5 text-gray-600">
                                <h1 className="font-bold lg:leading-snug leading-snug text-4xl lg:text-6xl">Tell the
                                    World <br/> About Your Collection <span
                                        className="bg-gradient-to-l from-red-600 to-violet-600 text-transparent bg-clip-text">Idea for NFTs!</span>
                                </h1>

                                <div
                                    className="overflow-hidden after:content-[''] after:absolute after:h-10 after:w-10 after:bg-violet-600/10 dark:after:bg-violet-600/30 after:-top-[50px] after:start-[30%] after:-z-1 after:rounded-lg after:animate-[spin_10s_linear_infinite]"></div>

                                <div
                                    className="overflow-hidden after:content-[''] after:absolute after:h-10 after:w-10 after:bg-violet-600/20 dark:after:bg-violet-600/40 after:bottom-[0] after:end-[15%] after:-z-1 after:rounded-full after:animate-ping"></div>
                            </div>
                            <p className="text-slate-800 dark:text-gray-600 text-lg max-w-xl mx-auto">We are a huge
                                marketplace dedicated to connecting great artists of all Giglink with their fans and
                                unique token collectors!</p>

                            <div className="mt-8 flex justify-center">
                                <a href="explore-one.html"
                                   className="btn p-3 bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white rounded-full">Explore
                                    now</a>
                            </div>
                        </div>
                    </div>

                    <div className="relative animate-[spin_30s_linear_infinite] -z-1">
                        <span
                            className="after:absolute after:start-0 after:bottom-1/2 after:translate-y-1/2 after:h-2 after:w-8 after:rounded-md after:bg-violet-600/20 relative after:z-10"></span>
                        <span
                            className="after:absolute after:start-0 after:bottom-1/2 after:translate-y-1/2 after:rotate-90 after:h-2 after:w-8 after:rounded-md after:bg-violet-600/20 relative after:z-10"></span>
                    </div>
                </div>
            </section>
            <div className={`flex justify-center items-center h-screen flex-wrap gap-5`}>

            <div
                className="group relative w-fit overflow-hidden p-2 rounded-lg bg-white  border border-gray-100  hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
                <div className="relative overflow-hidden">
                    <div className="relative overflow-hidden rounded-lg p-2">
                        <img src="https://shreethemes.in/giglink/landing/assets/images/items/2.jpg"
                             className="rounded-lg h-[250px] w-[250px] shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                             alt=""/>
                    </div>

                    <div
                        className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                        <a href="item-detail.html"
                           className="btn btn-sm rounded-full py-2 px-5 text-center bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i
                            className="mdi mdi-lightning-bolt"></i> Buy Now</a>
                    </div>

                    <div className="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <a href="javascript:void(0)"
                           className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i
                            className="mdi mdi-plus"></i></a>
                    </div>
                </div>

                <div className="mt-3">
                    <div className="my-3">
                        <a href="item-detail.html" className="font-semibold hover:text-violet-600">Genuine Undead
                            #3902</a>
                    </div>

                    <div
                        className="flex justify-between p-2 bg-gray-50  rounded-lg shadow dark:shadow-gray-700">
                        <div>
                            <span className="text-[16px] font-medium text-slate-400 block">Price</span>
                            <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.5 ETH</span>
                        </div>

                        <div>
                            <span className="text-[16px] font-medium text-slate-400 block">Highest Bid</span>
                            <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.55 ETH</span>
                        </div>
                    </div>
                </div>
            </div><div
                className="group relative w-fit overflow-hidden p-2 rounded-lg bg-white  border border-gray-100  hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
                <div className="relative overflow-hidden">
                    <div className="relative overflow-hidden rounded-lg p-2">
                        <img src="https://shreethemes.in/giglink/landing/assets/images/items/3.jpg"
                             className="rounded-lg h-[250px] w-[250px] shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                             alt=""/>
                    </div>

                    <div
                        className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                        <a href="item-detail.html"
                           className="btn btn-sm rounded-full py-2 px-5 text-center bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i
                            className="mdi mdi-lightning-bolt"></i> Buy Now</a>
                    </div>

                    <div className="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <a href="javascript:void(0)"
                           className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i
                            className="mdi mdi-plus"></i></a>
                    </div>
                </div>

                <div className="mt-3">
                    <div className="my-3">
                        <a href="item-detail.html" className="font-semibold hover:text-violet-600">Genuine Undead
                            #3902</a>
                    </div>

                    <div
                        className="flex justify-between p-2 bg-gray-50  rounded-lg shadow dark:shadow-gray-700">
                        <div>
                            <span className="text-[16px] font-medium text-slate-400 block">Price</span>
                            <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.5 ETH</span>
                        </div>

                        <div>
                            <span className="text-[16px] font-medium text-slate-400 block">Highest Bid</span>
                            <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.55 ETH</span>
                        </div>
                    </div>
                </div>
            </div><div
                className="group relative w-fit overflow-hidden p-2 rounded-lg bg-white  border border-gray-100  hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
                <div className="relative overflow-hidden">
                    <div className="relative overflow-hidden rounded-lg p-2">
                        <img src="https://shreethemes.in/giglink/landing/assets/images/items/2.gif"
                             className="rounded-lg h-[250px] w-[250px] shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                             alt=""/>
                    </div>

                    <div
                        className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                        <a href="item-detail.html"
                           className="btn btn-sm rounded-full py-2 px-5 text-center bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i
                            className="mdi mdi-lightning-bolt"></i> Buy Now</a>
                    </div>

                    <div className="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <a href="javascript:void(0)"
                           className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i
                            className="mdi mdi-plus"></i></a>
                    </div>
                </div>

                <div className="mt-3">
                    <div className="my-3">
                        <a href="item-detail.html" className="font-semibold hover:text-violet-600">Genuine Undead
                            #3902</a>
                    </div>

                    <div
                        className="flex justify-between p-2 bg-gray-50  rounded-lg shadow dark:shadow-gray-700">
                        <div>
                            <span className="text-[16px] font-medium text-slate-400 block">Price</span>
                            <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.5 ETH</span>
                        </div>

                        <div>
                            <span className="text-[16px] font-medium text-slate-400 block">Highest Bid</span>
                            <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.55 ETH</span>
                        </div>
                    </div>
                </div>
            </div><div
                className="group relative w-fit overflow-hidden p-2 rounded-lg bg-white  border border-gray-100  hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
                <div className="relative overflow-hidden">
                    <div className="relative overflow-hidden rounded-lg p-2">
                        <img src="https://shreethemes.in/giglink/landing/assets/images/items/3.gif"
                             className="rounded-lg h-[250px] w-[250px] shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                             alt=""/>
                    </div>

                    <div
                        className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                        <a href="item-detail.html"
                           className="btn btn-sm rounded-full py-2 px-5 text-center bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i
                            className="mdi mdi-lightning-bolt"></i> Buy Now</a>
                    </div>

                    <div className="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <a href="javascript:void(0)"
                           className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i
                            className="mdi mdi-plus"></i></a>
                    </div>
                </div>

                <div className="mt-3">
                    <div className="my-3">
                        <a href="item-detail.html" className="font-semibold hover:text-violet-600">Genuine Undead
                            #3902</a>
                    </div>

                    <div
                        className="flex justify-between p-2 bg-gray-50  rounded-lg shadow dark:shadow-gray-700">
                        <div>
                            <span className="text-[16px] font-medium text-slate-400 block">Price</span>
                            <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.5 ETH</span>
                        </div>

                        <div>
                            <span className="text-[16px] font-medium text-slate-400 block">Highest Bid</span>
                            <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.55 ETH</span>
                        </div>
                    </div>
                </div>
            </div><div
                className="group relative w-fit overflow-hidden p-2 rounded-lg bg-white  border border-gray-100  hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
                <div className="relative overflow-hidden">
                    <div className="relative overflow-hidden rounded-lg p-2">
                        <img src="https://shreethemes.in/giglink/landing/assets/images/items/6.jpg"
                             className="rounded-lg h-[250px] w-[250px] shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                             alt=""/>
                    </div>

                    <div
                        className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                        <a href="item-detail.html"
                           className="btn btn-sm rounded-full py-2 px-5 text-center bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i
                            className="mdi mdi-lightning-bolt"></i> Buy Now</a>
                    </div>

                    <div className="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <a href="javascript:void(0)"
                           className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i
                            className="mdi mdi-plus"></i></a>
                    </div>
                </div>

                <div className="mt-3">
                    <div className="my-3">
                        <a href="item-detail.html" className="font-semibold hover:text-violet-600">Genuine Undead
                            #3902</a>
                    </div>

                    <div
                        className="flex justify-between p-2 bg-gray-50  rounded-lg shadow dark:shadow-gray-700">
                        <div>
                            <span className="text-[16px] font-medium text-slate-400 block">Price</span>
                            <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.5 ETH</span>
                        </div>

                        <div>
                            <span className="text-[16px] font-medium text-slate-400 block">Highest Bid</span>
                            <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.55 ETH</span>
                        </div>
                    </div>
                </div>
            </div><div
                className="group relative w-fit overflow-hidden p-2 rounded-lg bg-white  border border-gray-100  hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
                <div className="relative overflow-hidden">
                    <div className="relative overflow-hidden rounded-lg p-2">
                        <img src="https://shreethemes.in/giglink/landing/assets/images/items/2.jpg"
                             className="rounded-lg h-[250px] w-[250px] shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                             alt=""/>
                    </div>

                    <div
                        className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                        <a href="item-detail.html"
                           className="btn btn-sm rounded-full py-2 px-5 text-center bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i
                            className="mdi mdi-lightning-bolt"></i> Buy Now</a>
                    </div>

                    <div className="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <a href="javascript:void(0)"
                           className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i
                            className="mdi mdi-plus"></i></a>
                    </div>
                </div>

                <div className="mt-3">
                    <div className="my-3">
                        <a href="item-detail.html" className="font-semibold hover:text-violet-600">Genuine Undead
                            #3902</a>
                    </div>

                    <div
                        className="flex justify-between p-2 bg-gray-50  rounded-lg shadow dark:shadow-gray-700">
                        <div>
                            <span className="text-[16px] font-medium text-slate-400 block">Price</span>
                            <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.5 ETH</span>
                        </div>

                        <div>
                            <span className="text-[16px] font-medium text-slate-400 block">Highest Bid</span>
                            <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.55 ETH</span>
                        </div>
                    </div>
                </div>
            </div><div
                className="group relative w-fit overflow-hidden p-2 rounded-lg bg-white  border border-gray-100  hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
                <div className="relative overflow-hidden">
                    <div className="relative overflow-hidden rounded-lg p-2">
                        <img src="https://shreethemes.in/giglink/landing/assets/images/items/2.jpg"
                             className="rounded-lg h-[250px] w-[250px] shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                             alt=""/>
                    </div>

                    <div
                        className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                        <a href="item-detail.html"
                           className="btn btn-sm rounded-full py-2 px-5 text-center bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i
                            className="mdi mdi-lightning-bolt"></i> Buy Now</a>
                    </div>

                    <div className="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <a href="javascript:void(0)"
                           className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i
                            className="mdi mdi-plus"></i></a>
                    </div>
                </div>

                <div className="mt-3">
                    <div className="my-3">
                        <a href="item-detail.html" className="font-semibold hover:text-violet-600">Genuine Undead
                            #3902</a>
                    </div>

                    <div
                        className="flex justify-between p-2 bg-gray-50  rounded-lg shadow dark:shadow-gray-700">
                        <div>
                            <span className="text-[16px] font-medium text-slate-400 block">Price</span>
                            <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.5 ETH</span>
                        </div>

                        <div>
                            <span className="text-[16px] font-medium text-slate-400 block">Highest Bid</span>
                            <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.55 ETH</span>
                        </div>
                    </div>
                </div>
            </div><div
                className="group relative w-fit overflow-hidden p-2 rounded-lg bg-white  border border-gray-100  hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
                <div className="relative overflow-hidden">
                    <div className="relative overflow-hidden rounded-lg p-2">
                        <img src="https://shreethemes.in/giglink/landing/assets/images/items/2.jpg"
                             className="rounded-lg h-[250px] w-[250px] shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                             alt=""/>
                    </div>

                    <div
                        className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                        <a href="item-detail.html"
                           className="btn btn-sm rounded-full py-2 px-5 text-center bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i
                            className="mdi mdi-lightning-bolt"></i> Buy Now</a>
                    </div>

                    <div className="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <a href="javascript:void(0)"
                           className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i
                            className="mdi mdi-plus"></i></a>
                    </div>
                </div>

                <div className="mt-3">
                    <div className="my-3">
                        <a href="item-detail.html" className="font-semibold hover:text-violet-600">Genuine Undead
                            #3902</a>
                    </div>

                    <div
                        className="flex justify-between p-2 bg-gray-50  rounded-lg shadow dark:shadow-gray-700">
                        <div>
                            <span className="text-[16px] font-medium text-slate-400 block">Price</span>
                            <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.5 ETH</span>
                        </div>

                        <div>
                            <span className="text-[16px] font-medium text-slate-400 block">Highest Bid</span>
                            <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.55 ETH</span>
                        </div>
                    </div>
                </div>
            </div><div
                className="group relative w-fit overflow-hidden p-2 rounded-lg bg-white  border border-gray-100  hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
                <div className="relative overflow-hidden">
                    <div className="relative overflow-hidden rounded-lg p-2">
                        <img src="https://shreethemes.in/giglink/landing/assets/images/items/2.jpg"
                             className="rounded-lg h-[250px] w-[250px] shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                             alt=""/>
                    </div>

                    <div
                        className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                        <a href="item-detail.html"
                           className="btn btn-sm rounded-full py-2 px-5 text-center bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i
                            className="mdi mdi-lightning-bolt"></i> Buy Now</a>
                    </div>

                    <div className="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <a href="javascript:void(0)"
                           className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i
                            className="mdi mdi-plus"></i></a>
                    </div>
                </div>

                <div className="mt-3">
                    <div className="my-3">
                        <a href="item-detail.html" className="font-semibold hover:text-violet-600">Genuine Undead
                            #3902</a>
                    </div>

                    <div
                        className="flex justify-between p-2 bg-gray-50  rounded-lg shadow dark:shadow-gray-700">
                        <div>
                            <span className="text-[16px] font-medium text-slate-400 block">Price</span>
                            <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.5 ETH</span>
                        </div>

                        <div>
                            <span className="text-[16px] font-medium text-slate-400 block">Highest Bid</span>
                            <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.55 ETH</span>
                        </div>
                    </div>
                </div>
            </div><div
                className="group relative w-fit overflow-hidden p-2 rounded-lg bg-white  border border-gray-100  hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
                <div className="relative overflow-hidden">
                    <div className="relative overflow-hidden rounded-lg p-2">
                        <img src="https://shreethemes.in/giglink/landing/assets/images/items/2.jpg"
                             className="rounded-lg h-[250px] w-[250px] shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                             alt=""/>
                    </div>

                    <div
                        className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                        <a href="item-detail.html"
                           className="btn btn-sm rounded-full py-2 px-5 text-center bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i
                            className="mdi mdi-lightning-bolt"></i> Buy Now</a>
                    </div>

                    <div className="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <a href="javascript:void(0)"
                           className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i
                            className="mdi mdi-plus"></i></a>
                    </div>
                </div>

                <div className="mt-3">
                    <div className="my-3">
                        <a href="item-detail.html" className="font-semibold hover:text-violet-600">Genuine Undead
                            #3902</a>
                    </div>

                    <div
                        className="flex justify-between p-2 bg-gray-50  rounded-lg shadow dark:shadow-gray-700">
                        <div>
                            <span className="text-[16px] font-medium text-slate-400 block">Price</span>
                            <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.5 ETH</span>
                        </div>

                        <div>
                            <span className="text-[16px] font-medium text-slate-400 block">Highest Bid</span>
                            <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.55 ETH</span>
                        </div>
                    </div>
                </div>
            </div><div
                className="group relative w-fit overflow-hidden p-2 rounded-lg bg-white  border border-gray-100  hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
                <div className="relative overflow-hidden">
                    <div className="relative overflow-hidden rounded-lg p-2">
                        <img src="https://shreethemes.in/giglink/landing/assets/images/items/2.jpg"
                             className="rounded-lg h-[250px] w-[250px] shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                             alt=""/>
                    </div>

                    <div
                        className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                        <a href="item-detail.html"
                           className="btn btn-sm rounded-full py-2 px-5 text-center bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i
                            className="mdi mdi-lightning-bolt"></i> Buy Now</a>
                    </div>

                    <div className="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <a href="javascript:void(0)"
                           className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i
                            className="mdi mdi-plus"></i></a>
                    </div>
                </div>

                <div className="mt-3">
                    <div className="my-3">
                        <a href="item-detail.html" className="font-semibold hover:text-violet-600">Genuine Undead
                            #3902</a>
                    </div>

                    <div
                        className="flex justify-between p-2 bg-gray-50  rounded-lg shadow dark:shadow-gray-700">
                        <div>
                            <span className="text-[16px] font-medium text-slate-400 block">Price</span>
                            <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.5 ETH</span>
                        </div>

                        <div>
                            <span className="text-[16px] font-medium text-slate-400 block">Highest Bid</span>
                            <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.55 ETH</span>
                        </div>
                    </div>
                </div>
            </div><div
                className="group relative w-fit overflow-hidden p-2 rounded-lg bg-white  border border-gray-100  hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700 transition-all duration-500 hover:-mt-2 h-fit">
                <div className="relative overflow-hidden">
                    <div className="relative overflow-hidden rounded-lg p-2">
                        <img src="https://shreethemes.in/giglink/landing/assets/images/items/2.jpg"
                             className="rounded-lg h-[250px] w-[250px] shadow-md dark:shadow-gray-700 group-hover:scale-110 transition-all duration-500"
                             alt=""/>
                    </div>

                    <div
                        className="absolute -bottom-20 group-hover:bottom-1/2 group-hover:translate-y-1/2 start-0 end-0 mx-auto text-center transition-all duration-500">
                        <a href="item-detail.html"
                           className="btn btn-sm rounded-full py-2 px-5 text-center bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i
                            className="mdi mdi-lightning-bolt"></i> Buy Now</a>
                    </div>

                    <div className="absolute top-2 end-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                        <a href="javascript:void(0)"
                           className="btn btn-icon btn-sm rounded-full bg-violet-600 hover:bg-violet-700 border-violet-600 hover:border-violet-700 text-white"><i
                            className="mdi mdi-plus"></i></a>
                    </div>
                </div>

                <div className="mt-3">
                    <div className="my-3">
                        <a href="item-detail.html" className="font-semibold hover:text-violet-600">Genuine Undead
                            #3902</a>
                    </div>

                    <div
                        className="flex justify-between p-2 bg-gray-50  rounded-lg shadow dark:shadow-gray-700">
                        <div>
                            <span className="text-[16px] font-medium text-slate-400 block">Price</span>
                            <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.5 ETH</span>
                        </div>

                        <div>
                            <span className="text-[16px] font-medium text-slate-400 block">Highest Bid</span>
                            <span className="text-[16px] font-semibold block"><i className="mdi mdi-ethereum"></i> 3.55 ETH</span>
                        </div>
                    </div>
                </div>
            </div>

            </div>


        </div>
    );
};

export default MyComponent;
