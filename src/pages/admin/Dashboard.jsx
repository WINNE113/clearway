import { Title } from "../../components";
import { Fragment, useState, useEffect } from "react"
import { PieChart } from 'react-minimal-pie-chart';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { data } from "autoprefixer";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const Dashboard = () => {

  const [trafficStatusPercent, setTrafficStatusPercent] = useState([70, 20, 10]); // Dữ liệu mẫu cho trạng thái tình trạng giao thông
  const [userStatusPercent, setUserStatusPercent] = useState([1, 50, 20, 29]); // Dữ liệu mẫu cho trạng thái người dùng
  const [orderLabelData, setOrderLabelData] = useState(['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4']); // Dữ liệu mẫu cho nhãn doanh thu
  const [orderData, setOrderData] = useState([200, 300, 400, 500]); // Dữ liệu mẫu cho doanh thu
  const [paymentTransactionLabelData, setPaymentTransactionLabelData] = useState(['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4']); // Dữ liệu mẫu cho nhãn nạp tiền
  const [paymentTransactionData, setPaymentTransactionData] = useState([100, 150, 200, 250]); // Dữ liệu mẫu cho nạp tiền



  const dataCircleChart = [
    { value: trafficStatusPercent[0], color: '#3cb371' }, // Approved color
    { value: trafficStatusPercent[1], color: '#ff0000' }, // Rejected color
    { value: trafficStatusPercent[2], color: '#0096889c' }, // Review color
    { value: 100 - trafficStatusPercent[0] - trafficStatusPercent[1] - trafficStatusPercent[2], color: '#5858580f' }, // Background color
  ];

  const dataUserCircleChart = [
    { value: userStatusPercent[0], color: '#db323b' }, // admin user
    { value: userStatusPercent[1], color: '#5835b9' }, // genaral user
    { value: userStatusPercent[2], color: '#3cb361' }, // corporate user
    { value: userStatusPercent[3], color: '#0000ff' }, // Traffic Authority
    { value: 100 - userStatusPercent[1] - userStatusPercent[2] - userStatusPercent[3] - userStatusPercent[4], color: '#5858580f' }, // Background color
  ];

  const dataLineChart = {
    labels: orderLabelData,
    datasets: [
      {
        label: 'Thống kê',
        data: orderData,
        borderColor: '#3b82f6',
        backgroundColor: '#1e40af',
      }
    ],
  };

  const dataLineChartPaymentTransaction = {
    labels: paymentTransactionLabelData,
    datasets: [
      {
        label: 'Doanh thu',
        data: paymentTransactionData,
        borderColor: '#3b82f6',
        backgroundColor: '#1e40af',
      }
    ],
  };
  return (
    <div>
      <Title title="Thống kê"></Title>
      <div className="grid grid-cols-2 grid-rows-2">
        <div className="mx-2 my-2 border border-[#E6E9ED] rounded-md shadow">
          <div className="border-b-2 border-[#E6E9ED] mx-4 py-2">
            <h1 className="text-2xl font-bold text-[#73879E] px-2">Tình trạng giao thông</h1>
          </div>
          <div className="grid grid-cols-2 w-full px-2">
            <PieChart className="px-4"
              data={dataCircleChart}
              style={{ width: '240px', height: '240px' }} // Adjust the size as needed
              startAngle={-90}
              animate
            />
            <div className="flex flex-col pt-5">
              <span className="text-sm font-semibold text-[white] rounded-full bg-[#37d4b29c] px-3 py-2 mb-2 text-center min-w-[6rem]">Tình trạng A</span>
              <span className="text-sm font-semibold text-[black] border rounded-full bg-[#3cb371] px-3 py-2 mb-2 text-center min-w-[6rem]">Tình trạng B</span>
              <span className="text-sm font-semibold text-[black] border rounded-full bg-[#ff0000] px-3 py-2 mb-2 text-center min-w-[6rem]">Tình trạng C</span>
            </div>
          </div>
          <div className="flex space-x-2 ml-7">
            <div className="flex-1 border border-[#E6E9ED] rounded-full bg-[#37d4b29c] flex items-center justify-center">
              <span className="py-2 text-center text-[white] text-sm font-semibold">{trafficStatusPercent[2]}%</span>
            </div>
            <div className="flex-1 border border-[#E6E9ED] rounded-full bg-[#3cb371] flex items-center flex items-center justify-center">
              <span className="py-2 text-center text-[white] text-sm font-semibold">{trafficStatusPercent[0]}%</span>
            </div>
            <div className="flex-1 border border-[#E6E9ED] rounded-full bg-[#ff0000] flex items-center flex items-center justify-center">
              <span className="py-2 text-center text-[white] text-sm font-semibold">{trafficStatusPercent[1]}%</span>
            </div>
          </div>
        </div>
        <div className="mx-2 my-2 border border-[#E6E9ED] rounded-md shadow">
          <div className="border-b-2 border-[#E6E9ED] mx-4 py-2">
            <h1 className="text-2xl font-bold text-[#73879E] px-2">Trạng thái tài khoản người dùng</h1>
          </div>
          <div className="grid grid-cols-2 w-full px-2">
            <PieChart className="px-4"
              data={dataUserCircleChart}
              style={{ width: '240px', height: '240px' }} // Adjust the size as needed
              startAngle={-90}
              animate
            />
            <div className="flex flex-col pt-5">
              <span className="text-sm font-semibold text-[white] rounded-full bg-[#db323b] px-3 py-2 mb-2 text-center min-w-[6rem]">Admin</span>
              <span className="text-sm font-semibold text-[white] rounded-full bg-[#5835b9] px-3 py-2 mb-2 text-center min-w-[6rem]">Người dùng chung</span>
              <span className="text-sm font-semibold text-[black] border rounded-full bg-[#3cb361] px-3 py-2 mb-2 text-center min-w-[6rem]">Người dùng doanh nghiệp</span>
              <span className="text-sm font-semibold text-[white] rounded-full bg-[#0000ff] px-3 py-2 mb-2 text-center min-w-[6rem]">Cơ quan quản lý giao thông</span>
            </div>
          </div>
          <div className="flex space-x-2 ml-7">
            <div className="flex-1 border border-[#E6E9ED] rounded-full bg-[#db323b] flex items-center justify-center">
              <span className="py-2 text-center text-[white] text-sm font-semibold">{userStatusPercent[0]} Tài khoản</span>
            </div>
            <div className="flex-1 border border-[#E6E9ED] rounded-full bg-[#5835b9] flex items-center justify-center">
              <span className="py-2 text-center text-[white] text-sm font-semibold">{userStatusPercent[1]} Tài khoản</span>
            </div>
            <div className="flex-1 border border-[#E6E9ED] rounded-full bg-[#3cb361] flex items-center justify-center">
              <span className="py-2 text-center text-[white] text-sm font-semibold">{userStatusPercent[2]} Tài khoản</span>
            </div>
            <div className="flex-1 border border-[#E6E9ED] rounded-full bg-[#0000ff] flex items-center flex items-center justify-center">
              <span className="py-2 text-center text-[white] text-sm font-semibold">{userStatusPercent[3]} Tài khoản</span>
            </div>
          </div>
        </div>
        <div className="mx-2 my-2 border border-[#E6E9ED] rounded-md shadow">
          <div className="border-b-2 border-[#E6E9ED] mx-4 py-2">
            <h1 className="text-2xl font-bold text-[#73879E] px-2">Hiệu xuất hệ thống</h1>
          </div>
          <div>
            <Line data={dataLineChart} />
          </div>
        </div>
        <div className="mx-2 my-2 border border-[#E6E9ED] rounded-md shadow">
          <div className="border-b-2 border-[#E6E9ED] mx-4 py-2">
            <h1 className="text-2xl font-bold text-[#73879E] px-2">Nạp tiền vào hệ thống</h1>
          </div>
          <div>
            <Line data={dataLineChartPaymentTransaction} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
