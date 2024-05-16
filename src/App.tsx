
import { Suspense, lazy, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './page/Auth/signIn/SignIn';
import Layout from './page/Layout';
const HomPage = lazy(() => import('./components/Home/Layout'))
const AuthPage = lazy(() => import('./page/Auth/Layout'))
function App() {
  const [token,setToken] = useState(localStorage.getItem('token'));

  return (
    <>
     <Suspense fallback={<h1>error</h1>}>
        <BrowserRouter>
        <Routes>
        {
          token ? (
            <Route exact path='/' Component={HomPage}/>
          ) : (
            <Route exact path='/' Component={AuthPage}/>

          )
        }
          <Route path='/signIn' element={<SignIn/>}/>
          <Route path='/layout' element={<Layout/>}/>

        </Routes>
        </BrowserRouter>
     </Suspense>
    </>
  )
}

export default App
