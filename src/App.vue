<template>
  <div class="min-h-full font-Poppins box-border">
    <Navigation />
    <router-view />
  </div>
</template>

<script setup>
  import Navigation from "./components/Navigation.vue";
  import { ref } from "vue";
  import { supabase } from "./supabase/init";
  import { useUserStore } from '@/store/index';
  import { storeToRefs } from 'pinia';
  const appReady = ref(null);

  // 检查用户是否已经登入
  const user1 = supabase.auth.getUser();

  // 如果用户不存在
  if (!user1) {
    appReady.value = true;
  }

  // auth状态改变时
  // 用户已经登入
  const ustore = useUserStore();
  supabase.auth.onAuthStateChange((_, session) => {
    console.log("hello");
    ustore.setUser(session);
    appReady.value = true;
  });




</script>

<style scoped>

</style>