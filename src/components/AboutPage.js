import React from 'react'

export default function AboutPage(props) {
  if(!props.match.params.aboutId) {
      return <div>No Data Yet</div>
  }
  
  return (
    <div>
      {`Data from HomePage ${props.match.params.aboutId}`}
    </div>
  )
}
