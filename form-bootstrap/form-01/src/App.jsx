import styles from './app.module.css';

function App() {

  return (
    <>
      <h1>Hellow World!</h1>
      <h2>Bem-vindos</h2>

      <form>
  <div className={styles.form_group}>
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" cla="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className={styles.form_group}>
    <label for="exampleInputPassword1">Password</label>
    <input type="password" cla="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div className={styles.form_group}>
  </div>
  <button type="submit" cla="btn btn-primary">Submit</button>
</form>
    </>
  )
}

export default App
