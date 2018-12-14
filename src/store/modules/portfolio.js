//ToDo: Create const called state that is a data object{}
    //ToDo: Create funds and set it to 10000
    //ToDo: Create an array called stocks and leave it empty


//ToDo: Create const called mutations that is a data object{}
    //ToDo: Inside mutations object create a vuex method called 'BUY_STOCK' that takes four parameters (state, {stockId, quantity, stockPrice}
        //ToDo: Create const called record that is equal to state.stocks.find(element => element.id == stockId)
        //ToDo: If (record) then set record.quantity += quantity
        //ToDo: Else push id: stockId and quantity: quantity to state.stocks
        //ToDo: Set state.funds -= stockPrice * quantity

    //ToDo: Inside mutations object create a vuex method called 'SELL_STOCK' that takes four parameters (state, {stockId, quantity, stockPrice}
        //ToDo: Create const called record that is equal to state.stocks.find(element => element.id == stockId)
        //ToDo: If (record.quantity > quantity) then set record.quantity -= quantity
        //ToDo: Else set state.stocks.splice(state.stocks.indexOf(record, 1))
        //ToDo: Set state.funds += stockPrice * quantity

    //ToDo: Inside mutations object create a vuex method called 'SET_PORTFOLIO' that takes two parameters (state, portfolio}
        //ToDo: Set state.funds equal t portfolio.funds
        //ToDo: Set state.stocks equal to portfolio.stockPortfolio if portfolio.stockPortfolio else [] (Use if else using ? and :)


//ToDo: Create const called actions that is a data object()
    //ToDo: Create sellStock that passes ({commit}, order)
    //  ToDo: Use the commit method passing 'SELL_STOCK' and order


//ToDo: Create const called getters that is a data object{}
    //ToDo: Inside getters object create stockPortfolio method that takes two parameters (state, getters)
        //ToDo: return state.stocks.map() that is a pointer function that passes stock
        //ToDo: Create const called record that is equal to state.stocks.find(element => element.id == stockId)
        //ToDo: Return an object
            //ToDo: Set id to stock.id
            //ToDo: Set quantity to stock.quantity
            //ToDo: Set name to record.name
            //ToDo: Set price to record.price
    //ToDo: Create funds method that passes state
        //ToDo: Return state.funds

export default {
    //ToDo: Export the const state, mutations, actions, and getters
}