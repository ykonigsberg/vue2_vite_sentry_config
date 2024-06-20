<template>
    <div>
      <h1>About</h1>
      <p>This is the about page.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'About',
    created: () => {
      throw new Error('This is an error from about created!')
    },
  };
  </script>
  
  <style>
  /* Add your styles here */
  </style>
  