/* eslint-disable no-undef */
/* eslint-disable no-console */
import React, { useEffect } from "react";
import useState from "react-hook-use-state";
import { Helmet } from "react-helmet";
import { Block } from "./block";

export const handleClicker = e => {
	e.preventDefault();
	console.log("worked");
};

export const Home = () => {
	const [navigation, setNavigation] = useState("home");
	let _ = require("lodash");

	function SideBar() {
		return (
			<>
				<div className="window">
					<header className="toolbar toolbar-header pb-1">
						<h1 className="title pt-2 fw-bold">
							{_.startCase(navigation)}
						</h1>
						<div className="toolbar-actions">
							<div className="btn-group">
								<button
									className={
										navigation == "home"
											? `btn btn-default active`
											: `btn btn-default`
									}
									onClick={() => setNavigation("home")}>
									<span className="icon icon-home"></span>
								</button>
								<button
									className={
										navigation == "folder"
											? `btn btn-default active`
											: `btn btn-default`
									}
									onClick={() => setNavigation("folder")}>
									<span className="icon icon-folder"></span>
								</button>
								<button
									className={
										navigation == "cloud"
											? `btn btn-default active`
											: `btn btn-default`
									}
									onClick={() => setNavigation("cloud")}>
									<span className="icon icon-cloud"></span>
								</button>
								<button className="btn btn-default">
									<span className="icon icon-popup"></span>
								</button>
								<button className="btn btn-default">
									<span className="icon icon-shuffle"></span>
								</button>
							</div>
							<button className="btn btn-default">
								<span className="icon icon-home icon-text"></span>
								Filters
							</button>
							<button className="btn btn-default btn-dropdown pull-right">
								<span className="icon icon-megaphone"></span>
							</button>
						</div>
					</header>
					<div className="window-content">
						<div className="padded-more">
							<div className="pane-group">
								<div className="pane-sm sidebar">
									<ListFiles />
								</div>
								<div className="pane py-3">
									{navigation == "home" && <ListGroup />}
									{navigation == "folder" && <Block />}
									{navigation == "cloud" && <Block />}
								</div>
							</div>
						</div>
						<footer className="toolbar toolbar-footer">
							<h1 className="title">Footer</h1>
						</footer>
					</div>
				</div>
			</>
		);
	}

	function Navbar() {
		return (
			<nav className="nav-group">
				<h5 className="nav-group-title">Favorites</h5>
				<a className="nav-group-item active">
					<span className="icon icon-home"></span>
					connors
				</a>
				<span className="nav-group-item">
					<span className="icon icon-download"></span>
					Downloads
				</span>
				<span className="nav-group-item">
					<span className="icon icon-folder"></span>
					Documents
				</span>
				<span className="nav-group-item">
					<span className="icon icon-signal"></span>
					AirPlay
				</span>
				<span className="nav-group-item">
					<span className="icon icon-print"></span>
					Applications
				</span>
				<span className="nav-group-item">
					<span className="icon icon-cloud"></span>
					Desktop
				</span>
			</nav>
		);
	}

	function FullLayout() {
		return (
			<>
				<header className="toolbar toolbar-header">
					<h1 className="title pt-1">Header with actions</h1>
					<div className="toolbar-actions">
						<div className="btn-group">
							<button
								className={
									navigation == "home"
										? `btn btn-default active`
										: `btn btn-default`
								}
								onClick={setNavigation("home")}>
								<span className="icon icon-home"></span>
							</button>
							<button
								className={
									navigation == "folder"
										? `btn btn-default active`
										: `btn btn-default`
								}
								onClick={setNavigation("folder")}>
								<span className="icon icon-folder"></span>
							</button>
							<button
								className={
									navigation == "cloud"
										? `btn btn-default active`
										: `btn btn-default`
								}
								onClick={setNavigation("cloud")}>
								<span className="icon icon-cloud"></span>
							</button>
							<button className="btn btn-default">
								<span className="icon icon-popup"></span>
							</button>
							<button className="btn btn-default">
								<span className="icon icon-shuffle"></span>
							</button>
						</div>

						<button className="btn btn-default">
							<span className="icon icon-home icon-text"></span>
							Filters
						</button>

						<button className="btn btn-default btn-dropdown pull-right">
							<span className="icon icon-megaphone"></span>
						</button>
					</div>
				</header>
				<footer className="toolbar toolbar-footer">
					<div className="toolbar-actions">
						<button className="btn btn-default">Cancel</button>
						<button className="btn btn-primary pull-right">
							Save
						</button>
					</div>
				</footer>
			</>
		);
	}

	// function changeHandles(e) {
	// 	return setNavigation(e.target.value);
	// }
	function ListFiles() {
		return (
			<table className="table-striped">
				<thead>
					<tr>
						<th>Name</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td
							className="btn-default active"
							onClick={e => handleClick(e)}>
							photon.css
						</td>
					</tr>
					<tr>
						<td>photon.css</td>
					</tr>
					<tr>
						<td>photon.css</td>
					</tr>
					<tr>
						<td>photon.css</td>
					</tr>
				</tbody>
			</table>
		);
	}

	function ListGroup() {
		return (
			<ul className="list-group">
				<li className="list-group-header">
					<input
						className="form-control"
						type="text"
						placeholder="Search for someone"
						// value={navigation}
						// onChange={event => setNavigation(event.target.value)}
					/>
				</li>
				<li className="list-group-item">
					<img
						className="img-circle media-object pull-left"
						src="http://photonkit.com/assets/img/avatar.jpg"
						width="32"
						height="32"
					/>
					<div className="media-body">
						<strong>List item title</strong>
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
				</li>
				<li className="list-group-item">
					<img
						className="img-circle media-object pull-left"
						src="http://photonkit.com/assets/img/avatar.jpg"
						width="32"
						height="32"
					/>
					<div className="media-body">
						<strong>List item title</strong>
						<p>Lorem ipsum dolor sit amet.</p>
					</div>
				</li>
				...
			</ul>
		);
	}

	return (
		<>
			<Helmet>
				<title>Photon</title>
				<link
					rel="stylesheet"
					href="https://cdn.jsdelivr.net/npm/photonkit@0.1.2/dist/css/photon.css"
				/>
				{/* <script src="../../js/menu.js" charSet="utf-8"></script> */}
			</Helmet>
			<div className="w-75 h-75">
				<div className="window">
					<SideBar />
				</div>
			</div>
		</>
	);
};
