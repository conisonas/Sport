<template>
  <header class="bg-at-light-green text-white">
    <nav class="container py-5 px-4 flex flex-col gap-4 items-center sm:flex-row">
      <div class="flex items-center gap-x-4">
        <img class="w-14" src="../assets/images/dumbbell-light.png" alt="" />
        <h1 class="text-lg">Sport</h1>
      </div>
      <ul class="flex flex-1 justify-end gap-x-10">
        <router-link class="cursor-pointer" :to="{ name: 'Home' }">首页</router-link>
        <router-link v-if="user1" class="cursor-pointer" :to="{ name: 'Create' }">创建</router-link>
        <router-link v-if="!user1" class="cursor-pointer" :to="{ name: 'Login' }">登录</router-link>
        <li v-if="user1" @click="logout" class="cursor-pointer">登出</li>
      </ul>
    </nav>
  </header>
</template>
<script setup>

  import { computed } from "vue";
  import { supabase } from "../supabase/init";
  import { useUserStore } from '@/store/index';
  import { storeToRefs } from 'pinia';
  import { useRouter } from "vue-router";

  // 获取用户
  const ustore = useUserStore();
  const user1 = computed(() => ustore.user);

  const {
    user
  } = storeToRefs(ustore);
  const router = useRouter();

  // 登出功能
  const logout = async () => {
    await supabase.auth.signOut();
    router.push({ name: "Home" });
  }
</script>