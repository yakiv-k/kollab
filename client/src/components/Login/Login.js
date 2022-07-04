import "./Login.scss";

function Login({ login, loginError, error }) {
  return (
    <div className="login">
      <h1 className="login__title">Login</h1>
      {loginError && <label style={{ color: "red" }}>{error}</label>}
      <form className="login__form form " onSubmit={login}>
        <label className="form__label">Username:</label>
        <input className="form__input" type="text" name="username" />
        <label className="form__label">Password:</label>
        <input className="form__input" type="password" name="password" />
        <button className="form__button" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
