import React from 'react'
import BlogArea from '../BlogCard/BlogArea'
import Fullhead from '../header/Fullhead'
import Card from '../MajorCards/Card'
import Me from '../Me/Me'
import data from '../../Details.json'
import ProArea from '../ProjectsSection/ProArea'

const Home = () => {
  return (
    <div className="space-y-2  ">
    <Fullhead />
    <Card props={data.data.Portfolio} />
    <ProArea />
    <Me props={data.data.About} />
    <BlogArea />
    <Card props={data.data.Contact} />
  </div>
  )
}

export default Home