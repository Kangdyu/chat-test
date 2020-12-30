import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface User {
  id: string;
  nickname: string;
  color: string;
}

const initialState: User = {
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
