<template>
  <header class="bg-at-light-green text-white">
    <nav class="container py-5 px-4 flex flex-col gap-4 items-center sm:flex-row">
      <div class="flex items-center gap-x-4">
        <img class="w-14" src="../assets/images/dumbbell-light.png" alt="" />
        <h1 class="text-lg">Sport</h1>
      </div>
      <ul class="flex flex-1 justify-end gap-x-10">
        <router-link class="cursor-pointer" :to="{ name: '' }">首页</router-link>
        <router-link class="cursor-pointer" :to="{ name: '' }">创建</router-link>
        <router-link class="cursor-pointer" :to="{ name: '' }">登录</router-link>
       
      </ul>
    </nav>
  </header>
</template>