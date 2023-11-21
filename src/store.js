import customerReducers from './customerSilce'

const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
        devTools:false,
    reducer:{
        customers:customerReducers

    }
})