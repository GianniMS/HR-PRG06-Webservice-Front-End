import {Outlet} from "react-router";
import {Link} from "react-router-dom";
import "./App.css";

export function Layout() {

    return <div>
        <header class="header">
            <h1>Notes - Example</h1>
        </header>
        <nav class="mainNav">
            <ul>
                <li class="mainLi"><Link to="/">All notes</Link></li>
                <li><Link to="create">New Note</Link></li>
            </ul>
        </nav>
        <div>
            <Outlet/>
        </div>
    </div>
}