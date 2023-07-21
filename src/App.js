//화면 뿌려주는 곳
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes";
import Layout from "./components/Layout";

import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Profile from "./screens/Profile";
import Chatting from "./screens/Chatting";
import { GlobalStyle, darkTheme, whiteTheme } from "./styles";

//일단 설치 먼저.. 그후 추가해서 넣은것(react-helmet-async 검색후 나온것)
import { HelmetProvider } from 'react-helmet-async';

import { ThemeProvider } from "styled-components";
import { useState } from "react";

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <HelmetProvider>
      <ThemeProvider theme={darkMode ? darkTheme : whiteTheme}>
        <GlobalStyle />
        <Router>
          <Routes>
            <Route path={routes.home} element={isLogin ? (<Layout><Home /> </Layout> )
             :( <Login />)} />
            <Route path={routes.signup} element={<SignUp />} />
            <Route path={routes.profile} element=
            <Layout>
            {<Profile />} </Layout> />
            <Route path={routes.chatting} element={<Chatting />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
