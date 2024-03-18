import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  AppBody: {
    minHeight: "45vh",
    fontSize: "1rem",
    padding: "2em",
  },

  "form-inputs": {
    display: "flex",
    gap: "1em",
    alignItems: "center",
  },

  input: {
    marginLeft: "10px",
  },

  mobile: {
    "@media (max-width: 900px)": {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
  },
});

function Login() {
  return (
    <React.Fragment>
      <div className={css(styles.AppBody)}>
        <p>Login to access the full dashboard</p>
        <form className={css(styles["form-inputs"], styles.mobile)}>
          <section>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              className={css(styles.input)}
            ></input>
          </section>
          <section>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              className={css(styles.input)}
            ></input>
          </section>
          <button>OK</button>
        </form>
      </div>
    </React.Fragment>
  );
}

export default Login;
