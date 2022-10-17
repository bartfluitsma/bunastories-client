import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/Homepage';
import ListingPage from './pages/Listing';
// import {ReactComponent as Logo} from './logo.svg'

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/listing' element={<ListingPage/>} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
