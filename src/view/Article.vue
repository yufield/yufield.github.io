<template>
  <div v-html="text"></div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import axios from "axios";
import {Issue} from "../types/Issue";

export default defineComponent({
  name: 'Article',
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      issue: <Issue>null,
      text: null
    };
  },
  created() {
    this.getIssue(this.id);
  },
  methods: {
    async getIssue(id: number) {
      let response = await axios.get(
          `https://api.github.com/repos/yufield/yufield.github.io/issues/${id}`
      );
      this.issue = response.data;
      response = await axios.post("https://api.github.com/markdown", {
        text: this.issue.body
      })
      this.text = response.data
    },
  },
})
</script>

<style scoped>
a {
  color: #42b983;
}
</style>