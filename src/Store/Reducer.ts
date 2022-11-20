import { createSlice } from "@reduxjs/toolkit";
import { State } from "../Shared/Types";
import { setToggleDrawerAction } from "./Actions";

export const initialState: any = {
    toggleDrawer: false,
};

const slice = createSlice({
    name: 'MainReducer',
    initialState,
    reducers: {},
    extraReducers: {
        [setToggleDrawerAction.toString()]: (state: State) => {
            state.toggleDrawer = !state.toggleDrawer;
        },
    }
});

const { reducer } = slice;
export default reducer;
