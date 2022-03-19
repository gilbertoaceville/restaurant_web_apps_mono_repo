import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineRise, AiOutlineFall } from "react-icons/ai";
import Chart from "chart.js/auto";
import ProgressBar from "../ProgressBar/progressbar.component";
import {
  ChartCardContainer,
  MiniCardContainer,
  RatingStar,
} from "./dashboard.styles";

export const DashboardCards = ({
  rise,
  title = "Total Orders",
  options = true,
  cardNumber = 134,
  location = "in 10 states",
  icon,
}) => {
  const [selected, setSelected] = useState("today");
  return (
    <MiniCardContainer>
      <header className="card-header">
        <h3>{title}</h3>
        {options && (
          <div className="card-day-wrap">
            <select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
            >
              <option value="today">today</option>
              <option value="yesterday">yesterday</option>
              <option value="tomorrow">tomorrow</option>
            </select>
          </div>
        )}
      </header>
      <p className="card-number">
        {cardNumber}{" "}
        {icon && (
          <span className="card-outline-icon">
            {rise ? (
              <AiOutlineRise color="#15D527" size={24} />
            ) : (
              <AiOutlineFall color="#ECA84B" size={24} />
            )}
          </span>
        )}
      </p>
      <small className="card-location">{location}</small>
    </MiniCardContainer>
  );
};

export const LineChartTable = ({ title = "Total Revenue", options = true }) => {
  const [selected, setSelected] = useState("monthly");
  return (
    <ChartCardContainer>
      <header className="card-header">
        <div>
          <h3>{title}</h3>
          <h3>
            {" "}
            <i className="fa-solid fa-naira-sign"></i>14,000
          </h3>
        </div>
        {options && (
          <div className="card-day-wrap">
            <select
              value={selected}
              onChange={(e) => setSelected(e.target.value)}
            >
              <option value="daily">daily</option>
              <option value="weekly">weekly</option>
              <option value="monthly">monthly</option>
              <option value="yearly">yearly</option>
            </select>
          </div>
        )}
      </header>
      <LineChart />
    </ChartCardContainer>
  );
};

const LineChart = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "",
        data: [2, 3, 4, 2, 5, 7, 6, 1],
        borderColor: ["#F38B1C"],
        backgroundColor: ["rgba(54, 162, 235, 0.2)"],
        pointBackgroundColor: "rgba(54, 162, 235, 0.2)",
        pointBorderColor: "rgba(54, 162, 235, 0.2)",
        borderWidth: 1.5,
        lineTension: 0.5,
        fill: true,
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Line Chart",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            min: 0,
            max: 6,
            stepSize: 1,
          },
        },
      ],
    },
  };

  return <Line data={data} options={options} />;
};

const testData = [
  { stars: 5, comment: 2, rating: 36 },
  { stars: 4, comment: 3, rating: 32 },
  { stars: 3, comment: 0, rating: 10 },
  { stars: 2, comment: 3, rating: 8 },
  { stars: 1, comment: 0, rating: 4 },
];
export const StarRateTable = () => {
  return (
    <ChartCardContainer>
      <header className="card-header">
        <div className="card-header-title">
          <h3 id="rating-title">
            4.2 <RatingStar iconSize={22} />
          </h3>
          <h3>Based on 98 ratings</h3>
        </div>
      </header>
      <div className="star-rate-component">
        {testData.map(({ stars, comment, rating }) => (
          <ProgressBar
            noOfStars={stars}
            noOfComments={comment}
            completed={rating}
            noOfRating={rating}
          />
        ))}
      </div>
    </ChartCardContainer>
  );
};
