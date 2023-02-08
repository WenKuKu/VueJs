<template>
  <div class="drop-shadow-xl rounded-lg bg-white h-screen w-36">
    <section>
      <div>
        <img
          class="flex w-24 h-24 mx-6 mb-4"
          src="../assets/logo/cross-platform.png"
        />
      </div>
    </section>
    <section class="text-sm mt-3">
      <div>
        <div v-for="(item, index) in BarnavIcone" :key="index">
          <router-link :to="item.path">
            <li
              class="items-center flex text-stone-600 cursor-pointer hover:bg-fuchsia-500 hover:text-white rounded-full"
            >
              <img class="w-10 h-10 p-2" :src="item.icon" />
              {{ item.labal }}
            </li></router-link
          >
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import DashboarIcone from "../assets/icon/dashboard.png";
import CoursesIcone from "../assets/icon/online-course.png";
import StudentIcone from "../assets/icon/Student.png";
import TeacherIcone from "../assets/icon/Teacher.png";
import TimetableIcone from "../assets/icon/timetable.png";
import ResultIcone from "../assets/icon/results.png";
import Messengercone from "../assets/icon/messenger.png";
const BarnavIcone = [
  {
    labal: "Dashboard",
    path: "/",
    icon: DashboarIcone,
  },

  {
    labal: "Courses",
    path: "/Courses",
    icon: CoursesIcone,
  },

  {
    labal: "Student",
    path: "/Student",
    icon: StudentIcone,
  },

  {
    labal: "Teacher",
    path: "/",
    icon: TeacherIcone,
  },

  {
    labal: "Timetable",
    path: "/",
    icon: TimetableIcone,
  },

  {
    labal: "Result",
    path: "/",
    icon: ResultIcone,
  },

  {
    labal: "Messenger",
    path: "/",
    icon: Messengercone,
  },
];
</script>
