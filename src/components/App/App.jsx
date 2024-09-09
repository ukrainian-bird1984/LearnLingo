import { useState } from 'react';
import { lazy } from 'react';

const FavoritesPage = lazy(() => import("../../pages/FavoritesPage"));
const HomePage = lazy(() => import("../../pages/HomePage"));
const TeachersPage = lazy(() => import("../../pages/TeachersPage"));


function App() {
  const [count, setCount] = useState(0)

  return (
    
  )
}

export default App