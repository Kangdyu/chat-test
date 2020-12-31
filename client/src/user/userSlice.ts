import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from './types';

const initialState: IUser = {
  id: '',
  nickname: '',
  color: 'black',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setId(state, action: PayloadAction<string>) {
      state.id = action.payload;
    },
    setNickname(state, action: PayloadAction<string>) {
      state.nickname = action.payload;
    },
    setNicknameColor(state, action: PayloadAction<string>) {
      state.color = action.payload;
    },
  },
});

const { actions, reducer: userReducer } = userSlice;
export const { setId, setNickname, setNicknameColor } = actions;
export default userReducer;
