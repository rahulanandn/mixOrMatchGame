import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    flipCount:0,
    prevCard:'',
    currentCard:'',
}

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        initiateFlipCount (state) {
            state.flipCount = 0
        },
        setPrevCard (state, action) {
            if (flipCount === 0) {
                state.prevCard = action.payload
            }
        },
        setCurrentCard (state, action) {
            if (flipCount === 1) {
                state.currentCard = action.payload
            }
        }
    }
})

export const { initiateFlipCount, setPrevCard, setCurrentCard } = cardsSlice.actions
export default cardsSlice.reducer