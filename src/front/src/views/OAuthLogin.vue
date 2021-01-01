<template>
  <div></div>
</template>

<script>
import { findGetParameter } from '@/scripts/common';

export default {
  data() {
    return {
      userId: findGetParameter('userId'),
    };
  },
  created() {
    this.$store.dispatch('fnGetOauthUser', this.userId);
  },
};
</script>

<style></style>
