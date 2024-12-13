import {
  faArrowRightLong,
  faCircleCheck,
  faMoneyBillWave,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TransactionMessage = ({
  message,
  receiverName,
}: {
  message: any;
  receiverName: string;
}) => (
  <div className="flex items-center justify-center bg-gray-100">
    <div className="w-80 rounded-lg bg-white p-4 shadow-md">
      <div className="mb-2 flex items-center">
        <div className="rounded-full bg-red-100 px-2 py-1">
          <FontAwesomeIcon icon={faMoneyBillWave} className="text-red-500" />
        </div>
        <div className="ml-2 text-sm text-gray-500">
          {new Date(message.sentAt).toLocaleTimeString()}
        </div>
      </div>
      <div className="mb-2 flex items-center justify-between">
        <div className="font-bold text-black">ĐÃ CHUYỂN</div>
        <div className="flex items-center">
          <div className="mr-1 text-sm text-gray-500">Thành công</div>
          <FontAwesomeIcon icon={faCircleCheck} className="text-green-500" />
        </div>
      </div>
      <div className="mb-4 flex items-center justify-between text-lg font-bold text-gray-700">
        <span className="mr-2 text-orange-600">
          {message?.transaction.amount.toLocaleString()}{" "}
          {message?.transaction.assetType}
        </span>
        <span className="text-gray-500">
          <FontAwesomeIcon icon={faArrowRightLong} />
        </span>
        <p className="ml-2 text-gray-800">{receiverName}</p>
      </div>
      <div className="rounded-lg bg-gray-100 p-2 text-gray-700">
        {message.text}
      </div>
    </div>
  </div>
);

export default TransactionMessage;
