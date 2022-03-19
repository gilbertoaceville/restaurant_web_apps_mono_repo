import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js";
import { FlexibleDiv, GridableDiv } from "../Box/styles";
import {
  BarChartMain,
  LineChartMain,
  Label,
  LineChartWrap,
  ChartTableStyles,
} from "./chart.styles";
import "./chartFile";
import { OverFlowScrollBar } from "../OverflowScroll/styles";
import {
  AiOutlineTable,
  AiOutlineLineChart,
  AiOutlineBarChart,
} from "react-icons/ai";
import CustomTable from "../Table";

// http://codeeditor.devsheet.com/project/21B11AB1-8EB5-4B3F-84BB-9DF8EA545B9C
// https://codepen.io/k3no/pen/pbYGVa    how to use linechart
export const BarChart = ({
  title,
  type,
  label1,
  label2,
  barChartBk,
  barChartData,
}) => {
  const ctx = useRef();
  Chart.defaults.global.defaultFontColor = "#8798ad";
  Chart.defaults.global.defaultFontSize = 14;

  useEffect(() => {
    new Chart(ctx.current, {
      type: type || "bar",

      data: {
        labels: barChartData.label,
        datasets: barChartData.datas.map((data) => {
          return {
            data: data.data,
            backgroundColor: data.color,
            barPercentage: 0.1,
            barThickness: 5,
            maxBarThickness: 7,
          };
        }),
      },
      options: {
        cornerRadius: 20,
        barRoundness: 0.3,
        maintainAspectRatio: false,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                color: "#EDEFF5",
                display: type ? false : true,
                borderDash: [8, 4],
                drawBorder: false,
                showBorder: false,
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              gridLines: {
                drawBorder: false,
                display: type ? true : false,
              },
            },
          ],
        },
        legend: {
          display: false,
        },
      },
    });
  });

  return (
    <BarChartMain barChartBk={barChartBk}>
      <OverFlowScrollBar className="container scrolling">
        <div className="canvas">
          <canvas width="400" height="400" ref={ctx}></canvas>
        </div>
      </OverFlowScrollBar>
    </BarChartMain>
  );
};

export const LineChart = ({
  lineBkCol,
  lineChartBk,
  hovLabel,
  lineChartData,
  scalePosition,
  dropdown,
  title,
  labels,
  tension,
}) => {
  const ctx = useRef();

  useEffect(() => {
    new Chart(ctx.current, {
      type: "line",
      data: {
        labels: lineChartData.label,
        datasets: lineChartData.datas.map((data) => {
          return {
            label: hovLabel || "Data",
            backgroundColor: lineBkCol || data.lineBkCol,
            borderColor: data.color,
            data: data.data,
            borderWidth: 2,
            pointBackgroundColor: "white",
            pointBorderColor: data.color,
            pointBorderWidth: 2,
            lineTension: tension || 0,
            pointHoverRadius: 7,
            pointHoverBackgroundColor: "white",
            pointHoverBorderColor: data.color,
            fill: true,
            pointHoverBorderWidth: 2,
            pointHitRadius: 7,
            spanGaps: false,
          };
        }),
      },

      options: {
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        plugins: {
          filler: {
            propagate: true,
          },
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              position: scalePosition || "left",
              gridLines: {
                color: "#EDEFF5",
              },
            },
          ],
          xAxes: [
            {
              ticks: {
                beginAtZero: true,
              },

              stacked: true,
              gridLines: {
                color: "#EDEFF5",
                display: false,
              },
            },
          ],
        },
      },
    });
  });

  return (
    <LineChartMain lineChartBk={lineChartBk}>
      <OverFlowScrollBar className="scrolling">
        <div className="canvas">
          <canvas width="400" height="400" ref={ctx}></canvas>
        </div>
      </OverFlowScrollBar>
    </LineChartMain>
  );
};

export const CustomeChart = ({
  lineBkCol,
  lineChartBk,
  hovLabel,
  chartData,
  dropdown,
  title,
  tension,
  labels,
  type,
  theadBkColor,
  tableHead,
  tableBody,
  theadColor,
  tbodyColor,
  bottomGap,
  pageSize,
  paginator,
  prevNext,
  initialState,
}) => {
  const [chartType, setChartType] = useState(initialState || 1);
  return (
    <LineChartWrap className="line-chart-wrap">
      <LineChartMain lineChartBk={lineChartBk}>
        <header>
          <div className="title">
            {title ? (
              typeof title === "object" ? (
                <h2>{title}</h2>
              ) : (
                title
              )
            ) : null}
          </div>

          <div className="sub-title">
            <FlexibleDiv
              className="dropdown-container"
              justifyContent="space-between"
              width="auto"
              flexWrap="wrap"
            >
              {dropdown
                ? dropdown.map((modal) => <div className="sort">{modal}</div>)
                : null}
            </FlexibleDiv>

            <FlexibleDiv className="label-and-vieww-type" width="auto">
              <ul
                justifyContent="flex-end"
                className="select-view-type-container"
                width="max-content"
              >
                <li
                  className={
                    chartType === 1
                      ? "trueChartType select-view-type-list-item"
                      : "select-view-type-list-item"
                  }
                  onClick={() => setChartType(1)}
                >
                  <AiOutlineLineChart />
                </li>
                <li
                  className={
                    chartType === 2
                      ? "trueChartType select-view-type-list-item"
                      : "select-view-type-list-item"
                  }
                  onClick={() => setChartType(2)}
                >
                  <AiOutlineBarChart />
                </li>
                <li
                  className={
                    chartType === 3
                      ? "trueChartType select-view-type-list-item"
                      : "select-view-type-list-item"
                  }
                  onClick={() => setChartType(3)}
                >
                  <AiOutlineTable />
                </li>
              </ul>

              <FlexibleDiv
                className="label-container"
                width="auto"
                justifyContent="flex-end"
                flexWrap="wrap"
              >
                {labels
                  ? labels.map((label) => (
                      <Label className="label" color={label.color}>
                        {label.label}
                      </Label>
                    ))
                  : null}
              </FlexibleDiv>
            </FlexibleDiv>
          </div>
        </header>

        {chartType === 1 ? (
          <LineChart
            hovLabel={hovLabel}
            lineChartData={chartData}
            tension={tension}
          />
        ) : chartType === 2 ? (
          <BarChart barChartData={chartData} type={type} />
        ) : chartType === 3 ? (
          <ChartTableStyles colors={labels.map((label) => label.color)}>
            <CustomTable
              theadBkColor={theadBkColor || "#f0f0f0"}
              tableHead={chartData.label}
              tableBody={chartData.datas.map((item) => item.data)}
              theadColor={theadColor || "#404142"}
              tbodyColor={tbodyColor}
              bottomGap={bottomGap}
              pageSize={pageSize || 10}
              paginator={paginator || false}
              prevNext={prevNext}
            />
          </ChartTableStyles>
        ) : null}
      </LineChartMain>
    </LineChartWrap>
  );
};
