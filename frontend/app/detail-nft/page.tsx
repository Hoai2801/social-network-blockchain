"use client";

import { CheckCircle2, Heart } from "lucide-react";

const ShowNFT = () => {
  // const showModal = 'scale-100' // Mock value to display modal
  // const connectedAccount = '0x1234567890abcdef1234567890abcdef12345678' // Mock connected account
  // const nft = {
  //     metadataURI: 'https://via.placeholder.com/150',
  //     title: 'Mock NFT',
  //     description: 'This is a mock NFT description.',
  //     owner: '0xabcdefabcdefabcdefabcdefabcdefabcdef',
  //     cost: '1.5',
  // }
  //
  // const truncate = (str, startChars, endChars, maxLength) => {
  //     if (!str) return ''
  //     if (str.length <= maxLength) return str
  //     return (
  //         str.substring(0, startChars) +
  //         '...' +
  //         str.substring(str.length - endChars, str.length)
  //     )
  // }
  //
  // const onChangePrice = () => {
  //     console.log('Change Price clicked')
  //     alert('Price change is not implemented in this mock setup.')
  // }
  //
  // const handleNFTPurchase = async () => {
  //     console.log('Purchase Now clicked')
  //     alert('Mock purchase initiated.')
  // }

  return (
    <div className={`mt-5`}>
      <picture className="pointer-events-none absolute inset-0 -z-10 dark:hidden">
        <img
          alt="gradient"
          loading="lazy"
          width="1920"
          height="789"
          decoding="async"
          data-nimg="1"
          className="h-full w-full bg-transparent object-cover"
          src={`https://images.unsplash.com/photo-1719937051176-9b98352a6cf4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8`}
          // style="color: transparent;"
          // srcSet="/_next/image?url=%2Fimg%2Fgradient_light.jpg&amp;w=1920&amp;q=75 1x, /_next/image?url=%2Fimg%2Fgradient_light.jpg&amp;w=3840&amp;q=75 2x"
          // src="/_next/image?url=%2Fimg%2Fgradient_light.jpg&amp;w=3840&amp;q=75"
        />
      </picture>
      <div className="container">
        <div className="md:flex md:flex-wrap">
          <figure className="mb-8 md:w-2/5 md:flex-shrink-0 md:flex-grow-0 md:basis-auto lg:w-1/2">
            <img
              alt="item"
              data-bs-toggle="modal"
              data-bs-target="#imageModal"
              loading="lazy"
              width="540"
              height="670"
              decoding="async"
              data-nimg="1"
              className="rounded-2.5xl w-[100%] cursor-pointer"
              src={`https://images.unsplash.com/photo-1719937051176-9b98352a6cf4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8`}
              // style="color: transparent;"
              // srcSet="/_next/image?url=%2Fimg%2Fproducts%2Fitem_single_large.jpg&amp;w=640&amp;q=75 1x, /_next/image?url=%2Fimg%2Fproducts%2Fitem_single_large.jpg&amp;w=1080&amp;q=75 2x"
              // src="/_next/image?url=%2Fimg%2Fproducts%2Fitem_single_large.jpg&amp;w=1080&amp;q=75"
            />
            {/*<div className="modal fade" id="imageModal" aria-hidden="true">*/}
            {/*    <div className="modal-dialog !my-0 flex h-full items-center justify-center p-4"><img*/}
            {/*        loading="lazy" width="787" height="984" decoding="async" data-nimg="1"*/}
            {/*        // style="color: transparent;"*/}
            {/*        // srcSet="/_next/image?url=%2Fimg%2Fproducts%2Fitem_single_full.jpg&amp;w=828&amp;q=75 1x, /_next/image?url=%2Fimg%2Fproducts%2Fitem_single_full.jpg&amp;w=1920&amp;q=75 2x"*/}
            {/*        // src="/_next/image?url=%2Fimg%2Fproducts%2Fitem_single_full.jpg&amp;w=1920&amp;q=75"*/}
            {/*    />*/}
            {/*    </div>*/}
            {/*    <button type="button" className="btn-close absolute top-6 right-6" data-bs-dismiss="modal"*/}
            {/*            aria-label="Close">*/}
            {/*        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"*/}
            {/*             className="h-6 w-6 fill-white">*/}
            {/*            <path fill="none" d="M0 0h24v24H0z"></path>*/}
            {/*            <path*/}
            {/*                d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"></path>*/}
            {/*        </svg>*/}
            {/*    </button>*/}
            {/*</div>*/}
          </figure>
          <div className="md:w-3/5 md:basis-auto md:pl-8 lg:w-1/2 lg:pl-[3.75rem]">
            <div className="mb-3 flex">
              <div className="flex items-center">
                <a
                  className="text-accent mr-2 text-sm font-bold text-violet-500"
                  href="/collections"
                >
                  CryptoGuysNFT
                </a>
                <CheckCircle2 className="h-5 w-5 text-green-500" />
              </div>
              <div className="ml-auto flex space-x-2">
                <div className="border-jacarta-100 flex items-center space-x-1 rounded-xl border bg-white px-4 py-2">
                  <span
                    className="js-likes relative cursor-pointer before:absolute before:h-4 before:w-4 before:bg-cover before:bg-center before:bg-no-repeat before:opacity-0"
                    data-tippy-content="Favorite"
                  >
                    <Heart className="h-4 w-4" />
                  </span>
                  <span className="dark:text-jacarta-200 text-sm">188</span>
                </div>
                <div className="dropdown border-jacarta-100 hover:bg-jacarta-100 rounded-xl border bg-white">
                  <a
                    href="#"
                    className="dropdown-toggle inline-flex h-10 w-10 items-center justify-center text-sm text-black"
                    role="button"
                    id="collectionActions"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {/* <svg
                      width="16"
                      height="4"
                      viewBox="0 0 16 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="fill-jacarta-500"
                    >
                      <circle cx="2" cy="2" r="2"></circle>
                      <circle cx="8" cy="2" r="2"></circle>
                      <circle cx="14" cy="2" r="2"></circle>
                    </svg> */}
                  </a>
                  <div
                    className="dropdown-menu dropdown-menu-end dark:bg-jacarta-800 z-10 hidden min-w-[200px] whitespace-nowrap rounded-xl bg-white px-2 py-4 text-left shadow-xl"
                    aria-labelledby="collectionActions"
                  >
                    <button className="font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors">
                      New bid
                    </button>
                    <hr className="bg-jacarta-100 dark:bg-jacarta-600 mx-4 my-2 h-px border-0" />
                    <button className="font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors">
                      Refresh Metadata
                    </button>
                    <button className="font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors">
                      Share
                    </button>
                    <button className="font-display hover:bg-jacarta-50 block w-full rounded-xl px-5 py-2 text-left text-sm transition-colors">
                      Report
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <h1 className="font-display text-jacarta-700 mb-4 text-4xl font-semibold">
              Lazyone Panda
            </h1>
            <div className="mb-8 flex items-center space-x-4 whitespace-nowrap">
              <div className="flex items-center">
                {/*<style xmlns="http://www.w3.org/2000/svg" type="text/css">*/}
                {/*    .st0{fill:url(#SVGID_1_);}*/}
                {/*    .st1{fill:url(#SVGID_2_);}*/}
                {/*    .st2{fill:url(#SVGID_3_);}*/}
                {/*</style>*/}
                <linearGradient
                  xmlns="http://www.w3.org/2000/svg"
                  id="SVGID_1_"
                  gradientUnits="userSpaceOnUse"
                  x1="360.8791"
                  y1="351.4553"
                  x2="141.213"
                  y2="-69.2936"
                  gradientTransform="matrix(1 0 0 -1 0 314)"
                >
                  <stop offset="0" />
                  <stop offset="1" />
                </linearGradient>
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  className="st0"
                  d="M64.6,237.9c2.4-2.4,5.7-3.8,9.2-3.8h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5  c-5.8,0-8.7-7-4.6-11.1L64.6,237.9z"
                />
                <linearGradient
                  xmlns="http://www.w3.org/2000/svg"
                  id="SVGID_2_"
                  gradientUnits="userSpaceOnUse"
                  x1="264.8291"
                  y1="401.6014"
                  x2="45.163"
                  y2="-19.1475"
                  gradientTransform="matrix(1 0 0 -1 0 314)"
                >
                  <stop offset="0" />
                  <stop offset="1" />
                </linearGradient>
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  className="st1"
                  d="M64.6,3.8C67.1,1.4,70.4,0,73.8,0h317.4c5.8,0,8.7,7,4.6,11.1l-62.7,62.7c-2.4,2.4-5.7,3.8-9.2,3.8H6.5  c-5.8,0-8.7-7-4.6-11.1L64.6,3.8z"
                />
                <linearGradient
                  xmlns="http://www.w3.org/2000/svg"
                  id="SVGID_3_"
                  gradientUnits="userSpaceOnUse"
                  x1="312.5484"
                  y1="376.688"
                  x2="92.8822"
                  y2="-44.061"
                  gradientTransform="matrix(1 0 0 -1 0 314)"
                >
                  <stop offset="0" />
                  <stop offset="1" />
                </linearGradient>
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  className="st2"
                  d="M333.1,120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8,0-8.7,7-4.6,11.1l62.7,62.7c2.4,2.4,5.7,3.8,9.2,3.8h317.4  c5.8,0,8.7-7,4.6-11.1L333.1,120.1z"
                />

                <span className="text-green text-sm font-medium tracking-tight">
                  10 SOL
                </span>
              </div>
            </div>
            <p className="dark:text-jacarta-300 mb-10">
              Neque aut veniam consectetur magnam libero, natus eius numquam
              reprehenderit hic at, excepturi repudiandae magni optio odio
              doloribus? Facilisi lobortisal morbi fringilla urna amet sed
              ipsum.
            </p>
            <div className="mb-8 flex flex-wrap">
              <div className="mb-4 mr-8 flex">
                <figure className="mr-4 shrink-0">
                  <a className="relative block" href="/user/1">
                    <img
                      alt="avatar 7"
                      loading="lazy"
                      width="60"
                      height="60"
                      decoding="async"
                      data-nimg="1"
                      className="overflow-hidden rounded-full object-cover"
                      src="https://cafefcdn.com/thumb_w/640/203337114487263232/2022/9/12/photo1662974015465-1662974015547433647874.jpg"
                    />
                    {/*<div*/}
                    {/*    className="absolute -right-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green "*/}
                    {/*    data-tippy-content="Verified Collection">*/}
                    {/*    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"*/}
                    {/*         height="24" className="h-[.875rem] w-[.875rem] fill-white">*/}
                    {/*        <path fill="none" d="M0 0h24v24H0z"></path>*/}
                    {/*        <path*/}
                    {/*            d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>*/}
                    {/*    </svg>*/}
                    {/*</div>*/}
                  </a>
                </figure>
                <div className="flex flex-col justify-center">
                  <span className="text-jacarta-400 block text-sm"></span>
                  <a className="text-accent block" href="/user/2">
                    <span className="text-sm font-bold">Gia Hoai</span>
                  </a>
                </div>
              </div>
              {/*<div className="mb-4 flex">*/}
              {/*    <figure className="mr-4 shrink-0"><a className="relative block" href="/user/4"><img*/}
              {/*        alt="avatar 1" loading="lazy" width="48" height="48" decoding="async" data-nimg="1"*/}
              {/*        className="rounded-2lg"*/}
              {/*        // style="color: transparent;"*/}
              {/*        // srcSet="/_next/image?url=%2Fimg%2Favatars%2Favatar_1.jpg&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fimg%2Favatars%2Favatar_1.jpg&amp;w=96&amp;q=75 2x"*/}
              {/*        // src="/_next/image?url=%2Fimg%2Favatars%2Favatar_1.jpg&amp;w=96&amp;q=75"*/}
              {/*    />*/}
              {/*        <div*/}
              {/*            className="absolute -right-3 top-[60%] flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-green "*/}
              {/*            data-tippy-content="Verified Collection">*/}
              {/*            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"*/}
              {/*                 height="24" className="h-[.875rem] w-[.875rem] fill-white">*/}
              {/*                <path fill="none" d="M0 0h24v24H0z"></path>*/}
              {/*                <path*/}
              {/*                    d="M10 15.172l9.192-9.193 1.415 1.414L10 18l-6.364-6.364 1.414-1.414z"></path>*/}
              {/*            </svg>*/}
              {/*        </div>*/}
              {/*    </a></figure>*/}
              {/*    <div className="flex flex-col justify-center"><span*/}
              {/*        className="block text-sm text-jacarta-400 ">Owned by</span><a*/}
              {/*        className="block text-accent" href="/user/6"><span*/}
              {/*        className="text-sm font-bold">@051_Hart</span></a></div>*/}
              {/*</div>*/}
            </div>
            <div className="rounded-2lg border-jacarta-100 border bg-white p-8">
              {/*<div className="mb-8 sm:flex sm:flex-wrap">*/}
              {/*    <div className="sm:w-1/2 sm:pr-4 lg:pr-8">*/}
              {/*        <div className="block overflow-hidden text-ellipsis whitespace-nowrap"><span*/}
              {/*            className="text-sm text-jacarta-400 dark:text-jacarta-300">Highest bid by </span><a*/}
              {/*            className="text-sm font-bold text-accent"*/}
              {/*            href="/user/9">0x695d2ef170ce69e794707eeef9497af2de25df82</a></div>*/}
              {/*        <div className="mt-3 flex">*/}
              {/*            <figure className="mr-4 shrink-0"><a className="relative block"*/}
              {/*                                                 href="/user/8"><img alt="avatar"*/}
              {/*                                                                     loading="lazy"*/}
              {/*                                                                     width="48" height="48"*/}
              {/*                                                                     decoding="async"*/}
              {/*                                                                     data-nimg="1"*/}
              {/*                                                                     className="rounded-2lg"*/}
              {/*                // style="color: transparent;"*/}
              {/*                // srcSet="/_next/image?url=%2Fimg%2Favatars%2Favatar_4.jpg&amp;w=48&amp;q=75 1x, /_next/image?url=%2Fimg%2Favatars%2Favatar_4.jpg&amp;w=96&amp;q=75 2x"*/}
              {/*                // src="/_next/image?url=%2Fimg%2Favatars%2Favatar_4.jpg&amp;w=96&amp;q=75"*/}
              {/*            /></a>*/}
              {/*            </figure>*/}
              {/*            <div>*/}
              {/*                <div className="flex items-center whitespace-nowrap"><span className="-ml-1"*/}
              {/*                                                                           data-tippy-content="ETH"><svg*/}
              {/*                    version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0"*/}
              {/*                    viewBox="0 0 1920 1920" className="h-5 w-5"><path fill="#8A92B2"*/}
              {/*                                                                      d="M959.8 80.7L420.1 976.3 959.8 731z"></path><path*/}
              {/*                    fill="#62688F"*/}
              {/*                    d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"></path><path*/}
              {/*                    fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z"></path><path*/}
              {/*                    fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z"></path><path*/}
              {/*                    fill="#62688F" d="M959.8 1397.6v441.7l540.1-760.6z"></path></svg></span><span*/}
              {/*                    className="text-lg font-medium leading-tight tracking-tight text-green">4.7 ETH</span>*/}
              {/*                </div>*/}
              {/*                <span*/}
              {/*                    className="text-sm text-jacarta-400 dark:text-jacarta-300">~10,864.10</span>*/}
              {/*            </div>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*    <div*/}
              {/*        className="mt-4  sm:mt-0 sm:w-1/2 sm:border-l sm:border-jacarta-100 sm:pl-4 lg:pl-8">*/}
              {/*        <span*/}
              {/*            className="js-countdown-ends-label text-sm text-jacarta-400 dark:text-jacarta-300">Auction ends in</span>*/}
              {/*        <div className="js-countdown-single-timer mt-3 flex space-x-4"*/}
              {/*             data-countdown="2023-09-07T19:40:30" data-expired="This auction has ended">*/}
              {/*            <span className="countdown-days text-jacarta-700 "><span*/}
              {/*                className="js-countdown-days-number text-lg font-medium lg:text-[1.5rem]">60</span><span*/}
              {/*                className="block text-xs font-medium tracking-tight">Days</span></span><span*/}
              {/*            className="countdown-hours text-jacarta-700 "><span*/}
              {/*            className="js-countdown-hours-number text-lg font-medium lg:text-[1.5rem]">11</span><span*/}
              {/*            className="block text-xs font-medium tracking-tight">Hrs</span></span><span*/}
              {/*            className="countdown-minutes text-jacarta-700 "><span*/}
              {/*            className="js-countdown-minutes-number text-lg font-medium lg:text-[1.5rem]">35</span><span*/}
              {/*            className="block text-xs font-medium tracking-tight">Min</span></span><span*/}
              {/*            className="countdown-seconds text-jacarta-700 "><span*/}
              {/*            className="js-countdown-seconds-number text-lg font-medium lg:text-[1.5rem]">15</span><span*/}
              {/*            className="block text-xs font-medium tracking-tight">Sec</span></span></div>*/}
              {/*    </div>*/}
              {/*</div>*/}
              <a
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#placeBidModal"
                className="bg-accent shadow-accent-volume hover:bg-accent-dark inline-block w-full rounded-full bg-blue-600 px-8 py-3 text-center font-semibold text-white transition-all"
              >
                Buy Now 10 SOL
              </a>
            </div>
          </div>
        </div>
        {/*<div className="scrollbar-custom mt-14 overflow-x-auto rounded-lg">*/}
        {/*    <div className="min-w-fit">*/}
        {/*        <ul className="nav nav-tabs flex items-center" role="tablist">*/}
        {/*            <li className="nav-item" role="presentation">*/}
        {/*                <button*/}
        {/*                    className="nav-link active relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"*/}
        {/*                    id="offers-tab" data-bs-toggle="tab" data-bs-target="#offers" type="button"*/}
        {/*                    role="tab" aria-controls="offers" aria-selected="true">*/}
        {/*                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"*/}
        {/*                         className="mr-1 h-5 w-5 fill-current">*/}
        {/*                        <path fill="none" d="M0 0h24v24H0z"></path>*/}
        {/*                        <path*/}
        {/*                            d="M8 4h13v2H8V4zm-5-.5h3v3H3v-3zm0 7h3v3H3v-3zm0 7h3v3H3v-3zM8 11h13v2H8v-2zm0 7h13v2H8v-2z"></path>*/}
        {/*                    </svg>*/}
        {/*                    <span className="font-display text-base font-medium">Offers</span></button>*/}
        {/*            </li>*/}
        {/*            <li className="nav-item" role="presentation">*/}
        {/*                <button*/}
        {/*                    className="nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"*/}
        {/*                    id="properties-tab" data-bs-toggle="tab" data-bs-target="#properties" type="button"*/}
        {/*                    role="tab" aria-controls="properties" aria-selected="false">*/}
        {/*                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"*/}
        {/*                         className="mr-1 h-5 w-5 fill-current">*/}
        {/*                        <path fill="none" d="M0 0h24v24H0z"></path>*/}
        {/*                        <path*/}
        {/*                            d="M6.17 18a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2v-2h4.17zm6-7a3.001 3.001 0 0 1 5.66 0H22v2h-4.17a3.001 3.001 0 0 1-5.66 0H2v-2h10.17zm-6-7a3.001 3.001 0 0 1 5.66 0H22v2H11.83a3.001 3.001 0 0 1-5.66 0H2V4h4.17z"></path>*/}
        {/*                    </svg>*/}
        {/*                    <span className="font-display text-base font-medium">Properties</span></button>*/}
        {/*            </li>*/}
        {/*            <li className="nav-item" role="presentation">*/}
        {/*                <button*/}
        {/*                    className="nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"*/}
        {/*                    id="details-tab" data-bs-toggle="tab" data-bs-target="#details" type="button"*/}
        {/*                    role="tab" aria-controls="details" aria-selected="false">*/}
        {/*                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"*/}
        {/*                         className="mr-1 h-5 w-5 fill-current">*/}
        {/*                        <path fill="none" d="M0 0h24v24H0z"></path>*/}
        {/*                        <path*/}
        {/*                            d="M20 22H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2V4H5v16h14zM7 6h4v4H7V6zm0 6h10v2H7v-2zm0 4h10v2H7v-2zm6-9h4v2h-4V7z"></path>*/}
        {/*                    </svg>*/}
        {/*                    <span className="font-display text-base font-medium">Details</span></button>*/}
        {/*            </li>*/}
        {/*            <li className="nav-item" role="presentation">*/}
        {/*                <button*/}
        {/*                    className="nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"*/}
        {/*                    id="activity-tab" data-bs-toggle="tab" data-bs-target="#activity" type="button"*/}
        {/*                    role="tab" aria-controls="activity" aria-selected="false">*/}
        {/*                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"*/}
        {/*                         className="mr-1 h-5 w-5 fill-current">*/}
        {/*                        <path fill="none" d="M0 0h24v24H0z"></path>*/}
        {/*                        <path*/}
        {/*                            d="M11.95 7.95l-1.414 1.414L8 6.828 8 20H6V6.828L3.465 9.364 2.05 7.95 7 3l4.95 4.95zm10 8.1L17 21l-4.95-4.95 1.414-1.414 2.537 2.536L16 4h2v13.172l2.536-2.536 1.414 1.414z"></path>*/}
        {/*                    </svg>*/}
        {/*                    <span className="font-display text-base font-medium">Activity</span></button>*/}
        {/*            </li>*/}
        {/*            <li className="nav-item" role="presentation">*/}
        {/*                <button*/}
        {/*                    className="nav-link relative flex items-center whitespace-nowrap py-3 px-6 text-jacarta-400 hover:text-jacarta-700 dark:hover:text-white"*/}
        {/*                    id="price-history-tab" data-bs-toggle="tab" data-bs-target="#price-history"*/}
        {/*                    type="button" role="tab" aria-controls="price-history" aria-selected="false">*/}
        {/*                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"*/}
        {/*                         className="mr-1 h-5 w-5 fill-current">*/}
        {/*                        <path fill="none" d="M0 0H24V24H0z"></path>*/}
        {/*                        <path*/}
        {/*                            d="M5 3v16h16v2H3V3h2zm15.293 3.293l1.414 1.414L16 13.414l-3-2.999-4.293 4.292-1.414-1.414L13 7.586l3 2.999 4.293-4.292z"></path>*/}
        {/*                    </svg>*/}
        {/*                    <span className="font-display text-base font-medium">Price History</span></button>*/}
        {/*            </li>*/}
        {/*        </ul>*/}
        {/*        <div className="tab-content">*/}
        {/*            <div className="tab-pane fade show active" id="offers" role="tabpanel"*/}
        {/*                 aria-labelledby="offers-tab">*/}
        {/*                <div role="table"*/}
        {/*                     className="scrollbar-custom grid max-h-72 w-full grid-cols-5 overflow-y-auto rounded-lg rounded-tl-none border border-jacarta-100 bg-white text-sm   ">*/}
        {/*                    <div className="contents" role="row">*/}
        {/*                        <div className="sticky top-0 bg-light-base py-2 px-4 dark:bg-jacarta-600"*/}
        {/*                             role="columnheader"><span*/}
        {/*                            className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">Price</span>*/}
        {/*                        </div>*/}
        {/*                        <div className="sticky top-0 bg-light-base py-2 px-4 dark:bg-jacarta-600"*/}
        {/*                             role="columnheader"><span*/}
        {/*                            className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">USD Price</span>*/}
        {/*                        </div>*/}
        {/*                        <div className="sticky top-0 bg-light-base py-2 px-4 dark:bg-jacarta-600"*/}
        {/*                             role="columnheader"><span*/}
        {/*                            className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">Floor Difference</span>*/}
        {/*                        </div>*/}
        {/*                        <div className="sticky top-0 bg-light-base py-2 px-4 dark:bg-jacarta-600"*/}
        {/*                             role="columnheader"><span*/}
        {/*                            className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">Expiration</span>*/}
        {/*                        </div>*/}
        {/*                        <div className="sticky top-0 bg-light-base py-2 px-4 dark:bg-jacarta-600"*/}
        {/*                             role="columnheader"><span*/}
        {/*                            className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">From</span>*/}
        {/*                        </div>*/}
        {/*                    </div>*/}
        {/*                    <div className="contents" role="row">*/}
        {/*                        <div*/}
        {/*                            className="flex items-center whitespace-nowrap border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell"><span className="-ml-1" data-tippy-content="ETH"><svg*/}
        {/*                            version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0"*/}
        {/*                            viewBox="0 0 1920 1920" className="mr-1 h-4 w-4"><path fill="#8A92B2"*/}
        {/*                                                                                   d="M959.8 80.7L420.1 976.3 959.8 731z"></path><path*/}
        {/*                            fill="#62688F"*/}
        {/*                            d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"></path><path*/}
        {/*                            fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z"></path><path*/}
        {/*                            fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z"></path><path*/}
        {/*                            fill="#62688F"*/}
        {/*                            d="M959.8 1397.6v441.7l540.1-760.6z"></path></svg></span><span*/}
        {/*                            className="text-sm font-medium tracking-tight text-green">30 ETH</span>*/}
        {/*                        </div>*/}
        {/*                        <div*/}
        {/*                            className="flex items-center border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell">$90,136.10*/}
        {/*                        </div>*/}
        {/*                        <div*/}
        {/*                            className="flex items-center border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell">70% below*/}
        {/*                        </div>*/}
        {/*                        <div*/}
        {/*                            className="flex items-center border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell">in 5 months*/}
        {/*                        </div>*/}
        {/*                        <div*/}
        {/*                            className="flex items-center border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell"><a className="text-accent" href="/user/1">ViviGiallo</a></div>*/}
        {/*                    </div>*/}
        {/*                    <div className="contents" role="row">*/}
        {/*                        <div*/}
        {/*                            className="flex items-center whitespace-nowrap border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell"><span className="-ml-1" data-tippy-content="ETH"><svg*/}
        {/*                            version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0"*/}
        {/*                            viewBox="0 0 1920 1920" className="mr-1 h-4 w-4"><path fill="#8A92B2"*/}
        {/*                                                                                   d="M959.8 80.7L420.1 976.3 959.8 731z"></path><path*/}
        {/*                            fill="#62688F"*/}
        {/*                            d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"></path><path*/}
        {/*                            fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z"></path><path*/}
        {/*                            fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z"></path><path*/}
        {/*                            fill="#62688F"*/}
        {/*                            d="M959.8 1397.6v441.7l540.1-760.6z"></path></svg></span><span*/}
        {/*                            className="text-sm font-medium tracking-tight text-green">15.5 ETH</span>*/}
        {/*                        </div>*/}
        {/*                        <div*/}
        {/*                            className="flex items-center border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell">$45,458.10*/}
        {/*                        </div>*/}
        {/*                        <div*/}
        {/*                            className="flex items-center border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell">70% below*/}
        {/*                        </div>*/}
        {/*                        <div*/}
        {/*                            className="flex items-center border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell">in 5 months*/}
        {/*                        </div>*/}
        {/*                        <div*/}
        {/*                            className="flex items-center border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell"><a className="text-accent" href="/user/2">DB96DB</a></div>*/}
        {/*                    </div>*/}
        {/*                    <div className="contents" role="row">*/}
        {/*                        <div*/}
        {/*                            className="flex items-center whitespace-nowrap border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell"><span className="-ml-1" data-tippy-content="ETH"><svg*/}
        {/*                            version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0"*/}
        {/*                            viewBox="0 0 1920 1920" className="mr-1 h-4 w-4"><path fill="#8A92B2"*/}
        {/*                                                                                   d="M959.8 80.7L420.1 976.3 959.8 731z"></path><path*/}
        {/*                            fill="#62688F"*/}
        {/*                            d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"></path><path*/}
        {/*                            fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z"></path><path*/}
        {/*                            fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z"></path><path*/}
        {/*                            fill="#62688F"*/}
        {/*                            d="M959.8 1397.6v441.7l540.1-760.6z"></path></svg></span><span*/}
        {/*                            className="text-sm font-medium tracking-tight text-green">0.9 ETH</span>*/}
        {/*                        </div>*/}
        {/*                        <div*/}
        {/*                            className="flex items-center border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell">$2,347.90*/}
        {/*                        </div>*/}
        {/*                        <div*/}
        {/*                            className="flex items-center border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell">98% below*/}
        {/*                        </div>*/}
        {/*                        <div*/}
        {/*                            className="flex items-center border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell">in 5 months*/}
        {/*                        </div>*/}
        {/*                        <div*/}
        {/*                            className="flex items-center border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell"><a className="text-accent" href="/user/3">myc_nc</a></div>*/}
        {/*                    </div>*/}
        {/*                    <div className="contents" role="row">*/}
        {/*                        <div*/}
        {/*                            className="flex items-center whitespace-nowrap border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell"><span className="-ml-1" data-tippy-content="ETH"><svg*/}
        {/*                            version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0"*/}
        {/*                            viewBox="0 0 1920 1920" className="mr-1 h-4 w-4"><path fill="#8A92B2"*/}
        {/*                                                                                   d="M959.8 80.7L420.1 976.3 959.8 731z"></path><path*/}
        {/*                            fill="#62688F"*/}
        {/*                            d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"></path><path*/}
        {/*                            fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z"></path><path*/}
        {/*                            fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z"></path><path*/}
        {/*                            fill="#62688F"*/}
        {/*                            d="M959.8 1397.6v441.7l540.1-760.6z"></path></svg></span><span*/}
        {/*                            className="text-sm font-medium tracking-tight text-green">1.2 ETH</span>*/}
        {/*                        </div>*/}
        {/*                        <div*/}
        {/*                            className="flex items-center border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell">$4,568.40*/}
        {/*                        </div>*/}
        {/*                        <div*/}
        {/*                            className="flex items-center border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell">100% below*/}
        {/*                        </div>*/}
        {/*                        <div*/}
        {/*                            className="flex items-center border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell">in 6 months*/}
        {/*                        </div>*/}
        {/*                        <div*/}
        {/*                            className="flex items-center border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell"><a className="text-accent" href="/user/4">MetaRDnA</a></div>*/}
        {/*                    </div>*/}
        {/*                    <div className="contents" role="row">*/}
        {/*                        <div*/}
        {/*                            className="flex items-center whitespace-nowrap border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell"><span className="-ml-1" data-tippy-content="ETH"><svg*/}
        {/*                            version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0"*/}
        {/*                            viewBox="0 0 1920 1920" className="mr-1 h-4 w-4"><path fill="#8A92B2"*/}
        {/*                                                                                   d="M959.8 80.7L420.1 976.3 959.8 731z"></path><path*/}
        {/*                            fill="#62688F"*/}
        {/*                            d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"></path><path*/}
        {/*                            fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z"></path><path*/}
        {/*                            fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z"></path><path*/}
        {/*                            fill="#62688F"*/}
        {/*                            d="M959.8 1397.6v441.7l540.1-760.6z"></path></svg></span><span*/}
        {/*                            className="text-sm font-medium tracking-tight text-green">0.5 ETH</span>*/}
        {/*                        </div>*/}
        {/*                        <div*/}
        {/*                            className="flex items-center border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell">$1,699.10*/}
        {/*                        </div>*/}
        {/*                        <div*/}
        {/*                            className="flex items-center border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell">100% below*/}
        {/*                        </div>*/}
        {/*                        <div*/}
        {/*                            className="flex items-center border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell">in 6 months*/}
        {/*                        </div>*/}
        {/*                        <div*/}
        {/*                            className="flex items-center border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell"><a className="text-accent" href="/user/5">Karafuru</a></div>*/}
        {/*                    </div>*/}
        {/*                    <div className="contents" role="row">*/}
        {/*                        <div*/}
        {/*                            className="flex items-center whitespace-nowrap border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell"><span className="-ml-1" data-tippy-content="ETH"><svg*/}
        {/*                            version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0"*/}
        {/*                            viewBox="0 0 1920 1920" className="mr-1 h-4 w-4"><path fill="#8A92B2"*/}
        {/*                                                                                   d="M959.8 80.7L420.1 976.3 959.8 731z"></path><path*/}
        {/*                            fill="#62688F"*/}
        {/*                            d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"></path><path*/}
        {/*                            fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z"></path><path*/}
        {/*                            fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z"></path><path*/}
        {/*                            fill="#62688F"*/}
        {/*                            d="M959.8 1397.6v441.7l540.1-760.6z"></path></svg></span><span*/}
        {/*                            className="text-sm font-medium tracking-tight text-green">4.7 ETH</span>*/}
        {/*                        </div>*/}
        {/*                        <div*/}
        {/*                            className="flex items-center border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell">$13,966.64*/}
        {/*                        </div>*/}
        {/*                        <div*/}
        {/*                            className="flex items-center border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell">40% above*/}
        {/*                        </div>*/}
        {/*                        <div*/}
        {/*                            className="flex items-center border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell">in 2 months*/}
        {/*                        </div>*/}
        {/*                        <div*/}
        {/*                            className="flex items-center border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell"><a className="text-accent" href="/user/6">seekortelur</a></div>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*            <div className="tab-pane fade" id="properties" role="tabpanel"*/}
        {/*                 aria-labelledby="properties-tab">*/}
        {/*                <div*/}
        {/*                    className="rounded-t-2lg rounded-b-2lg rounded-tl-none border border-jacarta-100 bg-white p-6   md:p-10">*/}
        {/*                    <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4"><a*/}
        {/*                        className="flex flex-col space-y-2 rounded-2lg border border-jacarta-100 bg-light-base p-5 text-center transition-shadow hover:shadow-lg  dark:bg-jacarta-800"*/}
        {/*                        href="/collections"><span*/}
        {/*                        className="text-sm uppercase text-accent">ACCESSORY</span><span*/}
        {/*                        className="text-base text-jacarta-700 ">Metal headband</span><span*/}
        {/*                        className="text-sm text-jacarta-400">3% have this trait</span></a><a*/}
        {/*                        className="flex flex-col space-y-2 rounded-2lg border border-jacarta-100 bg-light-base p-5 text-center transition-shadow hover:shadow-lg  dark:bg-jacarta-800"*/}
        {/*                        href="/collections"><span*/}
        {/*                        className="text-sm uppercase text-accent">SKIN</span><span*/}
        {/*                        className="text-base text-jacarta-700 ">Dark Brown</span><span*/}
        {/*                        className="text-sm text-jacarta-400">8% have this trait</span></a><a*/}
        {/*                        className="flex flex-col space-y-2 rounded-2lg border border-jacarta-100 bg-light-base p-5 text-center transition-shadow hover:shadow-lg  dark:bg-jacarta-800"*/}
        {/*                        href="/collections"><span*/}
        {/*                        className="text-sm uppercase text-accent">EYES</span><span*/}
        {/*                        className="text-base text-jacarta-700 ">Cyborg</span><span*/}
        {/*                        className="text-sm text-jacarta-400">2% have this trait</span></a><a*/}
        {/*                        className="flex flex-col space-y-2 rounded-2lg border border-jacarta-100 bg-light-base p-5 text-center transition-shadow hover:shadow-lg  dark:bg-jacarta-800"*/}
        {/*                        href="/collections"><span className="text-sm uppercase text-accent">CLOTH</span><span*/}
        {/*                        className="text-base text-jacarta-700 ">Adidas</span><span*/}
        {/*                        className="text-sm text-jacarta-400">7% have this trait</span></a><a*/}
        {/*                        className="flex flex-col space-y-2 rounded-2lg border border-jacarta-100 bg-light-base p-5 text-center transition-shadow hover:shadow-lg  dark:bg-jacarta-800"*/}
        {/*                        href="/collections"><span*/}
        {/*                        className="text-sm uppercase text-accent">HAIR</span><span*/}
        {/*                        className="text-base text-jacarta-700 ">White Ash</span><span*/}
        {/*                        className="text-sm text-jacarta-400">7% have this trait</span></a><a*/}
        {/*                        className="flex flex-col space-y-2 rounded-2lg border border-jacarta-100 bg-light-base p-5 text-center transition-shadow hover:shadow-lg  dark:bg-jacarta-800"*/}
        {/*                        href="/collections"><span*/}
        {/*                        className="text-sm uppercase text-accent">CHARACTER</span><span*/}
        {/*                        className="text-base text-jacarta-700 ">TSAREVNA</span><span*/}
        {/*                        className="text-sm text-jacarta-400">1% have this trait</span></a><a*/}
        {/*                        className="flex flex-col space-y-2 rounded-2lg border border-jacarta-100 bg-light-base p-5 text-center transition-shadow hover:shadow-lg  dark:bg-jacarta-800"*/}
        {/*                        href="/collections"><span*/}
        {/*                        className="text-sm uppercase text-accent">BACKGROUND</span><span*/}
        {/*                        className="text-base text-jacarta-700 ">CyberPunk</span><span*/}
        {/*                        className="text-sm text-jacarta-400">9% have this trait</span></a><a*/}
        {/*                        className="flex flex-col space-y-2 rounded-2lg border border-jacarta-100 bg-light-base p-5 text-center transition-shadow hover:shadow-lg  dark:bg-jacarta-800"*/}
        {/*                        href="/collections"><span className="text-sm uppercase text-accent">MOUTH</span><span*/}
        {/*                        className="text-base text-jacarta-700 ">Flower</span><span*/}
        {/*                        className="text-sm text-jacarta-400">4% have this trait</span></a></div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*            <div className="tab-pane fade" id="details" role="tabpanel" aria-labelledby="details-tab">*/}
        {/*                <div*/}
        {/*                    className="rounded-t-2lg rounded-b-2lg rounded-tl-none border border-jacarta-100 bg-white p-6   md:p-10">*/}
        {/*                    <div className="mb-2 flex items-center"><span*/}
        {/*                        className="mr-2 min-w-[9rem] dark:text-jacarta-300">Contract Address:</span><a*/}
        {/*                        href="#" className="text-accent">0x1cBB182322Aee8ce9F4F1f98d7460173ee30Af1F</a>*/}
        {/*                    </div>*/}
        {/*                    <div className="mb-2 flex items-center"><span*/}
        {/*                        className="mr-2 min-w-[9rem] dark:text-jacarta-300">Token ID:</span><span*/}
        {/*                        className="js-copy-clipboard cursor-pointer select-none text-jacarta-700 "*/}
        {/*                        data-tippy-content="Copy">7714</span></div>*/}
        {/*                    <div className="mb-2 flex items-center"><span*/}
        {/*                        className="mr-2 min-w-[9rem] dark:text-jacarta-300">Token Standard:</span><span*/}
        {/*                        className="text-jacarta-700 ">ERC-721</span></div>*/}
        {/*                    <div className="flex items-center"><span*/}
        {/*                        className="mr-2 min-w-[9rem] dark:text-jacarta-300">Blockchain:</span><span*/}
        {/*                        className="text-jacarta-700 ">Ethereum</span></div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*            <div className="tab-pane fade" id="activity" role="tabpanel" aria-labelledby="activity-tab">*/}
        {/*                <div*/}
        {/*                    className=" border border-b-0 border-jacarta-100 bg-light-base px-4 pt-5 pb-2.5  ">*/}
        {/*                    <div className="flex flex-wrap">*/}
        {/*                        <button*/}
        {/*                            className="mr-2.5 mb-2.5 inline-flex items-center rounded-xl border border-transparent bg-accent px-4 py-3 hover:bg-accent-dark dark:hover:bg-accent-dark fill-white">*/}
        {/*                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"*/}
        {/*                                 height="24" className="mr-2 h-4 w-4 ">*/}
        {/*                                <path fill="none" d="M0 0h24v24H0z"></path>*/}
        {/*                                <path*/}
        {/*                                    d="M10.9 2.1l9.899 1.415 1.414 9.9-9.192 9.192a1 1 0 0 1-1.414 0l-9.9-9.9a1 1 0 0 1 0-1.414L10.9 2.1zm.707 2.122L3.828 12l8.486 8.485 7.778-7.778-1.06-7.425-7.425-1.06zm2.12 6.364a2 2 0 1 1 2.83-2.829 2 2 0 0 1-2.83 2.829z"></path>*/}
        {/*                            </svg>*/}
        {/*                            <span className="text-2xs font-medium text-white ">Listing</span></button>*/}
        {/*                        <button*/}
        {/*                            className="group mr-2.5 mb-2.5 inline-flex items-center rounded-xl border border-jacarta-100 bg-white px-4 py-3 hover:border-transparent hover:bg-accent hover:text-white    dark:hover:border-transparent dark:hover:bg-accent hover:fill-white dark:fill-white ">*/}
        {/*                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"*/}
        {/*                                 height="24" className="mr-2 h-4 w-4  ">*/}
        {/*                                <path fill="none" d="M0 0h24v24H0z"></path>*/}
        {/*                                <path*/}
        {/*                                    d="M14 20v2H2v-2h12zM14.586.686l7.778 7.778L20.95 9.88l-1.06-.354L17.413 12l5.657 5.657-1.414 1.414L16 13.414l-2.404 2.404.283 1.132-1.415 1.414-7.778-7.778 1.415-1.414 1.13.282 6.294-6.293-.353-1.06L14.586.686zm.707 3.536l-7.071 7.07 3.535 3.536 7.071-7.07-3.535-3.536z"></path>*/}
        {/*                            </svg>*/}
        {/*                            <span className="text-2xs font-medium  ">Bid</span></button>*/}
        {/*                        <button*/}
        {/*                            className="group mr-2.5 mb-2.5 inline-flex items-center rounded-xl border border-jacarta-100 bg-white px-4 py-3 hover:border-transparent hover:bg-accent hover:text-white    dark:hover:border-transparent dark:hover:bg-accent hover:fill-white dark:fill-white ">*/}
        {/*                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"*/}
        {/*                                 height="24" className="mr-2 h-4 w-4  ">*/}
        {/*                                <path fill="none" d="M0 0h24v24H0z"></path>*/}
        {/*                                <path*/}
        {/*                                    d="M16.05 12.05L21 17l-4.95 4.95-1.414-1.414 2.536-2.537L4 18v-2h13.172l-2.536-2.536 1.414-1.414zm-8.1-10l1.414 1.414L6.828 6 20 6v2H6.828l2.536 2.536L7.95 11.95 3 7l4.95-4.95z"></path>*/}
        {/*                            </svg>*/}
        {/*                            <span className="text-2xs font-medium  ">Transfer</span></button>*/}
        {/*                        <button*/}
        {/*                            className="group mr-2.5 mb-2.5 inline-flex items-center rounded-xl border border-jacarta-100 bg-white px-4 py-3 hover:border-transparent hover:bg-accent hover:text-white    dark:hover:border-transparent dark:hover:bg-accent hover:fill-white dark:fill-white ">*/}
        {/*                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"*/}
        {/*                                 height="24" className="mr-2 h-4 w-4  ">*/}
        {/*                                <path fill="none" d="M0 0h24v24H0z"></path>*/}
        {/*                                <path*/}
        {/*                                    d="M6.5 2h11a1 1 0 0 1 .8.4L21 6v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4zM19 8H5v12h14V8zm-.5-2L17 4H7L5.5 6h13zM9 10v2a3 3 0 0 0 6 0v-2h2v2a5 5 0 0 1-10 0v-2h2z"></path>*/}
        {/*                            </svg>*/}
        {/*                            <span className="text-2xs font-medium  ">Sale</span></button>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*                <div role="table"*/}
        {/*                     className="scrollbar-custom max-h-72 w-full overflow-y-auto rounded-lg rounded-tl-none border border-jacarta-100 bg-white text-sm   ">*/}
        {/*                    <div className="sticky top-0 flex bg-light-base dark:bg-jacarta-600" role="row">*/}
        {/*                        <div className="w-[17%] py-2 px-4" role="columnheader"><span*/}
        {/*                            className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">Event</span>*/}
        {/*                        </div>*/}
        {/*                        <div className="w-[17%] py-2 px-4" role="columnheader"><span*/}
        {/*                            className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">Price</span>*/}
        {/*                        </div>*/}
        {/*                        <div className="w-[22%] py-2 px-4" role="columnheader"><span*/}
        {/*                            className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">From</span>*/}
        {/*                        </div>*/}
        {/*                        <div className="w-[22%] py-2 px-4" role="columnheader"><span*/}
        {/*                            className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">To</span>*/}
        {/*                        </div>*/}
        {/*                        <div className="w-[22%] py-2 px-4" role="columnheader"><span*/}
        {/*                            className="w-full overflow-hidden text-ellipsis text-jacarta-700 dark:text-jacarta-100">Date</span>*/}
        {/*                        </div>*/}
        {/*                    </div>*/}
        {/*                    <div className="flex" role="row">*/}
        {/*                        <div*/}
        {/*                            className="flex w-[17%] items-center border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell">*/}
        {/*                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"*/}
        {/*                                 height="24"*/}
        {/*                                 className="mr-2 h-4 w-4 fill-jacarta-700 group-hover:fill-white dark:fill-white">*/}
        {/*                                <path fill="none" d="M0 0h24v24H0z"></path>*/}
        {/*                                <path*/}
        {/*                                    d="M14 20v2H2v-2h12zM14.586.686l7.778 7.778L20.95 9.88l-1.06-.354L17.413 12l5.657 5.657-1.414 1.414L16 13.414l-2.404 2.404.283 1.132-1.415 1.414-7.778-7.778 1.415-1.414 1.13.282 6.294-6.293-.353-1.06L14.586.686zm.707 3.536l-7.071 7.07 3.535 3.536 7.071-7.07-3.535-3.536z"></path>*/}
        {/*                            </svg>*/}
        {/*                            Bid*/}
        {/*                        </div>*/}
        {/*                        <div*/}
        {/*                            className="flex w-[17%] items-center whitespace-nowrap border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell"><span className="-ml-1" data-tippy-content="ETH"><svg*/}
        {/*                            version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0"*/}
        {/*                            viewBox="0 0 1920 1920" className="mr-1 h-4 w-4"><path fill="#8A92B2"*/}
        {/*                                                                                   d="M959.8 80.7L420.1 976.3 959.8 731z"></path><path*/}
        {/*                            fill="#62688F"*/}
        {/*                            d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"></path><path*/}
        {/*                            fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z"></path><path*/}
        {/*                            fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z"></path><path*/}
        {/*                            fill="#62688F"*/}
        {/*                            d="M959.8 1397.6v441.7l540.1-760.6z"></path></svg></span><span*/}
        {/*                            className="text-sm font-medium tracking-tight text-green">30 ETH</span>*/}
        {/*                        </div>*/}
        {/*                        <div*/}
        {/*                            className="flex w-[22%] items-center border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell"><a className="text-accent" href="/user/1">AD496A</a></div>*/}
        {/*                        <div*/}
        {/*                            className="flex w-[22%] items-center border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell"><a className="text-accent" href="/user/1">Polymorph: MORPH*/}
        {/*                            Token</a></div>*/}
        {/*                        <div*/}
        {/*                            className="flex w-[22%] items-center border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell"><a href="#" className="flex flex-wrap items-center text-accent"*/}
        {/*                                           target="_blank" rel="nofollow noopener"*/}
        {/*                                           title="Opens in a new window"*/}
        {/*                                           data-tippy-content="March 13 2022, 2:32 pm"><span*/}
        {/*                            className="mr-1">19 days ago</span>*/}
        {/*                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"*/}
        {/*                                 height="24" className="h-4 w-4 fill-current">*/}
        {/*                                <path fill="none" d="M0 0h24v24H0z"></path>*/}
        {/*                                <path*/}
        {/*                                    d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"></path>*/}
        {/*                            </svg>*/}
        {/*                        </a></div>*/}
        {/*                    </div>*/}
        {/*                    <div className="flex" role="row">*/}
        {/*                        <div*/}
        {/*                            className="flex w-[17%] items-center border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell">*/}
        {/*                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"*/}
        {/*                                 height="24"*/}
        {/*                                 className="mr-2 h-4 w-4 fill-jacarta-700 group-hover:fill-white dark:fill-white">*/}
        {/*                                <path fill="none" d="M0 0h24v24H0z"></path>*/}
        {/*                                <path*/}
        {/*                                    d="M16.05 12.05L21 17l-4.95 4.95-1.414-1.414 2.536-2.537L4 18v-2h13.172l-2.536-2.536 1.414-1.414zm-8.1-10l1.414 1.414L6.828 6 20 6v2H6.828l2.536 2.536L7.95 11.95 3 7l4.95-4.95z"></path>*/}
        {/*                            </svg>*/}
        {/*                            Transfer*/}
        {/*                        </div>*/}
        {/*                        <div*/}
        {/*                            className="flex w-[17%] items-center whitespace-nowrap border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell"><span className="-ml-1" data-tippy-content="ETH"><svg*/}
        {/*                            version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0"*/}
        {/*                            viewBox="0 0 1920 1920" className="mr-1 h-4 w-4"><path fill="#8A92B2"*/}
        {/*                                                                                   d="M959.8 80.7L420.1 976.3 959.8 731z"></path><path*/}
        {/*                            fill="#62688F"*/}
        {/*                            d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"></path><path*/}
        {/*                            fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z"></path><path*/}
        {/*                            fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z"></path><path*/}
        {/*                            fill="#62688F"*/}
        {/*                            d="M959.8 1397.6v441.7l540.1-760.6z"></path></svg></span><span*/}
        {/*                            className="text-sm font-medium tracking-tight text-green">.00510 ETH</span>*/}
        {/*                        </div>*/}
        {/*                        <div*/}
        {/*                            className="flex w-[22%] items-center border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell"><a className="text-accent" href="/user/2">The_vikk</a></div>*/}
        {/*                        <div*/}
        {/*                            className="flex w-[22%] items-center border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell"><a className="text-accent" href="/user/2">Polymorph: MORPH*/}
        {/*                            Token</a></div>*/}
        {/*                        <div*/}
        {/*                            className="flex w-[22%] items-center border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell"><a href="#" className="flex flex-wrap items-center text-accent"*/}
        {/*                                           target="_blank" rel="nofollow noopener"*/}
        {/*                                           title="Opens in a new window"*/}
        {/*                                           data-tippy-content="March 13 2022, 2:32 pm"><span*/}
        {/*                            className="mr-1">16 days ago</span>*/}
        {/*                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"*/}
        {/*                                 height="24" className="h-4 w-4 fill-current">*/}
        {/*                                <path fill="none" d="M0 0h24v24H0z"></path>*/}
        {/*                                <path*/}
        {/*                                    d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"></path>*/}
        {/*                            </svg>*/}
        {/*                        </a></div>*/}
        {/*                    </div>*/}
        {/*                    <div className="flex" role="row">*/}
        {/*                        <div*/}
        {/*                            className="flex w-[17%] items-center border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell">*/}
        {/*                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"*/}
        {/*                                 height="24"*/}
        {/*                                 className="mr-2 h-4 w-4 fill-jacarta-700 group-hover:fill-white dark:fill-white">*/}
        {/*                                <path fill="none" d="M0 0h24v24H0z"></path>*/}
        {/*                                <path*/}
        {/*                                    d="M6.5 2h11a1 1 0 0 1 .8.4L21 6v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4zM19 8H5v12h14V8zm-.5-2L17 4H7L5.5 6h13zM9 10v2a3 3 0 0 0 6 0v-2h2v2a5 5 0 0 1-10 0v-2h2z"></path>*/}
        {/*                            </svg>*/}
        {/*                            Sale*/}
        {/*                        </div>*/}
        {/*                        <div*/}
        {/*                            className="flex w-[17%] items-center whitespace-nowrap border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell"><span className="-ml-1" data-tippy-content="ETH"><svg*/}
        {/*                            version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0"*/}
        {/*                            viewBox="0 0 1920 1920" className="mr-1 h-4 w-4"><path fill="#8A92B2"*/}
        {/*                                                                                   d="M959.8 80.7L420.1 976.3 959.8 731z"></path><path*/}
        {/*                            fill="#62688F"*/}
        {/*                            d="M959.8 731L420.1 976.3l539.7 319.1zm539.8 245.3L959.8 80.7V731z"></path><path*/}
        {/*                            fill="#454A75" d="M959.8 1295.4l539.8-319.1L959.8 731z"></path><path*/}
        {/*                            fill="#8A92B2" d="M420.1 1078.7l539.7 760.6v-441.7z"></path><path*/}
        {/*                            fill="#62688F"*/}
        {/*                            d="M959.8 1397.6v441.7l540.1-760.6z"></path></svg></span><span*/}
        {/*                            className="text-sm font-medium tracking-tight text-green">1.50 ETH</span>*/}
        {/*                        </div>*/}
        {/*                        <div*/}
        {/*                            className="flex w-[22%] items-center border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell"><a className="text-accent" href="/user/3">CryptoGuysNFT</a>*/}
        {/*                        </div>*/}
        {/*                        <div*/}
        {/*                            className="flex w-[22%] items-center border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell"><a className="text-accent" href="/user/3">Polymorph: MORPH*/}
        {/*                            Token</a></div>*/}
        {/*                        <div*/}
        {/*                            className="flex w-[22%] items-center border-t border-jacarta-100 py-4 px-4 "*/}
        {/*                            role="cell"><a href="#" className="flex flex-wrap items-center text-accent"*/}
        {/*                                           target="_blank" rel="nofollow noopener"*/}
        {/*                                           title="Opens in a new window"*/}
        {/*                                           data-tippy-content="March 13 2022, 2:32 pm"><span*/}
        {/*                            className="mr-1">19 days ago</span>*/}
        {/*                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24"*/}
        {/*                                 height="24" className="h-4 w-4 fill-current">*/}
        {/*                                <path fill="none" d="M0 0h24v24H0z"></path>*/}
        {/*                                <path*/}
        {/*                                    d="M10 6v2H5v11h11v-5h2v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6zm11-3v8h-2V6.413l-7.793 7.794-1.414-1.414L17.585 5H13V3h8z"></path>*/}
        {/*                            </svg>*/}
        {/*                        </a></div>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*            <div className="tab-pane fade" id="price-history" role="tabpanel"*/}
        {/*                 aria-labelledby="price-history-tab">*/}
        {/*                <div*/}
        {/*                    className="rounded-t-2lg rounded-b-2lg rounded-tl-none border border-jacarta-100 bg-white p-6">*/}
        {/*                    <div className="mb-10 flex flex-wrap items-center"><select*/}
        {/*                        className="mr-8 min-w-[12rem] rounded-lg border-jacarta-100 py-3.5 text-sm  ">*/}
        {/*                        <option value="7-days">Last 7 Days</option>*/}
        {/*                        <option value="14-days">Last 14 Days</option>*/}
        {/*                        <option value="30-days">Last 30 Days</option>*/}
        {/*                        <option value="60-days">Last 60 Days</option>*/}
        {/*                        <option value="90-days">Last 90 Days</option>*/}
        {/*                        <option value="last-year">Last Year</option>*/}
        {/*                        <option value="all-time">All Time</option>*/}
        {/*                    </select>*/}
        {/*                        <div className="py-2"><span className="mr-4 inline-block align-middle"><span*/}
        {/*                            className="block text-sm font-bold ">90 Day Avg. Price:</span><span*/}
        {/*                            className="block text-sm font-bold text-green">Ξ7.0633</span></span><span*/}
        {/*                            className="inline-block align-middle"><span*/}
        {/*                            className="block text-sm font-bold ">90 Day Volume:</span><span*/}
        {/*                            className="block text-sm font-bold text-green">Ξ24,085.6957</span></span>*/}
        {/*                        </div>*/}
        {/*                    </div>*/}
        {/*                    <div className="chart-container relative h-80 w-full">*/}
        {/*                        <canvas role="img" height="0" width="0"*/}
        {/*                            // style="display: block; box-sizing: border-box; height: 0px; width: 0px;"*/}
        {/*                        ></canvas>*/}
        {/*                    </div>*/}
        {/*                </div>*/}
        {/*            </div>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default ShowNFT;
