import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening around the world, <br /> here are few must read blogs for you...</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Sep 26, 2021" text="What is the MERN stack? Let us exlore how it is?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Sep 26, 2021" text="Server setup with Express.js and Node.js. Let us exlore how it is?" />
        <Article imgUrl={blog03} date="Sep 26, 2021" text="Adding Bootstrap and Font Awesome to your React app. Let us exlore how it is?" />
        <Article imgUrl={blog04} date="Sep 26, 2021" text="Connecting and running the frontend to the backend. Let us exlore how it is?" />
        <Article imgUrl={blog05} date="Sep 26, 2021" text="Testing our MERN stack app in the browser. Let us exlore how it is?" />
      </div>
    </div>
  </div>
);

export default Blog;