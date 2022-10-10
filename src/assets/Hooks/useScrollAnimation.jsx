import React, { useEffect, useRef } from 'react'

const useScrollAnimation = (clas) => {
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
                entry.target.classList.add(clas);
                observer.unobserve(entry.target);
              } else {
               // entry.target.classList.remove(clas);
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