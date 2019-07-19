<template>
  <div>
    <md-field>
      <label>Personal Notepad (saved automatically)</label>
      <md-textarea v-model="textarea"></md-textarea>
    </md-field>
  </div>
</template>

<script>
export default {
  name: 'notepad',
  data: function(){
    return{
      textarea: "",
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

</style>
