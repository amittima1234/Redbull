import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
            <a className="text-white" href="addEntity">
              הוספת רשומה
            </a>
          </button>
        </li>
        <li className="m-1.5">
          <button className="rounded-full px-2 hover:bg-secondary">
            <FontAwesomeIcon
              className="mr-1"
              icon={faToolbox}
              style={{ color: "#fff" }}
            />
            <a className="text-white" href="addTool">
              הוספת תכולה
            </a>
          </button>
        </li>
        <li className="m-1.5">
          <button className="rounded-full px-2 hover:bg-secondary">
            <FontAwesomeIcon
              className="mr-1"
              icon={faTableList}
              style={{ color: "#fff" }}
            />
            <a className="text-white" href="table">
              טבלה
            </a>
          </button>
        </li>
      </ol>
    </div>
  );
}
