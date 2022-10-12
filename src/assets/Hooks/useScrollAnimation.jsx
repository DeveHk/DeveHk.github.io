import React, { useEffect, useRef } from 'react'

const useScrollAnimation = (clas,clasdel) => {
    const target=useRef("")
    useEffect(
        ()=>{
          let options = {
            root: null,
            rootMargin: '0px',
            threshold: 0
          }
          const callback = (entries, observer) => {
            entries.forEach((entry) => {
              if (entry.intersectionRatio > 0) {
                clas.forEach((c)=>{entry.target.classList.add(c);})
                clasdel.forEach((c)=>{entry.target.classList.remove(c);})
                observer.unobserve(entry.target);
              }               
          })
            
          }
          let observer = new IntersectionObserver(callback, options);
          observer.observe(target.current);
        
        },[]
      )
      return target
}

export default useScrollAnimation