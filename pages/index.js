import Head from 'next/head';
import Link from "next/link";
import Layout from '../components/Layout';
import { useState } from 'react';
import data from '../data';
import LargePostItem from '../components/LargePostItem';

export default function Home() {
  
  const [posts, setPosts] = useState(data);
  // setPosts(data);
  // console.log(posts);
  

  return (
    <Layout>
        <Head>
          <title>Home</title>
        </Head>

        <section className="blog-posts">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
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
              </div>
              <div className="col-lg-4">
                <div className="sidebar">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="sidebar-item search">
                        <form id="search_form" name="gs" method="GET" action="#">
                          <input type="text" name="q" className="searchText" placeholder="type to search..." autoComplete="on" />
                        </form>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="sidebar-item recent-posts">
                        <div className="sidebar-heading">
                          <h2>Recent Posts</h2>
                        </div>
                        <div className="content">
                          <ul>
                            <li><a href="post-details.html">
                                <h5>Vestibulum id turpis porttitor sapien facilisis scelerisque</h5>
                                <span>May 31, 2020</span>
                              </a></li>
                            <li><a href="post-details.html">
                                <h5>Suspendisse et metus nec libero ultrices varius eget in risus</h5>
                                <span>May 28, 2020</span>
                              </a></li>
                            <li><a href="post-details.html">
                                <h5>Swag hella echo park leggings, shaman cornhole ethical coloring</h5>
                                <span>May 14, 2020</span>
                              </a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="sidebar-item categories">
                        <div className="sidebar-heading">
                          <h2>Categories</h2>
                        </div>
                        <div className="content">
                          <ul>
                            <li><a href="#">- Nature Lifestyle</a></li>
                            <li><a href="#">- Awesome Layouts</a></li>
                            <li><a href="#">- Creative Ideas</a></li>
                            <li><a href="#">- Responsive Templates</a></li>
                            <li><a href="#">- HTML5 / CSS3 Templates</a></li>
                            <li><a href="#">- Creative &amp; Unique</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="sidebar-item tags">
                        <div className="sidebar-heading">
                          <h2>Tag Clouds</h2>
                        </div>
                        <div className="content">
                          <ul>
                            <li><a href="#">Lifestyle</a></li>
                            <li><a href="#">Creative</a></li>
                            <li><a href="#">HTML5</a></li>
                            <li><a href="#">Inspiration</a></li>
                            <li><a href="#">Motivation</a></li>
                            <li><a href="#">PSD</a></li>
                            <li><a href="#">Responsive</a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
  )
}
