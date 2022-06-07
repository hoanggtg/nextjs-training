import Layout from "../../components/layout";
import { useRouter } from 'next/router';
import { useState } from 'react';
import data from "../../data";
import Link from "next/link";

export default function Post() {
  const router = useRouter()
  const { id } = router.query;
  const [zz, setZz] = useState(0);

  const post = data.find(post => post.id == id);
  if (!post) {
    return (
      <Layout>
        <div className="heading-page header-text">
          <section className="page-heading">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="text-content">
                    <Link href="/">
                      <h4 className="cursor-pointer">Back to homepage</h4>
                    </Link>
                    <h2>Post Not Found</h2>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="heading-page header-text">
        <section className="page-heading">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-content">
                  <h4>{post.category}</h4>
                  <h2>{post.title}</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="blog-posts grid-system">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="all-blog-posts">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="blog-post">
                      <div className="blog-thumb">
                        <img src={`/assets/images/${post.img}`} alt="" layout='fill' />
                      </div>
                      <div className="down-content">
                        <span>{post.category}</span>
                        <a href="post-details.html"><h4>{post.title}</h4></a>
                        <ul className="post-info">
                          <li><a href="#">{post.user}</a></li>
                          <li><a href="#">{post.time}</a></li>
                          <li><a href="#">{post.totalComment} Comments</a></li>
                        </ul>
                        <p>{post.descripton}</p>
                        <div className="post-options">
                          <div className="row">
                            <div className="col-6">
                              <ul className="post-tags">
                                <li><i className="fa fa-tags" /></li>
                                {post.tags.map(tag => (
                                  <li key={tag}><a href="#">{tag}&nbsp;&nbsp;</a></li>
                                ))}
                              </ul>
                            </div>
                            <div className="col-6">
                              <ul className="post-share">
                                <li><i className="fa fa-share-alt" /></li>
                                <li><a href="#">Facebook</a>,&nbsp;</li>
                                <li><a href="#"> Twitter</a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="sidebar-item submit-comment">
                      <div className="sidebar-heading">
                        <h2>Your comment</h2>
                      </div>
                      <div className="content">
                        <form id="comment" action="#" method="post">
                          <div className="row">
                            <div className="col-md-6 col-sm-12">
                              <fieldset>
                                <input name="name" type="text" id="name" placeholder="Your name" required />
                              </fieldset>
                            </div>
                            <div className="col-md-6 col-sm-12">
                              <fieldset>
                                <input name="email" type="text" id="email" placeholder="Your email" required />
                              </fieldset>
                            </div>
                            <div className="col-md-12 col-sm-12">
                              <fieldset>
                                <input name="subject" type="text" id="subject" placeholder="Subject" />
                              </fieldset>
                            </div>
                            <div className="col-lg-12">
                              <fieldset>
                                <textarea name="message" rows={6} id="message" placeholder="Type your comment" required defaultValue={""} />
                              </fieldset>
                            </div>
                            <div className="col-lg-12">
                              <fieldset>
                                <button type="submit" id="form-submit" className="main-button">Submit</button>
                              </fieldset>
                            </div>
                          </div>
                        </form>
                      </div>
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
