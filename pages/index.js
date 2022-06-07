import AllBlogPosts from '../components/AllBlogPosts';
import Layout from '../components/Layout';
import Sidebar from "../components/Sidebar";

export default function Home() {

  return (
    <Layout>
      <section className="blog-posts">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <AllBlogPosts />
            </div>
            <div className="col-lg-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
