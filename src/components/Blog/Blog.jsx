import assets from "../../assets"
import "./Blog.css"

const Blog = () => {
  return (
    <>
        <div className="blog-container">
            <h1>Blog</h1>
            <div className="blog-content">
              <img src={assets.blog} alt="" />
            </div>
        </div>
    </>
  )
}

export default Blog