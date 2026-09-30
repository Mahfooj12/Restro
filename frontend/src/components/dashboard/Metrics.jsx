// import React from "react";
// import { itemsData, metricsData } from "../../constants";

// const Metrics = () => {
//   return (
//     <div className="container mx-auto py-2 px-6 md:px-4">
//       <div className="flex justify-between items-center">
//         <div>
//           <h2 className="font-semibold text-[#f5f5f5] text-xl">
//             Overall Performance
//           </h2>
//           <p className="text-sm text-[#ababab]">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//             Distinctio, obcaecati?
//           </p>
//         </div>
//         <button className="flex items-center gap-1 px-4 py-2 rounded-md text-[#f5f5f5] bg-[#1a1a1a]">
//           Last 1 Month
//           <svg
//             className="w-3 h-3"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth="4"
//           >
//             <path d="M19 9l-7 7-7-7" />
//           </svg>
//         </button>
//       </div>

//       <div className="mt-6 grid grid-cols-4 gap-4">
//         {metricsData.map((metric, index) => {
//           return (
//             <div
//               key={index}
//               className="shadow-sm rounded-lg p-4"
//               style={{ backgroundColor: metric.color }}
//             >
//               <div className="flex justify-between items-center">
//                 <p className="font-medium text-xs text-[#f5f5f5]">
//                   {metric.title}
//                 </p>
//                 <div className="flex items-center gap-1">
//                   <svg
//                     className="w-3 h-3"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth="4"
//                     fill="none"
//                     style={{ color: metric.isIncrease ? "#f5f5f5" : "red" }}
//                   >
//                     <path
//                       d={metric.isIncrease ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
//                     />
//                   </svg>
//                   <p
//                     className="font-medium text-xs"
//                     style={{ color: metric.isIncrease ? "#f5f5f5" : "red" }}
//                   >
//                     {metric.percentage}
//                   </p>
//                 </div>
//               </div>
//               <p className="mt-1 font-semibold text-2xl text-[#f5f5f5]">
//                 {metric.value}
//               </p>
//             </div>
//           );
//         })}
//       </div>

//       <div className="flex flex-col justify-between mt-12">
//         <div>
//           <h2 className="font-semibold text-[#f5f5f5] text-xl">
//             Item Details
//           </h2>
//           <p className="text-sm text-[#ababab]">
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//             Distinctio, obcaecati?
//           </p>
//         </div>

//         <div className="mt-6 grid grid-cols-4 gap-4">

//             {
//                 itemsData.map((item, index) => {
//                     return (
//                         <div key={index} className="shadow-sm rounded-lg p-4" style={{ backgroundColor: item.color }}>
//                         <div className="flex justify-between items-center">
//                           <p className="font-medium text-xs text-[#f5f5f5]">{item.title}</p>
//                           <div className="flex items-center gap-1">
//                             <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4" fill="none">
//                               <path d="M5 15l7-7 7 7" />
//                             </svg>
//                             <p className="font-medium text-xs text-[#f5f5f5]">{item.percentage}</p>
//                           </div>
//                         </div>
//                         <p className="mt-1 font-semibold text-2xl text-[#f5f5f5]">{item.value}</p>
//                       </div>
//                     )
//                 })
//             }

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Metrics;



import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Line, Bar, Doughnut } from "react-chartjs-2";
import { metricsData, itemsData } from "../../constants";

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Metrics = () => {
  const [timeRange, setTimeRange] = useState("month");
  const [revenueData, setRevenueData] = useState([]);
  const [customerData, setCustomerData] = useState([]);
  const [topDishes, setTopDishes] = useState([]);

  // Mock data fetch simulation
  useEffect(() => {
    // In a real app, you would fetch this from your backend API
    const fetchAnalyticsData = () => {
      // Simulate revenue data based on time range
      const revenueByTimeRange = {
        week: [12000, 19000, 15000, 21000, 18000, 23000, 25000],
        month: [42000, 43500, 45200, 46800, 48500, 50846, 52000, 53500, 55000, 56500, 58000, 59500],
        year: [450000, 480000, 520000, 550000, 590000, 630000, 680000, 730000, 780000, 830000, 890000, 950000]
      };
      
      // Simulate customer data
      const customersByTimeRange = {
        week: [120, 190, 150, 210, 180, 230, 250],
        month: [4200, 4350, 4520, 4680, 4850, 5084, 5200, 5350, 5500, 5650, 5800, 5950],
        year: [45000, 48000, 52000, 55000, 59000, 63000, 68000, 73000, 78000, 83000, 89000, 95000]
      };
      
      // Top dishes data
      const dishes = [
        { name: "Margherita Pizza", orders: 245, revenue: 12250 },
        { name: "Burger", orders: 210, revenue: 10500 },
        { name: "Pasta", orders: 185, revenue: 14800 },
        { name: "Salad", orders: 162, revenue: 8100 },
        { name: "Ice Cream", orders: 150, revenue: 6000 }
      ];

      setRevenueData(revenueByTimeRange[timeRange]);
      setCustomerData(customersByTimeRange[timeRange]);
      setTopDishes(dishes);
    };

    fetchAnalyticsData();
  }, [timeRange]);

  // Chart options and data configuration
  const revenueChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#f5f5f5'
        }
      },
      title: {
        display: true,
        text: 'Revenue Trend',
        color: '#f5f5f5'
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#ababab'
        },
        grid: {
          color: '#333'
        }
      },
      y: {
        ticks: {
          color: '#ababab',
          callback: function(value) {
            return '₹' + value.toLocaleString();
          }
        },
        grid: {
          color: '#333'
        }
      }
    }
  };

  const revenueChartData = {
    labels: timeRange === 'week' 
      ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      : timeRange === 'month'
      ? ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12']
      : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Revenue',
        data: revenueData,
        borderColor: '#02ca3a',
        backgroundColor: 'rgba(2, 202, 58, 0.1)',
        tension: 0.4,
        fill: true
      }
    ]
  };

  const customersChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#f5f5f5'
        }
      },
      title: {
        display: true,
        text: 'Customer Growth',
        color: '#f5f5f5'
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#ababab'
        },
        grid: {
          color: '#333'
        }
      },
      y: {
        ticks: {
          color: '#ababab'
        },
        grid: {
          color: '#333'
        }
      }
    }
  };

  const customersChartData = {
    labels: timeRange === 'week' 
      ? ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      : timeRange === 'month'
      ? ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8', 'Week 9', 'Week 10', 'Week 11', 'Week 12']
      : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Customers',
        data: customerData,
        borderColor: '#f6b100',
        backgroundColor: 'rgba(246, 177, 0, 0.1)',
        tension: 0.4,
        fill: true
      }
    ]
  };

  const topDishesOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#f5f5f5'
        }
      },
      title: {
        display: true,
        text: 'Top Dishes by Orders',
        color: '#f5f5f5'
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#ababab'
        },
        grid: {
          color: '#333'
        }
      },
      y: {
        ticks: {
          color: '#ababab'
        },
        grid: {
          color: '#333'
        }
      }
    }
  };

  const topDishesData = {
    labels: topDishes.map(dish => dish.name),
    datasets: [
      {
        label: 'Orders',
        data: topDishes.map(dish => dish.orders),
        backgroundColor: [
          'rgba(230, 126, 34, 0.7)',
          'rgba(52, 152, 219, 0.7)',
          'rgba(46, 204, 113, 0.7)',
          'rgba(155, 89, 182, 0.7)',
          'rgba(241, 196, 15, 0.7)'
        ],
        borderColor: [
          'rgba(230, 126, 34, 1)',
          'rgba(52, 152, 219, 1)',
          'rgba(46, 204, 113, 1)',
          'rgba(155, 89, 182, 1)',
          'rgba(241, 196, 15, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  const categoryData = {
    labels: ['Appetizers', 'Main Course', 'Desserts', 'Beverages', 'Specials'],
    datasets: [
      {
        label: 'Revenue Distribution',
        data: [20, 45, 15, 10, 10],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  return (
    <div className="container mx-auto py-2 px-6 md:px-4">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="font-semibold text-[#f5f5f5] text-xl">
            Overall Performance
          </h2>
          <p className="text-sm text-[#ababab]">
            Track your restaurant's performance with detailed analytics
          </p>
        </div>
        <div className="flex items-center gap-2">
          <select 
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-4 py-2 rounded-md text-[#f5f5f5] bg-[#1a1a1a] border border-[#333]"
          >
            <option value="week">Last Week</option>
            <option value="month">Last 1 Month</option>
            <option value="year">Last Year</option>
          </select>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {metricsData.map((metric, index) => {
          return (
            <div
              key={index}
              className="shadow-sm rounded-lg p-4"
              style={{ backgroundColor: metric.color }}
            >
              <div className="flex justify-between items-center">
                <p className="font-medium text-xs text-[#f5f5f5]">
                  {metric.title}
                </p>
                <div className="flex items-center gap-1">
                  <svg
                    className="w-3 h-3"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    style={{ color: metric.isIncrease ? "#f5f5f5" : "red" }}
                  >
                    <path
                      d={metric.isIncrease ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"}
                    />
                  </svg>
                  <p
                    className="font-medium text-xs"
                    style={{ color: metric.isIncrease ? "#f5f5f5" : "red" }}
                  >
                    {metric.percentage}
                  </p>
                </div>
              </div>
              <p className="mt-1 font-semibold text-2xl text-[#f5f5f5]">
                {metric.value}
              </p>
            </div>
          );
        })}
      </div>

      {/* Analytics Charts Section */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-[#1a1a1a] p-4 rounded-lg">
          <Line options={revenueChartOptions} data={revenueChartData} />
        </div>
        <div className="bg-[#1a1a1a] p-4 rounded-lg">
          <Line options={customersChartOptions} data={customersChartData} />
        </div>
        <div className="bg-[#1a1a1a] p-4 rounded-lg">
          <Bar options={topDishesOptions} data={topDishesData} />
        </div>
        <div className="bg-[#1a1a1a] p-4 rounded-lg">
          <Doughnut 
            data={categoryData} 
            options={{
              responsive: true,
              plugins: {
                legend: {
                  position: 'top',
                  labels: {
                    color: '#f5f5f5'
                  }
                },
                title: {
                  display: true,
                  text: 'Revenue by Category',
                  color: '#f5f5f5'
                },
              }
            }}
          />
        </div>
      </div>

      <div className="flex flex-col justify-between mt-12">
        <div>
          <h2 className="font-semibold text-[#f5f5f5] text-xl">
            Item Details
          </h2>
          <p className="text-sm text-[#ababab]">
            Detailed statistics about your menu items and operations
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {itemsData.map((item, index) => {
            return (
              <div key={index} className="shadow-sm rounded-lg p-4" style={{ backgroundColor: item.color }}>
                <div className="flex justify-between items-center">
                  <p className="font-medium text-xs text-[#f5f5f5]">{item.title}</p>
                  {item.percentage && (
                    <div className="flex items-center gap-1">
                      <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4" fill="none">
                        <path d="M5 15l7-7 7 7" />
                      </svg>
                      <p className="font-medium text-xs text-[#f5f5f5]">{item.percentage}</p>
                    </div>
                  )}
                </div>
                <p className="mt-1 font-semibold text-2xl text-[#f5f5f5]">{item.value}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Additional Analytics Section */}
      <div className="mt-12">
        <h2 className="font-semibold text-[#f5f5f5] text-xl mb-4">
          Performance Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#1a1a1a] p-4 rounded-lg">
            <h3 className="text-[#f5f5f5] font-medium mb-2">Average Order Value</h3>
            <p className="text-2xl font-bold text-[#f5f5f5]">₹2,580</p>
            <p className="text-green-400 text-sm mt-1">+12% from last month</p>
          </div>
          <div className="bg-[#1a1a1a] p-4 rounded-lg">
            <h3 className="text-[#f5f5f5] font-medium mb-2">Table Turnover Rate</h3>
            <p className="text-2xl font-bold text-[#f5f5f5]">2.8x</p>
            <p className="text-green-400 text-sm mt-1">+0.3 from last month</p>
          </div>
          <div className="bg-[#1a1a1a] p-4 rounded-lg">
            <h3 className="text-[#f5f5f5] font-medium mb-2">Peak Hours</h3>
            <p className="text-2xl font-bold text-[#f5f5f5]">7-9 PM</p>
            <p className="text-[#ababab] text-sm mt-1">68% of daily revenue</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Metrics;