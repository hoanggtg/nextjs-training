import React from 'react';
import data from '../data';
import Link from "next/link";
import { useState } from 'react';
import LargePostItem from './LargePostItem'

export default function AllBlogPosts() {

  const [posts, setPosts] = useState(data);

  return (
    <div className="all-blog-posts">
      <div className="row">
        {posts.map(post => (
          <LargePostItem key={post.id} post={post} />
        ))}

        <div className="col-lg-12">
          <div className="main-button">
            <Link href="/">
              <a>View All Posts</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
