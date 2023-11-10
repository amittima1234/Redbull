import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTableList, faToolbox } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  return (
    <ol className="bg-primary flex flex-row justify-start">
      <li className="m-1.5">
        <button className="px-2 rounded-full hover:bg-secondary">
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
      <li className="m-1.5">
        <button className="px-2 rounded-full  hover:bg-secondary">
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
        <button className="px-2 rounded-full hover:bg-secondary">
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
    </ol>
  );
}
