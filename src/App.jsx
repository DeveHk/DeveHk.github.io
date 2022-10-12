import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import Fullhead from './assets/Components/header/Fullhead'
import Card from './assets/Components/MajorCards/Card'
import Crd from './assets/Components/MajorCards/Crd'
import data from './assets/Details.json'
import Blogcard from './assets/Components/BlogCard/Blogcard'
import BlogArea from './assets/Components/BlogCard/BlogArea'
import ProArea from './assets/Components/ProjectsSection/ProArea'
import NavA from './assets/Components/Nav/NavA'
import Ham from './assets/Components/Nav/Ham'

import Me from './assets/Components/Me/Me'
function App() {
//
  return (
    <div className="  lg:grid lg:grid-cols-10 pb-36">
      <div className="lg:hidden">
        <Ham/>
      </div>
      <div className="col-span-1  hidden relative lg:block">
        <div className="lg:fixed w-[10%]">
        <NavA/>
        </div>
      </div>
      <div className="lg:col-span-9 space-y-2">
      <Fullhead/>
    <Card props={data.data.Portfolio}/>
    <ProArea/>
    <Me props={data.data.About}/>
    <BlogArea/>
    <Card props={data.data.Contact}/>
    </div>
   
    </div>
  )
}
/**/
export default App
