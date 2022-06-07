import Link from "next/link";
export default function LargePostItem( {post} ) {

  return (
    <div className="col-lg-12">
      <div className="blog-post">
        <div className="blog-thumb">
          <img src={`/assets/images/${post.img}`} alt="" layout='fill' />
        </div>
        <div className="down-content">
          <span>{post.category}</span>
          <Link href={`/post/${post.id}`}>
            <a><h4>{post.title}</h4></a>
          </Link>
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
  );
}
