<template>
  <div v-for="issue in issues" :key="issue.id">
    <router-link :to="{name:'Article',params:{id:issue.number}}">
      <p>
        {{ issue.title }}
      </p>
    </router-link>
    <a-divider/>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import {Issue} from "../types/Issue";

export default {
  name: "Home",
  data() {
    return {
      issues: new Array<Issue>(),
    };
  },
  created() {
    this.getIssues();
  },
  methods: {
    async getIssues() {
      let {data} = await axios.get(
          "https://api.github.com/repos/yufield/yufield.github.io/issues"
      );
      this.issues.push(...data);
    },
  },
}
</script>

<style scoped>

</style>