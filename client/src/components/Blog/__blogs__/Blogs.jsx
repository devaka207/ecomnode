import blog1 from "../../../assets/img/blog/blog-1.jpg";
import blog2 from "../../../assets/img/blog/blog-2.jpg";
import blog3 from "../../../assets/img/blog/blog-3.jpg";
import blog4 from "../../../assets/img/blog/blog-4.jpg";
import blog5 from "../../../assets/img/blog/blog-5.jpg";
import blog6 from "../../../assets/img/blog/blog-6.jpg";

function Blogs() {
  return (
    <>
      <div className="single-blog">
        <div className="blog-image">
          <a href="/blog-details">
            <img src={blog1} alt="image" />
          </a>
        </div>

        <div className="blog-content">
          <span>eCommerce</span>
          <h3>
            <a href="/blog-details">
              The Factory is Making its Own Mobile Chipset
            </a>
          </h3>
          <div className="post-meta">
            <a href="#">Admin</a> / 20 October 2020
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea com modo consequat.
          </p>

          <div className="blog-btn">
            <a href="#" className="default-btn">
              Read More
              <span></span>
            </a>
          </div>
        </div>
      </div>

      <div className="single-blog">
        <div className="blog-image">
          <a href="/blog-details">
            <img src={blog2} alt="image" />
          </a>
        </div>

        <div className="blog-content">
          <span>eCommerce</span>
          <h3>
            <a href="/blog-details">
              Minimal Design Inspiration Hand Watch
            </a>
          </h3>
          <div className="post-meta">
            <a href="#">Admin</a> / 19 October 2020
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea com modo consequat.
          </p>

          <div className="blog-btn">
            <a href="#" className="default-btn">
              Read More
              <span></span>
            </a>
          </div>
        </div>
      </div>

      <div className="single-blog">
        <div className="blog-image">
          <a href="/blog-details">
            <img src={blog3} alt="image" />
          </a>
        </div>

        <div className="blog-content">
          <span>eCommerce</span>
          <h3>
            <a href="/blog-details">
              You Can See the Electronic Products in the Showroom
            </a>
          </h3>
          <div className="post-meta">
            <a href="#">Admin</a> / 18 October 2020
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea com modo consequat.
          </p>

          <div className="blog-btn">
            <a href="#" className="default-btn">
              Read More
              <span></span>
            </a>
          </div>
        </div>
      </div>

      <div className="single-blog">
        <div className="blog-image">
          <a href="/blog-details">
            <img src={blog4} alt="image" />
          </a>
        </div>

        <div className="blog-content">
          <span>eCommerce</span>
          <h3>
            <a href="/blog-details">
              I Used to Work with Upcoming Electronic Gadgets
            </a>
          </h3>
          <div className="post-meta">
            <a href="#">Admin</a> / 20 October 2020
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea com modo consequat.
          </p>

          <div className="blog-btn">
            <a href="#" className="default-btn">
              Read More
              <span></span>
            </a>
          </div>
        </div>
      </div>

      <div className="single-blog">
        <div className="blog-image">
          <a href="/blog-details">
            <img src={blog5} alt="image" />
          </a>
        </div>

        <div className="blog-content">
          <span>eCommerce</span>
          <h3>
            <a href="/blog-details">
              Latest Ecommerce Trend: The Rise of Shoppable Posts
            </a>
          </h3>
          <div className="post-meta">
            <a href="#">Admin</a> / 19 October 2020
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea com modo consequat.
          </p>

          <div className="blog-btn">
            <a href="#" className="default-btn">
              Read More
              <span></span>
            </a>
          </div>
        </div>
      </div>

      <div className="single-blog">
        <div className="blog-image">
          <a href="/blog-details">
            <img src={blog6} alt="image" />
          </a>
        </div>

        <div className="blog-content">
          <span>eCommerce</span>
          <h3>
            <a href="/blog-details">
              Shipping Impacts Your Customer’s Experience
            </a>
          </h3>
          <div className="post-meta">
            <a href="#">Admin</a> / 18 October 2020
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea com modo consequat.
          </p>

          <div className="blog-btn">
            <a href="#" className="default-btn">
              Read More
              <span></span>
            </a>
          </div>
        </div>
      </div>

      <div className="pagination-area">
        <a href="#" className="prev page-numbers">
          <i className="flaticon-left-arrow"></i>
        </a>
        <a href="#" className="page-numbers">
          1
        </a>
        <span className="page-numbers current" aria-current="page">
          2
        </span>
        <a href="#" className="page-numbers">
          3
        </a>
        <a href="#" className="page-numbers">
          4
        </a>
        <a href="#" className="next page-numbers">
          <i className="flaticon-right-arrow"></i>
        </a>
      </div>
    </>
  );
}

export default Blogs;
