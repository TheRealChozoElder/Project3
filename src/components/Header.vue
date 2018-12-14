<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <!--ToDo: Create a router-link that goes to '/' root, add class navbar-brand and add Stock Trader text-->
            </div>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <!--ToDo: Create router-link that goes to '/portfolio'
                        <!--ToDo: set activeClass to "active", add tag attribute set to li, and add Portfolio text-->

                    <!--ToDo: Create router-link that goes to '/stocks'
                        <!--ToDo: set activeClass to "active", add tag attribute set to li, and add Stocks text-->
                </ul>
                <strong class="navbar-text navbar-right">Funds:
                    <!--ToDo: Call funds computed function and pipe the currency filter that is created in main.js-->
                </strong>
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <!--ToDo: Add click event to <a> that calls endDay method-->
                        <a href="#" >End Day</a>
                    </li>

                    <!--ToDo: Inside <li> Bind to class using :class that passes an object {} called open and set it to isDropdownOpen-->
                        <!--ToDo: Add click event that toggles isDropdownOpen to true and false-->
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Save & Load <span class="caret"></span></a>
                        <ul class="dropdown-menu">
                            <!--ToDo: Add click event that calls the saveData method-->
                            <li><a href="#">Save Data</a></li>
                            <!--ToDo: Add click event that calls the loadData method-->
                            <li><a href="#">Load Data</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    //ToDo: Import mapActions from vuex

    export default {
        data() {
          return {
              //ToDo: Create data object called isDropdownOpen and set it to false
          }
        },
        computed: {
        //ToDo: Create a computed function called funds
            //ToDo: Have funds() return this.$store.getters.funds
        },
        methods: {
            //ToDo: Create ...mapActions method
                //ToDo: Call randomizeStocks: 'randomizeStocks'
                //ToDo: Call fetchData: 'loadData'

            //ToDo: Create endDay method
                //ToDo: Call randomizeStocks()

            //ToDo: Create SaveData method
                //ToDo: Create const called data that holds an object
                    //ToDo: Set funds: to the $store getters funds
                    //ToDo: Set stockPortfolio: to the $store getters stockPortfolio
                    //ToDo: Set stocks: to the $store getters stocks
                //ToDo: Outside the data object use $http, using .put pass 'data.json' and the data object

            //ToDo: Create loadData method
                //ToDo: Call fetchData()
        }
    }
</script>