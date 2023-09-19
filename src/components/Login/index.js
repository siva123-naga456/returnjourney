import './index.css'

const Login = props => {
  const {login} = props

  return (
    <form className="form-container" onSubmit={login}>
      <h1 className="message">Please Login</h1>
      <div className="sub-container">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" />
      </div>
      <div className="sub-container">
        <label htmlFor="Emails">Email</label>
        <input type="email" id="Emails" />
      </div>
      <div className="sub-container">
        <label htmlFor="mobile">Mobile Number</label>
        <input type="number" id="mobile" />
      </div>
      <div className="sub-container">
        <label htmlFor="level">Difficulty Level</label>
        <select id="level">
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
      </div>
      <button type="submit" className="login-button">
        Login
      </button>
    </form>
  )
}

export default Login
