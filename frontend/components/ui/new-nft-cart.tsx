interface ItemCardProps {
  imageUrl: string;
  title: string;
  price: number;
  highestBid: number;
  buyLink: string;
}

const ItemCard = ({
  imageUrl,
  title,
  price,
  highestBid,
  buyLink,
}: ItemCardProps) => {
  return (
    <div className="group relative h-fit w-fit overflow-hidden rounded-lg border border-gray-100 bg-white p-2 transition-all duration-500 hover:-mt-2 hover:shadow-md dark:shadow-md hover:dark:shadow-gray-700">
      <div className="relative overflow-hidden">
        <div className="relative overflow-hidden rounded-lg p-2">
          <img
            src={imageUrl}
            className="h-[250px] w-[250px] rounded-lg shadow-md transition-all duration-500 group-hover:scale-110 dark:shadow-gray-700"
            alt={title}
          />
        </div>

        <div className="absolute -bottom-20 end-0 start-0 mx-auto text-center transition-all duration-500 group-hover:bottom-1/2 group-hover:translate-y-1/2">
          <a
            href={buyLink}
            className="btn btn-sm rounded-full border-violet-600 bg-violet-600 px-5 py-2 text-center text-white hover:border-violet-700 hover:bg-violet-700"
          >
            <i className="mdi mdi-lightning-bolt"></i> Buy Now
          </a>
        </div>

        <div className="absolute end-2 top-2 opacity-0 transition-all duration-500 group-hover:opacity-100">
          <button className="btn btn-icon btn-sm rounded-full border-violet-600 bg-violet-600 text-white hover:border-violet-700 hover:bg-violet-700">
            <i className="mdi mdi-plus"></i>
          </button>
        </div>
      </div>

      <div className="mt-3">
        <div className="my-3">
          <a href={buyLink} className="font-semibold hover:text-violet-600">
            {title}
          </a>
        </div>

        <div className="flex justify-between rounded-lg bg-gray-50 p-2 shadow dark:shadow-gray-700">
          <div>
            <span className="block text-[16px] font-medium text-slate-400">
              Price
            </span>
            <span className="block text-[16px] font-semibold">
              <i className="mdi mdi-ethereum"></i> {price} ETH
            </span>
          </div>

          <div>
            <span className="block text-[16px] font-medium text-slate-400">
              Highest Bid
            </span>
            <span className="block text-[16px] font-semibold">
              <i className="mdi mdi-ethereum"></i> {highestBid} ETH
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
