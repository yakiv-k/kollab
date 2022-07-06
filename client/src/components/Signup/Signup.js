import "./Signup.scss";

function Signup({ signUp, registered }) {
  return (
    <section className="auth">
    <div className="signup">
      <h1 className="signup__title">SignUp</h1>
      <form className="signup__form form" onSubmit={signUp}>
        <label className="form__label">Name:</label>
        <input className="form__input" type="text" name="name" placeholder="Enter a name"/>
        <label className="form__label">Contact:</label>
        <input className="form__input" type="text" name="contact"  placeholder="Enter a number/email"/>
        <label className="form__label">Avatar:</label>
        <input className="form__input" type="text" name="image"/>
        <label className="form__label">Username:</label>
        <input className="form__input" type="text" name="username" placeholder="Enter a username"/>
        <label className="form__label">Password: </label>
        <input
          className="form__input"
          type="password"
          name="password"
          autoComplete="true"
          placeholder="Enter a password"
        />
        <button className="form__button" type="submit">
          Signup
        </button>
        <p onClick={registered} className="form__redirect">Already have an account? Log in here</p>
      </form>
    </div>
    </section>
  );
}

export default Signup;
