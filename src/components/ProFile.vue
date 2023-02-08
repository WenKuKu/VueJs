<template>
  <div
    class="w-full h-24 bg-white items-center justify-between flex p-7 font-semibold text-xl "
  >
    <section>
      <div>Hello Pro!</div>
    </section>
    <section>
      <label
        for="default-search"
        class="text-xs font-medium sr-only dark:text-white"
      >
      </label>
      <div class="relative bg-gray-200 w-52 h-10 rounded-full">
        <input
          type="search"
          id="default-search"
          class="p-2 text-xs rounded-full bg- bg-gray-200 text-black m-1"
          placeholder="Search..."
        />
        <button
          type="submit"
          class="absolute p-1 m-1.5 left-40 bg-violet-500 rounded-full hover:bg-violet-400"
        >
          <svg
            class="w-5 h-5 text-gray-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
    </section>
    <section>
      <div
        class="w-full h-16 justify-between bg-white rounded-full drop-shadow-xl flex p-1 m-4 text-lg text-gray-500 font-semibold"
      >
        <img
          class="h-14 w-14 rounded-full flex cursor-pointer"
          src="../assets/picture/IMG_2586.JPG"
          alt=""
        />
        <div class="text-sm mt-1">
          Owen KuKu
          <p>KuKu999net@gmail.com</p>
        </div>
        <ul class="flex justify-center items-center h-7 w-7 ml-3 mt-3 mr-4 cursor-pointer">
          <img class="bg-gray-200 rounded-full p-1 " src="../assets/icon/Doorbell.png" alt="" />
          <img class="bg-gray-200 rounded-full m-1 p-1" src="../assets/icon/Settings.png" alt="" />
        </ul>
      </div>
    </section>
  </div>
</template>

<script></script>
