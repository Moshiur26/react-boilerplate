import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './views/core/Home'
import Signup from './views/user/Signup'
import Signin from './views/user/Signin'
const MainRouter = () => {
    return (<div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="signup" element={<Signup />} />
        <Route path="signin" element={<Signin />} />
      </Routes>
    </div>)
}

export default MainRouter
