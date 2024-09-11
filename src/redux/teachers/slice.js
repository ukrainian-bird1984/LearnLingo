//код лише для прикладу!!!
// src/redux/teachers/slice.js
import { createSlice } from '@reduxjs/toolkit';

// Створюємо слайс для вчителів
const teachersSlice = createSlice({
  name: 'teachers',
  initialState: {
    // початковий стан
    teachersList: [],
  },
  reducers: {
    // Додайте редюсери для обробки дій
    addTeacher(state, action) {
      state.teachersList.push(action.payload);
    },
    removeTeacher(state, action) {
      state.teachersList = state.teachersList.filter(
        (teacher) => teacher.id !== action.payload.id
      );
    },
    // інші редюсери...
  },
});

// Експортуємо редюсер і дії
export const teachersReducer = teachersSlice.reducer;
export const { addTeacher, removeTeacher } = teachersSlice.actions;
