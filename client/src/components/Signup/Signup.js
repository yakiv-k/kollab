import "./Signup.scss";

function Signup({ signUp }) {
  return (
    <div className="signup">
      <h1 className="signup__title">SignUp</h1>
      <form className="signup__form form" onSubmit={signUp}>
        <label className="form__label">Username:</label>
        <input className="form__input" type="text" name="username" />
        <label className="form__label">Name:</label>
        <input className="form__input" type="text" name="name" />
        <label className="form__label">Password: </label>
        <input
          className="form__input"
          type="password"
          name="password"
          autoComplete="true"
        />
        <button className="form__button" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
