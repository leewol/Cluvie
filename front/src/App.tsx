/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { useRecoilValue } from "recoil";

import { isSignInState } from "@/utils/recoil";
import { axiosInstanceToNavigate } from "@/utils/api";

import Main from "@/pages/Main/Main";
import { SignIn, SignUp, SignUpForm } from "@/pages/User";
import ClubDetail from "@/pages/ClubDetail/ClubDetail";
import ClubList from "@/pages/ClubList/ClubList";
import ClubCreate from "@/pages/ClubCreate/ClubCreate";
import ClubUpdate from "@/pages/ClubUpdate/ClubUpdate";
import Header from "@/components/Header/Header";
import MyPage from "@/pages/MyPage/MyPage";

function InterceptorToNavigate() {
  const navigate = useNavigate();
  axiosInstanceToNavigate(navigate);
  return <></>;
}

function App() {
  const isSignIn = useRecoilValue(isSignInState);

  return (
    <div className='App'>
      <BrowserRouter>
        <InterceptorToNavigate />
        <Header />
        <Routes>
          <Route path='/' element={<Main />} />
          <Route
            path='signIn'
            element={isSignIn ? <Navigate to='/' replace /> : <SignIn />}
          />
          <Route
            path='signUp'
            element={isSignIn ? <Navigate to='/' replace /> : <SignUp />}
          />
          <Route
            path='signUpByEmail'
            element={isSignIn ? <Navigate to='/' replace /> : <SignUpForm />}
          />
          <Route path='clubDetail/:id' element={<ClubDetail />} />
          <Route path='clubList' element={<ClubList />} />
          <Route
            path='clubCreate'
            element={!isSignIn ? <Navigate to='/' replace /> : <ClubCreate />}
          />
          <Route
            path='clubUpdate'
            element={!isSignIn ? <Navigate to='/' replace /> : <ClubUpdate />}
          />
          <Route
            path='myPage'
            element={!isSignIn ? <Navigate to='/signIn' replace /> : <MyPage />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
