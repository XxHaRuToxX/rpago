import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  PermIdentity,
  WorkOutline,
  Report,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export const Sidebar=()=> {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link" style={{textDecoration:'none'}} >
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Inicio
              </li>
            </Link>
            <Link to="/users" className="link" style={{textDecoration:'none'}}>
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Usuarios
              </li>
            </Link>
            <Link to="/users" className="link" style={{textDecoration:'none'}}>
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Nuevo Usuario
              </li>
            </Link>
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manejos
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Análisis
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reportes
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}