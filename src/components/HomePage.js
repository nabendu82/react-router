import React from 'react'

export default function HomePage(props) {
   const handleClick = (data) => {
    props.history.push('/about/' + data);
   }

  return (
    <div>
      <button onClick={() => handleClick('Nabendu')}>To About</button>
    </div>
  )
}
