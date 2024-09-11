//код лише для прикладу!!!
// src/redux/auth/slice.js
import { createSlice } from '@reduxjs/toolkit';

// Створюємо слайс для авторизації
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    // початковий стан
    isAuthenticated: false,
    user: null,
  },
  reducers: {
    // Додайте редюсери для обробки дій
    login(state, action) {
      state.isAuthenticated = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

// Експортуємо редюсер і дії
export const authReducer = authSlice.reducer;
export const { login, logout } = authSlice.actions;
