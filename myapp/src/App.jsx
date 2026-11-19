import "./App.css";
function App() {
  return (
<div className="website">
  <div className="login-box">
    <div className="decoration circle-one"></div>
<div className="decoration circle-two"></div>
<div className="decoration circle-three"></div>
    <h1>SING IN</h1>
      <form>
        <div className="input-group">
          <label>login</label>
          <input
          type="text"
          placeholder="Enter your login"/>
        
        </div>
        <div className="input-group">
          <label>password</label>
          <input
          type="password"
          placeholder="enter your password"/>
        </div>
        <button type="submit">
          SING IN
        </button>
      </form>
  </div>
</div>
 );
}
export default App;