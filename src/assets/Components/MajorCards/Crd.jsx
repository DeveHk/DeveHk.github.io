import React from 'react'
import Card from './Card'
import data from '../../Details.json'
const Crd = () => {
  return (
    <Card obj={data.data.Portfolio}/>
  )
}

export default Crd