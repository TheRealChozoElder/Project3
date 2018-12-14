//ToDo: Import vue and name it Vue
//ToDo: Import vue-router and name it VueRouter
//ToDo: Import vue-resource and name it VueResource

//ToDo: Import App.vue and name it App
//ToDo: Import routes.js and use the {} passing routes
//ToDo: Import store/store.js and name it store

//ToDo Initialize VueRouter using Vue.use()
//ToDo Initialize VueResource using Vue.use()

Vue.http.options.root = //ToDo: Set Equal to your Firebase Database URL

Vue.filter('currency', (value) => {
  //ToDo: Return value.toLocalString(), Add $ sign before the value
});

const router = new VueRouter({
    //ToDo: Set router mode to history
    //ToDo: Pass routes constant imported from above
});

new Vue({
  el: '#app',
    //ToDo: Pass the router constant to vue application
    //ToDo: Pass store constant to vue application,
  render: h => h(App)
})
