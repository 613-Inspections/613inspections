import { NavBar } from "./NavBar";

export function Header() {
  return (
    <header id="header" className="fixed-top d-flex align-items-center">
      <div className="container d-flex justify-content-between">
        <div className="logo">
          <h1>
            <a href="index.html">613 Inspections Inc.</a>
          </h1>
          <p>
            <span className="bi bi-telephone text-white"></span> 613-410-1357
          </p>
        </div>

        <NavBar />
      </div>
    </header>
  );
}
