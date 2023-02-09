<template>
  <div class="bg-fuchsia-100 h-full">
    <section>
      <div class="flex">
        <div v-for="(item, index) in BarnavIcone" :key="index">
          <li
            class="text-stone-600 h-32 w-40 rounded-xl ml-6 mt-6 text-xs flex justify-center items-center flex-col"
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
      <ul class="bg-white relative m-6 p-2  rounded-xl h-52 w-96">
        <li>
          Statisticss
        </li>
        <ul class="h-52 w-full -mt-11 " id="main"></ul>
      </ul>

      <!-- Center -->

      <ul class="bg-white relative m-6 p-3 rounded-xl h-52 w-72 ">
        <li>
          Course Activites
        </li>
        <ul class="h-52 w-full -mt-2 " id="lain"></ul>
      </ul>
    </div>
   
    </section>

    <section>
      <div class="h-full w-60 bg-white">
      
      </div>
    </section>

    <section>
      <div></div>
    </section>
  </div>
</template>

<script setup>
import TotalStudentIcone from "../../assets/icon/Student Male.png";
import TotalTeacherIcone from "../../assets/icon/School Director.png";
import TotalCoursesIcon from "../../assets/icon/Course Assign.png";
import FacultyRoomIcon from "../../assets/icon/Room.png";
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
});

// //Chart pie

onMounted(() => {
  var myChart = echarts.init(document.getElementById("lain"));
  myChart.setOption({
    tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['30%', '60%'],
      avoidLabelOverlap: false,
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 15,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: [
        { value: 1000, name: 'Prosess' },
        { value: 250, name: 'In Process' },
      ]
    }
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
];
</script>
