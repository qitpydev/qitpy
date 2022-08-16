import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

import { Routes, Route, Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <h1>Welcome to React</h1>
      <Routes>
        <Route path="" element={<div><Home /><Outlet /></div>}>
          <Route index element={<h1>Index hhhh</h1>} />
          <Route path="teams" element={<h1>Teams<Outlet /></h1>}>
            <Route path=":teamId" element={<h1>:teamId</h1>} />
            <Route path="new" element={<h1>New</h1>} />
            <Route index element={<h1>Nested Index</h1>} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
      <h1>Ahhhhhhh</h1>

      <h1>Welcome to React2</h1>
      <Routes>
        <Route path="" element={<div><About /><Outlet /></div>}>
          <Route index element={<h1>Index hhhh</h1>} />
          <Route path="teams" element={<h1>Teams<Outlet /></h1>}>
            <Route path=":teamId" element={<h1>:teamId</h1>} />
            <Route path="new" element={<h1>New</h1>} />
            <Route index element={<h1>Nested Index</h1>} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Route>
      </Routes>
      <h1>Ahhhhhhh</h1>
    </div>
  );
}

function NotFound() {
  return (
    <div>
      404 NOT FOUND
    </div>
  )
}

function Home() {
  return (
    <div>
      <h1>Home</h1>
      {/* <nav> */}
        <Link to="/">Home</Link> |{" "}
        <Link to="about">About</Link>
      {/* </nav> */}
    </div>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>
          That feels like an existential question, don't you
          think?
        </p>
      </main>
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default App;
