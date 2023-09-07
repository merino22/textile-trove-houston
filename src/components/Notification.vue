<template>  
    <div class="fixed right-4 top-4 z-50 rounded-md bg-green-500 px-4 py-2 text-white transition hover:bg-green-600" :class="notificationClass">
        {{ message }}
    </div>
</template>

<script>
export default {
  props: {
    message: String,
    type: String,
  },
  computed: {
    notificationClass() {
      return `notification-${this.type}`;
    },
  },
};
</script>

<style scoped>

</style>