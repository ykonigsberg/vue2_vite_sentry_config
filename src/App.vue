<template>
    <div id="app">
      <h1>Hello Vue 2.x with</h1>
      <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App',
  };
  </script>
  
  <style>
  /* Add your styles here */
  </style>