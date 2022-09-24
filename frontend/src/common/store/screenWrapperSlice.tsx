import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { WrapperItemName } from '../components/ScreenWrapper/screenWrapeprItems/screenWrapperItems';


interface ScreenWrapperState {
    element: WrapperItemName,
}

const initialState: ScreenWrapperState = {
    element: WrapperItemName.NONE,
}

export const screenWrapperSlice = createSlice({
    name: 'screenWrapper',
    initialState,
    reducers: {
        clearScreenWrapper: (state) => {
          console.log("clear")
          state.element = initialState.element;
        },
        setScreenWrapper: (state, action: PayloadAction<WrapperItemName>) => {
          state.element = action.payload;
        },
    },
})

export const { clearScreenWrapper, setScreenWrapper } = screenWrapperSlice.actions;

export default screenWrapperSlice.reducer;