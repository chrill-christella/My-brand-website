let url = location.href;
let id = url.split("=")[1];

class SingleBlog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      articles: [],
    };
  }

  componentDidMount() {
    fetch(
      `https://website-api-o6er.onrender.com/api/article/getOneArticle/${id}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            articles: result.data,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, articles } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div>
          <h1 class="heading">BLOG</h1>
          <div class=" view">
            <div class="box-container shadow">
              <div class="image">
                <img src={article.picture} alt="" />
              </div>
              <div class="content">
                <h3>${article.title}</h3>
                <p>${article.description}</p>
              </div>
            </div>

            <div class="likes-and-comment-count">
              <button id="like-btn" class="btns">
                <i class="far fa-heart"></i>{" "}
              </button>
              <small class="count btns" id="likes">
                {" "}
                ${article.likes}
              </small>
              <button id="comment-btn" class="btns">
                <i class="far fa-comment"></i>{" "}
              </button>
              <small class="count btns" id="comments">
                ${article.comments.length}{" "}
              </small>
            </div>

            <div class="">
              <form id="comment-form">
                <div class="form_info center_display">
                  <input
                    type="text"
                    name="user"
                    id="user"
                    placeholder="Your user name"
                  />
                </div>
                <div class="name_error"></div>
                <div class="form_info center_display">
                  <input
                    type="text"
                    name="comment"
                    id="comment"
                    placeholder="Add a short comment here"
                  />
                </div>
                <div class="comment_error"></div>

                <button type="submit" class="c-btn">
                  Submit
                </button>
              </form>
            </div>

            <h2>Comments</h2>
            <hr />
            <div class="comments"></div>
          </div>

          <div class="comments-container center_display"></div>
        </div>
      );
    }
  }
}

ReactDOM.render(<SingleBlog />, document.getElementById("root"));
