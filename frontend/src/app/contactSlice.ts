import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export enum ContactValueName {
  GET_CV, LEAVE_TEXT, SOCIAL_LINKS, CONTACT_ME
}
export interface ContactState {
    states: {
        [ContactValueName.GET_CV]: boolean,
        [ContactValueName.LEAVE_TEXT]: boolean,
        [ContactValueName.SOCIAL_LINKS]: boolean,
        [ContactValueName.CONTACT_ME]: boolean,
    }
}


const initialState: ContactState = {
    states: {
      [ContactValueName.GET_CV]: false,
      [ContactValueName.LEAVE_TEXT]: false,
      [ContactValueName.SOCIAL_LINKS]: false,
      [ContactValueName.CONTACT_ME]: false,
    }
}

export const contactSlice = createSlice({
    name: 'contact',
    initialState,
    reducers: {
        closeAll: (state) => {
            state.states[ContactValueName.GET_CV] = false;
            state.states[ContactValueName.LEAVE_TEXT] = false;
            state.states[ContactValueName.SOCIAL_LINKS] = false;
            state.states[ContactValueName.CONTACT_ME] = false;
        },
        toggleOne: (state, action: PayloadAction<ContactValueName>) => {
          if (action.payload === ContactValueName.GET_CV) {
            state.states[ContactValueName.GET_CV] = !state.states[ContactValueName.GET_CV]
            state.states[ContactValueName.LEAVE_TEXT] = false;
            state.states[ContactValueName.SOCIAL_LINKS] = false;
            state.states[ContactValueName.CONTACT_ME] = false;
          } else if (action.payload === ContactValueName.LEAVE_TEXT) {
            state.states[ContactValueName.GET_CV] = false;
            state.states[ContactValueName.LEAVE_TEXT] = !state.states[ContactValueName.LEAVE_TEXT];
            state.states[ContactValueName.SOCIAL_LINKS] = false;
            state.states[ContactValueName.CONTACT_ME] = false;
          } else if (action.payload === ContactValueName.SOCIAL_LINKS) {
            state.states[ContactValueName.GET_CV] = false;
            state.states[ContactValueName.LEAVE_TEXT] = false;
            state.states[ContactValueName.SOCIAL_LINKS] = !state.states[ContactValueName.SOCIAL_LINKS];
            state.states[ContactValueName.CONTACT_ME] = false;
          } else if (action.payload === ContactValueName.CONTACT_ME) {
            state.states[ContactValueName.GET_CV] = false;
            state.states[ContactValueName.LEAVE_TEXT] = false;
            state.states[ContactValueName.SOCIAL_LINKS] = false;
            state.states[ContactValueName.CONTACT_ME] = !state.states[ContactValueName.CONTACT_ME];
          }
        },
    },
})

export const { closeAll, toggleOne } = contactSlice.actions;

export default contactSlice.reducer;