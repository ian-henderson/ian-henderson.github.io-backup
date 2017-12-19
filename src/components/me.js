import React from 'react'
import './me.css'

const Me = () =>
  <section id='me'>
    <div className='container'>
      <div id='me-header' className='row'>
        <p className='intro'>My Expertise</p>
        <p className='statement'>I've got chops in all phases of the design process.</p>
      </div>
      <div className='row'>
        <div className='column'>
          <div className='expertise-block'>
            <i className="fas fa-terminal logo"></i>
            <h4 className='title'>Title 1</h4>
            <p className='summary'>I collaborate with clients and peers to nurture and transform ideas into well thought out design specs. After all, that's where the majority of amazing user experiences start.</p>
          </div>
        </div>
      </div>
      <div className='column'>
        <div className='expertise-block'>
          <i className="fab fa-codepen logo"></i>
          <h4 className='title'>Title 2</h4>
          <p className='summary'>I collaborate with clients and peers to nurture and transform ideas into well thought out design specs. After all, that's where the majority of amazing user experiences start.</p>
        </div>
      </div>
      <div className='column'>
        <div className='expertise-block'>
          <i className="fab fa-node-js logo"></i>
          <h4 className='title'>Title 3</h4>
          <p className='summary'>I collaborate with clients and peers to nurture and transform ideas into well thought out design specs. After all, that's where the majority of amazing user experiences start.</p>
        </div>
      </div>
    </div>
  </section>

export default Me