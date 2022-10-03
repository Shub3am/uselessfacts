import react from "react";

function NavBar(props) {
  return (
    <div className="flex justify-between-l flex-wrap items-center bg-navy white nav-bar">
      <h1 className="ttc">Random Facts</h1>

      <h2 className="tc ttc">Today's Fact: {props.url}</h2>
    </div>
  );
}

export default NavBar;
