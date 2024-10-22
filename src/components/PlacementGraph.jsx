"use client";
import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PlacementGraph = () => {
  const [chartWidth, setChartWidth] = useState(526);
  const [chartHeight, setChartHeight] = useState(400);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setChartWidth(300);
        setChartHeight(300);
      } else if (window.innerWidth < 768) {
        setChartWidth(400);
        setChartHeight(350);
      } else if (window.innerWidth < 1024) {
        setChartWidth(500);
        setChartHeight(400);
      } else {
        setChartWidth(526);
        setChartHeight(400);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full flex justify-center overflow-hidden py-8 sm:py-12 md:py-16 lg:py-24">
      <div className="w-full sm:w-[90%] md:w-[85%] h-auto sm:h-[471px] bg-[#E9E9E8] p-3 sm:p-5">
        <h1 className="text-[#696969] py-3 sm:py-5 font-bebas-neue font-normal leading-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-[56px]">
          YEAR WISE PLACEMENT OFFERS
        </h1>

        <div className="w-full flex justify-center items-center">
          <div style={{ width: chartWidth, height: chartHeight }}>
            <Bar
              data={{
                labels: ["2007", "2008", "2009", "2010", "2011"],
                datasets: [
                  {
                    label: 'Placement Offers',
                    data: [140, 120, 105, 90, 130],
                    backgroundColor: "#9E9E9E",
                  },
                ],
              }}
              options={{
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                  y: {
                    beginAtZero: false,
                    min: 60,
                    ticks: {
                      stepSize: 20,
                    },
                    grid: {
                      display: false,
                    },
                  },
                  x: {
                    beginAtZero: true,
                    grid: {
                      display: false,
                    },
                  },
                },
                plugins: {
                  legend: {
                    labels: {
                      font: {
                        size: 12,
                      },
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacementGraph;
