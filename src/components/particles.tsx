'use client'

import React, { useEffect, useRef } from 'react'

export default function Particles() {

  const canvasRef = useRef<HTMLCanvasElement>(null)
  
  useEffect(()=>{

    const canvasEl = canvasRef.current as HTMLCanvasElement;
    const ctx = canvasEl.getContext('2d') as CanvasRenderingContext2D ;

    const canvasW = canvasEl.offsetWidth;
    const canvasH = canvasEl.offsetHeight;

    type particle = {
      pos?: {
        x: number;
        y: number;
      }
      size: {
        w: number;
        h: number;
      }
      velocity: number;
      color: string;
      opacity?: number;
    }

    let particlesList: particle[] = []
    const numberOfPaticles = 20;

    function canvasPaint(){
      ctx.fillRect(0, 0, canvasW, canvasH);
    };

    function canvasClear(){
      ctx.clearRect(0, 0, canvasW, canvasH);
    };

    function createParticle(base: particle){
      const particle = {
        pos: {
          x: Math.random() * canvasW,
          y: 0,
        },
        size: {
          w: base.size.w,
          h: base.size.h,
        },
        color: base.color,
        velocity: base.velocity,
        opacity: 1,
        
      }

      return particle;
    }

    function createParticlesGroup(quantity:number, base:particle):Array<particle>{
      const group = new Array<particle>
      for(let i = 0; i < quantity; i++) {
        group.push(createParticle(base));
      }
      return group;
    };

    function createParticleList(...args:particle[]):particle[]{
      return [...args]
    }

    function particlesUpdate(){
      for(let i = 0; i < particlesList.length; i++){
        let p = particlesList[i];
  
        /* move the particle */
        let ms = p.velocity;
        p.pos!.y += ms;
        
        /* Reduce Opacity */
        p.opacity! -= 0.002;
        if(p.opacity! < 0) p.opacity = 0;

        /* */


      }
    }

    function checkInsideTheCanvas(particle:particle):boolean{
      return particle.pos!.y < canvasH ? true : false;
    }

    function draw(){
      for (let i = 0; i < particlesList.length; i++){
        const p = particlesList[i];
        ctx.fillStyle = "green";
        ctx.fillRect(p.pos!.x, p.pos!.y, p.size.w, p.size.h)    
      }
    }

    const smallGroup = createParticlesGroup(20, {
      color: 'green',
      size:{
        w: 5,
        h: 5,
      },
      velocity: 0.5,
    })
    const middleGroup = createParticlesGroup(15, {
      color: 'red',
      size:{
        w: 7,
        h: 7,
      },
      velocity: 0.3,
    })
    const bigGroup = createParticlesGroup(25, {
      color: 'blue',
      size:{
        w: 9,
        h: 9,
      },
      velocity: 0.1,
    })

    particlesList = createParticleList(...smallGroup, ...middleGroup, ...bigGroup);

    function updateCanvas(){
      canvasClear();
      particlesUpdate();
      draw();

      window.requestAnimationFrame(updateCanvas)
    }

    window.requestAnimationFrame(updateCanvas)
  },[])
  
  return (
    <>
      <canvas ref={canvasRef} className='max-w-3xl max-h-96'></canvas>
    </>
  )
}
