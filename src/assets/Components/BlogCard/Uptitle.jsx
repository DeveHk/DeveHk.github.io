import React from 'react'

const Uptitle = ({text,theme}) => {
  return (
    <div className={`text-[14px] tracking-widest px-5  ${theme}`}>
      {text}
    </div>
  )
}

export default Uptitle