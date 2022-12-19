import { FC } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  elements: {
    line: {
      fill: false,
    },
  },
  title: {
    display: false,
  },
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      scaleLabel: {
        display: false,
      },
      grid: {
        display: false,
      },
      ticks: {
        color: "#D6D6D6",
        beginAtZero: true,
      },
    },
    y: {
      display: true,
      scaleLabel: {
        display: false,
      },
      ticks: {
        color: "#D6D6D6",
        display: false,
        beginAtZero: true,
        mirror: false,
        suggestedMin: 0,
      },
      grid: {
        display: true,
      },
    },
  },
};

const labels = ["1 Day", "1 Week", "1 Month", "3 Month"];

export const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "#00aec7",
      backgroundColor: "#00aec7",
    },
    {
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: "#20677c",
      backgroundColor: "#20677c",
    },
  ],
};

const Chart: FC = () => {
  return (
    <>
      <Line options={options} data={data} />
    </>
  );
};

export default Chart;
