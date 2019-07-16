<template>
  <div class="container">
    <md-content>
      <div>
        <span class="md-display-4">Change <span id="your">your</span> life <span id="now">NOW</span>!</span>
      </div>
      <div>
        Research has shown that programs of this type really helps
      </div>
      <div>
        <router-link to="signup"><md-button class="md-raised md-primary">Sign Up!</md-button></router-link>
        <router-link to="signin"><md-button class="md-primary">Sing In</md-button></router-link>
      </div>
      <hr>
      <div class="about">
        <h1>What is this?</h1>
        <p>It's a program that will help you keep habits, get out of addiction, gain new skills and become the best version of yourself.</p>
        <h2>Nice, but how?</h2>
        <p>You can do it! All you need is a good training plan with progress. This program gives you the best tools for this purpose. Thanks to them, you can observe how much progress you have made, how many goals you have left.</p>
        <h2>How much is it?</h2>
        <p>Absolutly nothing! I made this program only for myself to better manage my life and test my programming skills. If I can help someone, it will be a sufficient reward for me.</p>
        <h2>I want to try!</h2>
        <p>Great! Just click signup button, fill the forms and enjoy your new life organiser. Good luck!</p>
      </div>
    </md-content>
  </div>
</template>

<script>
export default {
  name: "Welcome"
}
</script>

<style lang="scss" scoped>
.container{
  margin: 20px;
}

#now{
  color: red;
  font-weight: 900;
}

#your{
  font-weight: 900;
  font-style: italic;
}

.about{
  text-align: left;
}
</style>


