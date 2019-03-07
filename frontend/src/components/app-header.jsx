import React from 'react';
import { NavLink } from "react-router-dom";

export default function AppHeader() {
	return(
		<header className="App-header container">
      <div className="row">
      	<div className="col-lg-12">

					 <ul className="nav nav-tabs">
					  <li className="nav-item">
							<NavLink to="/form" className="nav-link" activeClassName="active">
								<i className={`fa fa-send`} />Kontakt
							</NavLink>
					  </li>
					  <li className="nav-item">
							<NavLink to="/overview" className="nav-link" activeClassName="active">
								<i className={`fa fa-list`} />Übersicht
							</NavLink>
					  </li>
					</ul>

      	</div>
      </div>
		</header>
	);
}
