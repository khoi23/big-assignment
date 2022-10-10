import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    userState: false,
};

const UserSlice = createSlice({
    initialState,
    name: "user",
    reducers: {
        setConfirm: (state, action) => {
            state.userState = action.payload.userState;
        },
    },
});

export const { setConfirm } = UserSlice.actions;

export const selectSetConfirm = (state) => state.user.userState;

export default UserSlice.reducer;