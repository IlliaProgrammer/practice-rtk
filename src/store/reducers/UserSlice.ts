
import { IUser } from "../../models/IUser";
import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { count } from "console";

interface IUserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
}

const initialState: IUserState = {
    users: [],
    isLoading: false,
    error: "",
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        usersFetching(state){
            state.isLoading = true;

        },
        usersFetchingSuccess(state,  action: PayloadAction<IUser[]>){
            state.isLoading = false;
            state.error = "";
            state.users = action.payload;   
        },
        usersFetchingErorr(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export default userSlice.reducer;