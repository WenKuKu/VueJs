<template>
  <div class="grid grid-cols-2">
    <div>
      <section>
        <div class="flex">
          <div v-for="(item, index) in BarnavIcone" :key="index">
            <li
              class="text-stone-600 h-28 w-36 rounded-xl ml-7 mt-6 text-xs flex justify-center items-center flex-col"
              :class="[item.color]"
            >
              <img
                class="w-14 h-14 flex justify-center items-center p-1"
                :src="item.icon"
              />
              <div class="flex-col justify-center items-center flex">
                {{ item.labal }}
                <p>{{ item.labal1 }}</p>
              </div>
            </li>
          </div>
        </div>
      </section>
      <section>
        <div class="flex">
          <ul class="bg-white relative m-6 p-2 rounded-xl h-44 w-96">
            <li>Statisticss</li>
            <ul class="h-44 -mt-11" id="main"></ul>
          </ul>

          <!-- Center -->

          <ul class="bg-white relative m-6 p-2 rounded-xl h-44 w-60">
            <li>Course Activites</li>
            <ul class="h-44 -mt-2" id="lain"></ul>
          </ul>
        </div>
      </section>

      <section class="bg-white rounded-md ml-6 shadow-md">
        <div class="flex justify-between py-2 pl-2">
          <div class="">Database</div>
          <div class="flex mr-2">
            <button class="px-2">Teacher</button>
            <button class="px-2">Student</button>
            <button class="px-2">Staff</button>
          </div>
        </div>
        <div>
          <table class="table-auto w-full">
            <thead>
              <tr class="border-b-2 border-solid">
                <td class="pl-3">Student name</td>
                <td>Score</td>
                <td>Summittes</td>
                <td>Grade</td>
                <td>Pass/Fail</td>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b-2" v-for="(item, index) in Std" :key="index">
                <td class="flex items-center">
                  <img
                    class="w-10 h-10 rounded-full mx-2 p-1"
                    :src="item.icon"
                  />{{ item.std }}
                </td>
                <td>{{ item.score }}</td>
                <td>{{ item.summittes }}</td>
                <td>{{ item.grade }}</td>
                <td class="text-stone-600 rounded-xl" :class="[item.color]">
                
                  {{ item.pass }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
    <div class="bg-white h-96 ml-4 p-4">Calendar</div>
  </div>
</template>

<script setup>
import TotalStudentIcone from "../../assets/icon/Student Male.png";
import TotalTeacherIcone from "../../assets/icon/School Director.png";
import TotalCoursesIcon from "../../assets/icon/Course Assign.png";
import FacultyRoomIcon from "../../assets/icon/Room.png";
import AnusoneDvd from "../../assets/picture/IMG_2586.png";
import Sonelavong from "../../assets/picture/sone lavong_n.png";
import Nutnoel from "../../assets/picture/IMG_2586.png";
import Pinmook from "../../assets/picture/sone lavong_n.png";

import * as echarts from "echarts";
import { onMounted } from "@vue/runtime-core";

//Chart bar

onMounted(() => {
  var myChart = echarts.init(document.getElementById("main"));
  myChart.setOption({
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        data: ["2017", "2018", "2019", "2020", "2021", "2022"],
        axisTick: {
          alignWithLabel: true,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Direct",
        type: "bar",
        barWidth: "35%",
        data: [
          190,
          650,
          400,
          {
            value: 650,
            itemStyle: {
              color: "#DB00FF",
            },
          },
          800,
          600,
        ],
      },
    ],
  });

  // //Chart pie

  var myChart = echarts.init(document.getElementById("lain"));
  myChart.setOption({
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["30%", "60%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 12,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1000, name: "Prosess" },
          { value: 250, name: "In Process" },
        ],
      },
    ],
  });
});

const BarnavIcone = [
  {
    labal: "Total Student",
    labal1: "1120",
    path: "/",
    icon: TotalStudentIcone,
    color: "bg-purple-300",
  },
  {
    labal: "Total Teacher",
    labal1: "120",
    path: "/",
    icon: TotalTeacherIcone,
    color: "bg-red-300",
  },
  {
    labal: "Total Courses",
    labal1: "15",
    path: "/",
    icon: TotalCoursesIcon,
    color: "bg-blue-300",
  },
  {
    labal: "Faculty Room",
    labal1: "100",
    path: "/",
    icon: FacultyRoomIcon,
    color: "bg-orange-200",
  },

  // Database
];

const Std = [
  {
    std: "Anusone Sidalavilay",
    icon: AnusoneDvd,
    score: "80/100",
    summittes: "11/10/22-10 AM",
    grade: "Excellent",
    pass: "Pass",
    color: "bg-green-200",
  },
  {
    std: "Anusone Silavong",
    icon: Sonelavong,
    score: "35/100",
    summittes: "11/10/22-10 AM",
    grade: "Poor",
    pass: "Fail",
    color: "bg-red-400",
  },
  {
    std: "Pin Mook",
    icon: Pinmook,
    score: "70/100",
    summittes: "11/10/22-10 AM",
    grade: "Average",
    pass: "Pass",
    color: "bg-green-200",
  },
  {
    std: "Nut Nole",
    icon: Nutnoel,
    score: "80/100",
    summittes: "11/10/22-10 AM",
    grade: "Excellent",
    pass: "Pass",
    color: "bg-green-200",
  },
];
</script>

<style scoped>
button {
  letter-spacing: 2px;

  display: inline-block;
  text-align: center;
  font-weight: bold;

  border: 3px solid #db00ff;
  border-radius: 2px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.1);
  color: #db00ff;
  text-decoration: none;
  transition: 0.3s ease all;
  z-index: 1;
}

button:before {
  transition: 0.5s all ease;
  position: absolute;
  top: 0;
  left: 50%;
  right: 50%;
  bottom: 0;
  opacity: 0;
  content: "";
  background-color: #db00ff;
  z-index: -1;
}

button:hover,
button:focus {
  color: white;
}

button:hover:before,
button:focus:before {
  transition: 0.5s all ease;
  left: 0;
  right: 0;
  opacity: 1;
}

button:active {
  transform: scale(0.9);
}
</style>
