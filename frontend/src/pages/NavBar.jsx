import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import {
  faPenToSquare,
  faTableList,
  faToolbox,
  faBullseye,
} from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <div className="flex flex-row justify-between bg-primary">
      <div className=" align-start m-1.5 font-mono text-white" href="table">
        <FontAwesomeIcon className="mr-1" icon={faBullseye} />
        Redbull
      </div>
      <ol className="flex flex-row">
        <li className="m-1.5">
          <button className="rounded-full px-2  hover:bg-secondary">
            <FontAwesomeIcon
              className="mr-1"
              icon={faPenToSquare}
              style={{ color: "#fff" }}
            />
            <NavLink className="text-white" to={"CreateEntity"}>
              הוספת רשומה
            </NavLink>
          </button>
        </li>
        <li className="m-1.5">
          <button className="rounded-full px-2 hover:bg-secondary">
            <FontAwesomeIcon
              className="mr-1"
              icon={faToolbox}
              style={{ color: "#fff" }}
            />
            <NavLink className="text-white" to={"CreateTool"}>
              הוספת תכולה
            </NavLink>
          </button>
        </li>
        <li className="m-1.5">
          <button className="rounded-full px-2 hover:bg-secondary">
            <FontAwesomeIcon
              className="mr-1"
              icon={faTableList}
              style={{ color: "#fff" }}
            />
            <NavLink className="text-white" to={"/"}>
              טבלה
            </NavLink>
          </button>
        </li>
      </ol>
    </div>
  );
}
