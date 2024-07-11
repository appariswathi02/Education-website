import React from 'react'
import BlogCard from "./BlogCard"
import Back from "../commom/back/Back"
import "./blog.css"

const Blog = () => {
  return (
    <>
      <Back title="Blog Posts"/>
      <section className='blog padding'>
        <div className="container grid2">
            <BlogCard/>
        </div>
      </section>
    </>
  )
}

export default Blog
