import logo from "./logo.svg";

export default function Header() {
  return (
    <div className="header-container">
      <header className="header">
        <img src={logo} className="header-logo" alt="logo" />
        <h1>First react app</h1>
      </header>
    </div>
  );
}
