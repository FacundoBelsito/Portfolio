import React from 'react'
import CardComponent from './CardComponent'

const MapProject =  ({projects}) => {
  return (
    projects.map(projects=>{
      return <CardComponent key={projects.id}{...projects}/>
    })
  )
}

export default MapProject

