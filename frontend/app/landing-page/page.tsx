import Magnetic from "@/components/magnetic/magnetic";

const MyComponent = () => {
  const items = [
    {
      imgSrc:
        "https://shreethemes.in/giglink/landing/assets/images/items/2.jpg",
      alt: "Genuine Undead #3902",
      price: "3.5 ETH",
      highestBid: "3.55 ETH",
    },
    {
      imgSrc:
        "https://shreethemes.in/giglink/landing/assets/images/items/3.jpg",
      alt: "Genuine Undead #3902",
      price: "3.5 ETH",
      highestBid: "3.55 ETH",
    },
    {
      imgSrc:
        "https://shreethemes.in/giglink/landing/assets/images/items/2.gif",
      alt: "Genuine Undead #3902",
      price: "3.5 ETH",
      highestBid: "3.55 ETH",
    },
    {
      imgSrc:
        "https://shreethemes.in/giglink/landing/assets/images/items/3.gif",
      alt: "Genuine Undead #3902",
      price: "3.5 ETH",
      highestBid: "3.55 ETH",
    },
    {
      imgSrc:
        "https://shreethemes.in/giglink/landing/assets/images/items/6.jpg",
      alt: "Genuine Undead #3902",
      price: "3.5 ETH",
      highestBid: "3.55 ETH",
    },
    {
      imgSrc:
        "https://shreethemes.in/giglink/landing/assets/images/items/6.jpg",
      alt: "Genuine Undead #3902",
      price: "3.5 ETH",
      highestBid: "3.55 ETH",
    },
    {
      imgSrc:
        "https://shreethemes.in/giglink/landing/assets/images/items/6.jpg",
      alt: "Genuine Undead #3902",
      price: "3.5 ETH",
      highestBid: "3.55 ETH",
    },
    {
      imgSrc:
        "https://shreethemes.in/giglink/landing/assets/images/items/6.jpg",
      alt: "Genuine Undead #3902",
      price: "3.5 ETH",
      highestBid: "3.55 ETH",
    },
  ];

  return (
    <div>
      <span className="fixed start-1/2 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-gradient-to-tl from-red-600/20 to-violet-600/20 blur-[200px] ltr:-translate-x-1/2 rtl:translate-x-1/2 dark:from-red-600/40 dark:to-violet-600/40"></span>

      <section className="relative flex h-[calc(100vh-66px)] items-center justify-center overflow-hidden">
        <div className="container">
          <div className="mt-10 grid grid-cols-1 justify-center text-center">
            <div className="relative">
              <div className="relative mb-5 text-gray-600">
                <h1 className="text-4xl font-bold leading-snug lg:text-6xl lg:leading-snug">
                  Tell the World <br /> About Your Collection{" "}
                  <span className="bg-gradient-to-l from-red-600 to-violet-600 bg-clip-text text-transparent">
                    Idea for NFTs!
                  </span>
                </h1>

                <div className="after:-z-1 overflow-hidden after:absolute after:-top-[50px] after:start-[30%] after:h-10 after:w-10 after:animate-[spin_10s_linear_infinite] after:rounded-lg after:bg-violet-600/10 after:content-[''] dark:after:bg-violet-600/30"></div>

                <div className="after:-z-1 overflow-hidden after:absolute after:bottom-[0] after:end-[15%] after:h-10 after:w-10 after:animate-ping after:rounded-full after:bg-violet-600/20 after:content-[''] dark:after:bg-violet-600/40"></div>
              </div>
              <p className="mx-auto max-w-xl text-lg text-slate-800 dark:text-gray-600">
                We are a huge marketplace dedicated to connecting great artists
                of all Giglink with their fans and unique token collectors!
              </p>

              <div className="my-8 flex justify-center">
                <Magnetic>
                  <a
                    href="explore-one.html"
                    className="btn rounded-full border-violet-600 bg-violet-600 px-4 py-3 text-white hover:border-violet-700 hover:bg-violet-700"
                  >
                    Explore now
                  </a>
                </Magnetic>
              </div>
            </div>
          </div>

          <div className="-z-1 relative animate-[spin_30s_linear_infinite]">
            <span className="relative after:absolute after:bottom-1/2 after:start-0 after:z-10 after:h-2 after:w-8 after:translate-y-1/2 after:rounded-md after:bg-violet-600/20"></span>
            <span className="relative after:absolute after:bottom-1/2 after:start-0 after:z-10 after:h-2 after:w-8 after:translate-y-1/2 after:rotate-90 after:rounded-md after:bg-violet-600/20"></span>
          </div>
        </div>
      </section>
      <div className="flex flex-wrap items-center justify-center gap-5 pb-5">
        {items.map((item, index) => (
          <div
            key={index}
            className="group relative h-fit w-fit overflow-hidden rounded-lg border border-gray-100 bg-white p-2 transition-all duration-500 hover:-mt-2 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700"
          >
            <div className="relative overflow-hidden">
              <div className="relative overflow-hidden rounded-lg p-2">
                <img
                  src={item.imgSrc}
                  className="h-[250px] w-[250px] rounded-lg shadow-md transition-all duration-500 group-hover:scale-110 dark:shadow-gray-700"
                  alt={item.alt}
                />
              </div>

              <div className="absolute -bottom-20 end-0 start-0 mx-auto text-center transition-all duration-500 group-hover:bottom-1/2 group-hover:translate-y-1/2">
                <a
                  href="item-detail.html"
                  className="btn btn-sm rounded-full border-violet-600 bg-violet-600 px-5 py-2 text-center text-white hover:border-violet-700 hover:bg-violet-700"
                >
                  <i className="mdi mdi-lightning-bolt"></i> Buy Now
                </a>
              </div>

              <div className="absolute end-2 top-2 opacity-0 transition-all duration-500 group-hover:opacity-100">
                <a
                  href="javascript:void(0)"
                  className="btn btn-icon btn-sm rounded-full border-violet-600 bg-violet-600 text-white hover:border-violet-700 hover:bg-violet-700"
                >
                  <i className="mdi mdi-plus"></i>
                </a>
              </div>
            </div>

            <div className="mt-3">
              <div className="my-3">
                <a
                  href="item-detail.html"
                  className="font-semibold hover:text-violet-600"
                >
                  {item.alt}
                </a>
              </div>

              <div className="flex justify-between rounded-lg bg-gray-50 p-2 shadow dark:shadow-gray-700">
                <div>
                  <span className="block text-[16px] font-medium text-slate-400">
                    Price
                  </span>
                  <span className="block text-[16px] font-semibold">
                    <i className="mdi mdi-ethereum"></i> {item.price}
                  </span>
                </div>

                <div>
                  <span className="block text-[16px] font-medium text-slate-400">
                    Highest Bid
                  </span>
                  <span className="block text-[16px] font-semibold">
                    <i className="mdi mdi-ethereum"></i> {item.highestBid}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyComponent;
