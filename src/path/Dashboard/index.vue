<template>
  <div class="bg-fuchsia-100 h-full">
    <section>
      <div class="flex">
        <div v-for="(item, index) in BarnavIcone" :key="index">
          <li
            class="text-stone-600 h-32 w-32 rounded-xl ml-6 mt-6 text-xs flex justify-center items-center flex-col"
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
      <div class="bg-white relative m-6 p-3 rounded-xl h-52 w-96">
        <ul>
          Statistics
        </ul>
        <ul class="h-52 w-full" id="main"></ul>
      </div>
    </section>

    <section>
      <div></div>
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
onMounted(() => {
  var myChart = echarts.init(document.getElementById("main"));
  myChart.setOption({
    xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [
        120,
        {
          value: 200,
          itemStyle: {
            color: '#a90000'
          }
        },
        150,
        80,
        70,
        110,
        130
      ],
      type: 'bar'
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
