import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "@/pages/Main";
import { SignIn, SignUp, SignUpForm } from "@/pages/User";
import ClubDetail from "@/pages/ClubDetail/ClubDetail";
import ClubList from "@/pages/ClubList";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='signIn' element={<SignIn />} />
          <Route path='signUp' element={<SignUp />} />
          <Route path='signUpByEmail' element={<SignUpForm />} />
          <Route path='clubDetail' element={<ClubDetail />} />
          <Route path='clubList' element={<ClubList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
