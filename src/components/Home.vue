<template>
    <div>
        <h1>Trade or View your Portfolio</h1>
        <h6>You may Save & Load your Data</h6>
        <h6>Click on 'End Day' to begin a New Day!</h6>
        <hr>

        <p>Your Funds:
            <!--ToDo: Call funds computed function and pipe the currency filter that is created in main.js-->
        </p>
    </div>
</template>

<script>
    export default {
        computed: {
            //ToDo: Create a computed function called funds
                //ToDo: Have funds() return this.$store.getters.funds
        }
    }
</script>