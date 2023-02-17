class BlogsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      articles: [],
    };
  }

  componentDidMount() {
    fetch("https://website-api-o6er.onrender.com/api/article/")
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
          {articles.map((article) => (
            <div class="box-container" id="root">
              <div className="box shadow">
                <div className="containerc">
                  <div className="image">
                    <img src={article.picture} alt="" />
                    <h3>
                      <i className="fas fa-heart"></i> {article.likes}
                    </h3>
                  </div>
                  <div className="content">
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                    <a
                      href={`./viewblog.html?id=${article._id}`}
                      className="btn"
                    >
                      read more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
}
ReactDOM.render(<BlogsList />, document.getElementById("root"));
