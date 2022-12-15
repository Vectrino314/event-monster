<script setup>

</script>

<template>
  <div class="wrapper">
    <h2 class="upper">Your Next Meetup</h2>
    <a href="#" class="meetup">Code & Coffee & Cocktails</a>
    <h3 class="group">Girl Develop It Dayton</h3>
    <p class="details">
    <span class="row">
      <i class="material-icons md-36 icon">event</i>
      <span class="row-item">
      <time>Tue Aug 2 at 5:30PM</time>
      </span>
    </span>

      <span class="row">
      <i class="material-icons md-36 icon">room</i>
      <span class="row-item">
      <strong>Proto BuildBar</strong>
      <br>534 E 1st St
      </span>
    </span>
    </p>
  </div>
</template>

<style scoped>
body {
  color: white;
  font-family: 'Lato', sans-serif;
  width: 400px;
  margin: 50px auto;
  white-space: nowrap;
}

.wrapper {
  background: #ed1c40;
  display: flex;
  flex-direction: column;
  padding: 1.5em;
  width: 456px;
  height: 326px;
  border-radius: 10px;
}

.upper {
  border-bottom: 1px solid rgba(255, 255, 255, .7);
  font-weight: 400;
  font-size: 24px;
  line-height: 2;
  text-transform: uppercase;
}

.meetup {
  color: #fff;
  font-size: 32px;
  font-weight: 700;
  line-height: 1;
  text-decoration: none;
}

.group {
  flex-grow: 1;
}

.icon {
  display: inline-block;
  position: relative;
  top: -.1em;
  vertical-align: middle;
}

.details {
  display: flex;
  flex-direction: column;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-top: 10px;
}

.row-item {
  padding-left: 10px;
}
</style>