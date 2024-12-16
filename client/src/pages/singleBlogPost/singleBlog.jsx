import React from "react";
import { useParams } from "react-router-dom";
import { blogData } from "../../components/blogData";
import "./singleBlog.css";

const SingleBlog = () => {
  const { postId } = useParams();

  const post = blogData.find((blog) => blog.id === postId);

  if (!post) {
    return <div className="blog-not-found">Blog Post Not Found</div>;
  }

  return (
    <div className="blog-post-page">
      <div className="blog-header">
        <h2>{post.title}</h2>
        <img src={post.image} alt={post.title} className="post-image" />
        <div className="post-meta">
          <span className="author">
            <img
              src={post.authorImage}
              alt={post.author}
              className="author-image"
            />
            <p>By {post.author}</p>
          </span>
          <span className="publish-date">{post.publishedDate}</span>
        </div>
      </div>

      <div
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      <div className="related-posts">
        <h3>Related Posts</h3>
        <ul>
          {post.relatedPosts.map((relatedPostId, index) => {
            const relatedPost = blogData.find(
              (post) => post.id === relatedPostId,
            );
            return (
              <li key={index}>
                <a href={`/blog/${relatedPost.id}`}>{relatedPost.title}</a>
              </li>
            );
          })}
        </ul>
      </div>

      <a href="/blog" className="back-link">
        Back to Blog
      </a>
    </div>
  );
};

export default SingleBlog;
