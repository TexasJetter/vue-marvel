<template>
  <div id="app">
    <div class="header">
      <img
        src="/assets/Captain_America_old_shield_35.png"
        style="float: left; margin-right: 10px; margin-top:5px;"
      >
      <router-link to="/characters">Characters</router-link>|
      <router-link to="/comics">Comics</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <div class="content">
      <router-view/>
      <p style="color:red; text-align:center;">!! Run npm install after you clone the repository !!</p>
      <p style="color:red; text-align:center;">!! Enter your Marvel API key in the \src\services\core.js file !!</p>
    </div>
    <div class="footer">
      © 2019 MARVEL
      <br>
      <a href="https://developer.marvel.com/">https://developer.marvel.com/</a>
    </div>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}
h1,
h2,
h3,
h4 {
  color: green;
}
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 50px;
  line-height: 50px;
  background-color: rgb(0, 0, 0);
  color: white;
}
.content {
  position: fixed;
  overflow: hidden;
  overflow-y: scroll;
  overflow-x: hidden;
  height: calc(100vh - 100px);
  top: 50px;
  left: 0;
  right: 0;
}
.header > a,
.footer > a {
  color: white;
}
.footer {
  position: fixed;
  bottom: 0;
  text-align: center;
  left: 0;
  right: 0;
  height: 50px;
  line-height: 25px;
  background-color: rgb(0, 0, 0);
  color: white;
}
.waitIndicator {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.25);
  text-align: center;
  /*   background-image: url(~/assets/wait-triangles-orange-37.gif);
  background-repeat: no-repeat;
  background-position: center center; */
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.tile {
  text-align: center;
  float: left;
  width: 150px;
  height: 150px;
  margin: 10px;
  padding: 3px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.15);
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.15);
}
.tile:hover {
  -webkit-box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.25);
  box-shadow: 0px 0px 5px 5px rgba(0, 0, 0, 0.25);
}
.tile > img {
  height: 80px;
}
.modal-container {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.25);
}
.modal-detail {
  position: relative;
  width: 350px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  background-color: white;
  max-height: calc(90vh - 100px);
  overflow: hidden;
  overflow-y: auto;
}
.modal-detail > img {
  width: 320px;
}
.close-x {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 25px;
  height: 20px;
  padding: 2px;
  padding-top: 5px;
  text-align: center;
  background-color: gray;
  color: white;
  border-radius: 20px;
  cursor: pointer;
}
.close-x:hover {
  background-color: black;
}

@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}
@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.rotate {
  -webkit-animation: spin 1.5s linear infinite;
  -moz-animation: spin 1.5s linear infinite;
  animation: spin 1.5s linear infinite;
}
.waitIndicator .rotate {
  margin-top: 45vh;
}
</style>
