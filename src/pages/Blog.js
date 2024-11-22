// Blog.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import * as BlogStyles from "../pages/Blog.styles";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({
    title: "",
    content: "",
    file: null,
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    axios
      .get("http://localhost:5000/posts")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the posts!", error);
      });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setNewPost({ ...newPost, [name]: name === "file" ? files[0] : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", newPost.title);
    formData.append("content", newPost.content);
    if (newPost.file) {
      formData.append("file", newPost.file); // Додаємо файл
    }

    axios
      .post("http://localhost:5000/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        setPosts([...posts, response.data]);
        setNewPost({ title: "", content: "", file: null });
      })
      .catch((error) => {
        console.error("There was an error adding the post!", error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/posts/${id}`)
      .then(() => {
        setPosts(posts.filter((post) => post._id !== id));
      })
      .catch((error) => {
        console.error("There was an error deleting the post!", error);
      });
  };

  return (
    <BlogStyles.Container>
      <BlogStyles.Title>Blog Posts</BlogStyles.Title>
      <BlogStyles.PostList>
        {posts.map((post) => (
          <BlogStyles.PostItem key={post._id}>
            <BlogStyles.PostTitle>{post.title}</BlogStyles.PostTitle>
            <BlogStyles.PostContent>{post.content}</BlogStyles.PostContent>
            {post.fileUrl && (
              <a href={post.fileUrl} target="_blank" rel="noopener noreferrer">
                View Attachment
              </a>
            )}
            <BlogStyles.Button onClick={() => handleDelete(post._id)}>
              Delete Post
            </BlogStyles.Button>
          </BlogStyles.PostItem>
        ))}
      </BlogStyles.PostList>

      <BlogStyles.NewPostForm onSubmit={handleSubmit}>
        <BlogStyles.FormTitle>Create a New Post</BlogStyles.FormTitle>
        <BlogStyles.InputGroup>
          <BlogStyles.Label htmlFor="title">Title:</BlogStyles.Label>
          <BlogStyles.Input
            type="text"
            id="title"
            name="title"
            value={newPost.title}
            onChange={handleChange}
            required
          />
        </BlogStyles.InputGroup>
        <BlogStyles.InputGroup>
          <BlogStyles.Label htmlFor="content">Content:</BlogStyles.Label>
          <BlogStyles.TextArea
            id="content"
            name="content"
            value={newPost.content}
            onChange={handleChange}
            required
          />
        </BlogStyles.InputGroup>
        <BlogStyles.InputGroup>
          <BlogStyles.Label htmlFor="file">Attach File:</BlogStyles.Label>
          <BlogStyles.Input
            type="file"
            id="file"
            name="file"
            onChange={handleChange}
          />
        </BlogStyles.InputGroup>
        <BlogStyles.SubmitButton type="submit">
          Submit Post
        </BlogStyles.SubmitButton>
      </BlogStyles.NewPostForm>
    </BlogStyles.Container>
  );
};

export default Blog;
