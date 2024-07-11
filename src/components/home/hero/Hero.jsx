import React from 'react'
import "./hero.css"
import Title from "../../commom/title/Title"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className="container">
            <div className="row">
              <Title subtitle="WELCOME TO ACDAMIA" title="Best Online Education"/>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, doloremque? Sunt accusamus, recusandae ipsum laudantium aperiam optio voluptas voluptatem ab asperiores magni rerum aut eum magnam aliquid laboriosam? Officiis, numquam.</p>
            <div className="button">
                <button className='primary-btn'>
                    GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
                </button>
                <button>
                    VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
                </button>
            </div>
            </div>
        </div>
      </section>
      <div className="marigin"></div>
    </>
  )
}

export default Hero
