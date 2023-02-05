import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from './components/header/Header'
import Home from './pages/home/Home';
import MovieList from './components/movieList/MovieList';
import Movie from './pages/movieDetail/Movie'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path='movie/:id' element={<Movie></Movie>}/>
          <Route path='movies/:type' element={<MovieList></MovieList>}/>
          <Route path='/*' element={<div style={{textAlign:'center',position:'absolute',top:'50%' ,left:'50%',transform:'translate(-50%,-50%)'}}>
            <h1>You are lost</h1>
            <h1>Invalid Id </h1>
          </div>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
