import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import BlogArea from './assets/Components/BlogCard/BlogArea'
import ProArea from './assets/Components/ProjectsSection/ProArea'
import NavA from './assets/Components/Nav/NavA'
import Ham from './assets/Components/Nav/Ham'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import data from './assets/Details.json'
import Canvs from './assets/Components/Others/Canvs'
import Home from './assets/Components/Pages/Home'
import Card from './assets/Components/MajorCards/Card'
function App() {
  //
  return (
    <Router>
      <div className=" rela lg:flex   pb-36">

        <div className="lg:hidden">
          <Ham />
        </div>

        <Switch>
          <Route path="/" exact>
            <div className="w-[700px] h-[100px] hidden lg:block z-20 ">
              <div className="lg:fixed w-[250px] top-0">
                <NavA />
              </div>
            </div>
            <Home />
          </Route>

          <Route path="/works">
            <div className="w-[100x] h-[500px] hidden lg:block  z-20">
              <div className="lg:fixed w-[250px] top-0">
                <NavA />
              </div>
            </div>
            <div className='w-[100vw] lg:pl-[200px] h-[100vh]'> <ProArea /></div>

          </Route>

          <Route path="/blogs">
            <div className="w-[100x] h-[500px] hidden lg:block  z-20">
              <div className="lg:fixed w-[250px] top-0">
                <NavA />
              </div>
            </div>
            <div className='w-[100vw] lg:pl-[150px] '><BlogArea /></div>
          </Route>

          <Route path="/contact">
            <div className="w-[100x] h-[500px] hidden lg:block  z-20">
              <div className="lg:fixed w-[250px] top-0">
                <NavA />
              </div>
            </div>
            <div className='w-[100vw] lg:pl-[150px] h-[100vh] '><Card props={data.data.Contact}></Card></div>
          </Route>
        
        
        

        </Switch>

      </div>
    </Router>
  )
}
/**/
export default App
