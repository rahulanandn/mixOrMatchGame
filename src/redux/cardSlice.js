import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    startGame:false,
    totalFlips:0,
    totalMatches:0,
    open: false,
    flipCount:0,
    prevCard:{},
    currentCard:{},
    allCards: {
        'Bat': false, 
        'Bones': false, 
        'Cauldron': false, 
        'Dracula': false, 
        'Eye': false, 
        'Ghost': false, 
        'Pumpkin': false, 
        'Skull': false,
    },
    clickedCards: [{"clicked":false,"id":"bat1","name":"Bat"},{"clicked":false,"id":"bat2","name":"Bat"},
    {"clicked":false,"id":"bones1","name":"Bones"},{"clicked":false,"id":"bones2","name":"Bones"},
    {"clicked":false,"id":"cauldron1","name":"Cauldron"},{"clicked":false,"id":"cauldron2","name":"Cauldron"},
    {"clicked":false,"id":"dracula1","name":"Dracula"},{"clicked":false,"id":"dracula2","name":"Dracula"},
    {"clicked":false,"id":"eye1","name":"Eye"},{"clicked":false,"id":"eye2","name":"Eye"},{"clicked":false,"id":"ghost1","name":"Ghost"},
    {"clicked":false,"id":"ghost2","name":"Ghost"},{"clicked":false,"id":"pumpkin1","name":"Pumpkin"},{"clicked":false,"id":"pumpkin2","name":"Pumpkin"},
    {"clicked":false,"id":"skull1","name":"Skull"},{"clicked":false,"id":"skull2","name":"Skull"}],
}

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        setStartGame (state, action) {
            state.startGame = action.payload
        },
        openCard (state, action) {
            const { 
                id, 
                cardName 
            } = action.payload
            const card = state.clickedCards.find(card => card.id === id)
            card.clicked = true;
        },
        closeCardState (state) {
            state.open = false
        },
        initiateFlipCount (state) {
            state.flipCount = 0
        },
        setPrevCard (state, action) {
            const { id, cardName } = action.payload
            if (state.flipCount === 0) {
                state.prevCard.id = id
                state.prevCard.name = cardName
                state.flipCount = state.flipCount + 1
                state.totalFlips = state.totalFlips + 1
            }
        },
        setCurrentCard (state, action) {
            const { id, cardName } = action.payload
            if (state.flipCount === 1) {
                state.open = true
                state.currentCard.id = id
                state.currentCard.name = cardName
                state.flipCount = state.flipCount + 1
                state.totalFlips = state.totalFlips + 1
            }
        },
        cardMatch (state) {
            if ( state.prevCard.name === state.currentCard.name && state.prevCard.id !== state.currentCard.id) {
                let name = state.currentCard.name
                state.allCards[name] = true
                state.prevCard = {}
                state.currentCard = {}
                state.totalMatches = state.totalMatches + 1;
            }
            else {
                const prevClickedCard = state.clickedCards.find(card => card.id === state.prevCard.id)
                const currentClickedCard = state.clickedCards.find(card => card.id === state.currentCard.id)
                prevClickedCard.clicked = false
                currentClickedCard.clicked = false
            }
        }
    }
})

export const { setStartGame, initiateFlipCount, setPrevCard, setCurrentCard, cardMatch, openCard, closeCardState } = cardsSlice.actions
export default cardsSlice.reducer