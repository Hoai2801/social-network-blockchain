export default function formatTime(time: string): string {
  return new Date(time).toLocaleString("vi-VN", {
    timeZone: "Asia/Ho_Chi_Minh",
    hour12: false, // Use 24-hour format
  });
}
