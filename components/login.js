// class Login extends React.Component {
//   render() {
//     return (
//       <div>
//         <form>
//           <label>Username</label>
//           <input type="text" name="username" />

//           <label>Password</label>
//           <input type="password" name="password" />

//           <button type="submit">Log In</button>
//         </form>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Login />, document.getElementById('root'));

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
      formError: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    const loginData = {
      email: `${email}`,
      password: `${password}`,
    };

    fetch("https://website-api-o6er.onrender.com/api/user/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginData),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          const accessToken = data.payload.accessToken;
          localStorage.setItem("kiri", JSON.stringify(accessToken));
          localStorage.setItem("isLoggedIn", JSON.stringify(true));
          window.location.assign("../html/dashboard.html");
        } else {
          throw new Error(data.message);
        }
      })
      .catch((error) => {
        this.setState({ formError: error.message });
        setTimeout(() => {
          this.setState({ formError: "" });
        }, 5000);
      });
  }

  validateEmail() {
    const { email } = this.state;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email) {
      this.setState({ emailError: "Enter your email" });
      return false;
    } else if (!emailRegex.test(email)) {
      this.setState({ emailError: "Email is invalid" });
      return false;
    } else {
      this.setState({ emailError: "" });
      return true;
    }
  }

  validatePassword() {
    const { password } = this.state;
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!password) {
      this.setState({
        passwordError:
          "Enter your password, Minimum 8 characters with at least one letter,one digit and one special character",
      });
      return false;
    } else if (!passwordRegex.test(password)) {
      this.setState({ passwordError: "Password is invalid" });
      return false;
    } else {
      this.setState({ passwordError: "" });
      return true;
    }
  }

  render() {
    return (
      <div>
        <form id="login" onSubmit={this.handleSubmit}>
          <div className="sign">
            <div className="icon">
              <a href="./../index.html">
                <iconify-icon
                  icon="material-symbols:arrow-back"
                  style={{ color: "white" }}
                  width="50"
                  height="50"
                ></iconify-icon>
              </a>
            </div>

            <label>Log In</label>
            <input
              type="text"
              name="email"
              placeholder="User name"
              className="username"
            ></input>
            <div class="email_error"></div>
            <input
              type="password"
              id="input_password"
              name="password"
              placeholder="Password"
              className="pass password"
            ></input>
            <div className="password_error"></div>
            <div className="form_error"></div>
            <button type="submit" className="button">
              Log in
            </button>
          </div>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<LoginForm />, document.getElementById("root"));
