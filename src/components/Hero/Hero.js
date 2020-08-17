import React from 'react';
import { hero, hero__illustration } from './Hero.module.css';

const Hero = () => {
  return (
    <main className={`${hero} px-20 flex items-center justify-between`}>
      <div>
        <h1 className="h1 mb-6">Bot of life</h1>
        <p className="mb-12">
          The quick, brown fox jumps over a lazy dog. DJs flock by when MTV ax quiz prog.
          Junk MTV quiz graced by fox whelps. Bawds jog
        </p>
        <div>
          <button className="btn btn-lg btn-green mr-4">Get started</button>
          <button className="btn btn-lg btn-dark">Learn more</button>
        </div>
      </div>
      <div className="mr-10">
        <div className={`${hero__illustration}`}>
          <div>
          </div>
        </div>
      </div>

    </main>
  )
}

export default Hero;