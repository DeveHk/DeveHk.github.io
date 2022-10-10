import React from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'

const Background = ({re}) => {
  const canvas = useRef("")
  const frame = useRef("")

  useEffect(
    () => {
      const control = {
        ballColor: 'rgb(8,253,216)',
        ballSize: { s: 3, e: 1 },
        lineColor: 'rgb(8,253,100)',
        lineThick: '0.05',
        dim: '0.08',
        fRate: '0.08'
      }





      ////
      const ctx = canvas.current.getContext('2d')
      console.dir(ctx)
      canvas.current.width = frame.current.clientWidth
      canvas.current.height = frame.current.clientHeight
      window.addEventListener('resize', function () {
        canvas.current.width = frame.current.innerWidth
        canvas.current.height = frame.current.innerHeight

      })
      ////


      //Pointer Update
      const mouse = {
        x: undefined,
        y: undefined
      }
      //


      //Class Defining a particle
      let particlesArray = []
      let hue = 0
      class Particle {
        constructor() {
          this.x = mouse.x
          this.y = mouse.y
          this.color = control.ballColor
          this.size = Math.random() * control.ballSize.s + control.ballSize.e
          this.speedX = Math.random() * 3 - 1.5
          this.speedY = Math.random() * 3 - 1.5

        }
        update() {
          this.x += this.speedX
          this.y += this.speedY
          console.log(this.x, this.y)
          if (this.size > 0.2)
            this.size = this.size - control.dim
        }
        drawCircle() {
          ///////drawing
          ctx.beginPath()

          //(x,y,r,sAngle,eAngle,counterclockwise)
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          ///////fill
          ctx.fillStyle = this.color
          ctx.fill()
          ///////outline
          //ctx.strokeStyle = 'white'
          /// ctx.stroke()
        }
        drawlines() {

        }
      }


      //Event Listeners:::
      //Creates partile depending on event
      re.current.addEventListener('mousemove', function (e) {
        mouse.x = e.x
        mouse.y = e.y
        let j = Math.random() * 10 + 9
        for (let i = 0; i < j; i++) {
          particlesArray.push(new Particle())
        }
      })

      //

      function handleParticles() {
        for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].update()
          particlesArray[i].drawCircle()

          for (let j = i; j < particlesArray.length; j++) {
            const dx = particlesArray[i].x - particlesArray[j].x
            const dy = particlesArray[i].y - particlesArray[j].y
            const dist = Math.sqrt((dy * dy) + (dx * dx))
            if (dist < 100) {
              ctx.beginPath()
              ctx.strokeStyle = control.lineColor
              ctx.lineWidth = control.lineThick
              ctx.moveTo(particlesArray[i].x, particlesArray[i].y)
              ctx.lineTo(particlesArray[j].x, particlesArray[j].y)
              ctx.stroke()

            }
          }

          if (particlesArray[i].size <= 0.2) {
            particlesArray.splice(i, 1)
            i--
          }

        }
      }


      //Frame adjust
      function animate() {
        // ctx.clearRect(0,0,canvas.current.width,canvas.current.height)
        ctx.fillStyle = `rgba(32,32,32,${control.fRate})`
        //hue++
        ctx.fillRect(0, 0, canvas.current.width, canvas.current.height)

        handleParticles()
        requestAnimationFrame(animate)
      }
      animate()
    }

    , []
  )
  return (
      <canvas ref={canvas} className="canva opacity-50"></canvas>
  )
}

export default Background

