import React from 'react'
import { skills } from '../constants'
import CTA from '../components/CTA'
const About = () => {
  return (
    <section className='max-container'>
      <h1 className='head-text'>
        Hello,I'm <span className='blue-gradient_text font-semibold drop-shadow-sm'>Prudvi</span>
      </h1>
      <div>
        <p>
          Software Engineer based in Visakhapatnam,specializing in Full stack web development by building applications with frameworks like React and Springboot.
        </p>
      </div>

<div className='py-10 flex flex-col'>
<h3 className='subhead-text'>My Skills</h3>
<div className='mt-16 flex flex-wrap gap-12'>
  {skills.map((skill)=>(
    <div className='block-container w-20 h-20'>
      <div className='btn-front rounded-xl flex justify-center items-center'>
      <img
      src={skill.imageUrl}
      alt={skill.name}
      className="w-1/2 h-1/2 object-contain"
      />
      </div>
</div>  
))}
</div>

</div>
<hr className='border-slate-200'/>
<CTA/>
      </section>
  )
}

export default About