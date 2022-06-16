/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "@/pages/Main";
import { Login, Register, RegisterForm } from "@/pages/User";
import ClubDetail from "@/pages/ClubDetail/ClubDetail";
import ClubCreate from "@/pages/ClubCreate/ClubCreate";
import ClubUpdate from "@/pages/ClubUpdate/ClubUpdate";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='registerByEmail' element={<RegisterForm />} />
          <Route path='clubDetail' element={<ClubDetail />} />
          <Route path='clubCreate' element={<ClubCreate />} />
          <Route path='clubUpdate' element={<ClubUpdate />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
