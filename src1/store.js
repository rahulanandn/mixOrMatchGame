import { configureStore } from '@reduxjs/toolkit'
import cardsReducer from './redux/cardSlice';

export default configureStore({
    reducer: {
        cards: cardsReducer
    }
})