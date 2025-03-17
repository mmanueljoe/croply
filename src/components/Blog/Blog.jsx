// import assets from "../../assets"
import { blogData } from "../../data/blogs"
import "./Blog.css"

const Blog = () => {
  return (
    <>
      <div className="blog-container" id="blog">
        <h1>Blog</h1>
        <div className="blog-content">
          {blogData.map((post) => (
            <div key={post.id} className="blog-card">
              <img src={post.image} alt={post.title} />
              <p className="blog-meta">
                {post.date} by {post.author}
              </p>
              <h2>{post.title}</h2>
              <p className="blog-description">{post.description}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Blog