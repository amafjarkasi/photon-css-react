/* eslint-disable no-undef */
/* eslint-disable no-console */
import React, { useEffect } from "react";
import useState from "react-hook-use-state";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

//create your first component
export const Home = () => {
	const [count, setCount] = useState("home");
	let _ = require("lodash");

	// useEffect(() => {
	// 	const handleClick = page => {
	// 		// e.preventDefault();
	// 		setCount("${page}");
	// 	};
	// }),
	// 	[count];

	function SideBar() {
		function handleClick(page) {
			// e.preventDefault();
			setCount("${page}");
		}

		return (
			<>
				<div className="window">
					<header className="toolbar toolbar-header">
						<h1 className="title pt-1">{_.startCase(count)}</h1>
						<div className="toolbar-actions">
							<div className="btn-group">
								<button
									className={
										count == "home"
											? `btn btn-default active`
											: `btn btn-default`
									}
									onClick={() => setCount("home")}>
									<span className="icon icon-home"></span>
								</button>
								<button
									className={
										count == "folder"
											? `btn btn-default active`
											: `btn btn-default`
									}
									onClick={() => setCount("folder")}>
									<span className="icon icon-folder"></span>
								</button>
								<button
									className={
										count == "cloud"
											? `btn btn-default active`
											: `btn btn-default`
									}
									onClick={() => setCount("cloud")}>
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
									{count == "folder" && <Block />}
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

	function handleClick(event) {
		event.preventDefault();
		console.log("worked");
	}

	function Block() {
		return (
			<div className="mx-5">
				<form>
					<div className="form-group">
						<label>Email address</label>
						<input
							type="email"
							className="form-control"
							placeholder="Email"
						/>
					</div>
					<div className="form-group">
						<label>Password</label>
						<input
							type="password"
							className="form-control"
							placeholder="Password"
						/>
					</div>
					<div className="form-group">
						<label>Description</label>
						<textarea className="form-control" rows="3"></textarea>
					</div>
					<select className="form-control">
						<option>Option one</option>
						<option>Option two</option>
						<option>Option three</option>
						<option>Option four</option>
						<option>Option five</option>
						<option>Option six</option>
						<option>Option seven</option>
						<option>Option eight</option>
					</select>
					<div className="checkbox">
						<label>
							<input type="checkbox" /> This is a checkbox
						</label>
					</div>
					<div className="checkbox">
						<label>
							<input type="checkbox" /> This is a checkbox too
						</label>
					</div>
					<div className="radio">
						<label>
							<input type="radio" name="radios" checked />
							Keep your options open
						</label>
					</div>
					<div className="radio">
						<label>
							<input type="radio" name="radios" />
							Be sure to remember to check for unknown unknowns
						</label>
					</div>
					<div className="form-actions">
						<button
							type="submit"
							onClick={e => handleClick(e)}
							className="btn btn-form btn-default">
							Cancel
						</button>
						<button
							type="submit"
							onClick={e => handleClick(e)}
							className="btn btn-form btn-primary">
							OK
						</button>
					</div>
				</form>
			</div>
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
									count == "home"
										? `btn btn-default active`
										: `btn btn-default`
								}
								onClick={setCount("home")}>
								<span className="icon icon-home"></span>
							</button>
							<button
								className={
									count == "folder"
										? `btn btn-default active`
										: `btn btn-default`
								}
								onClick={setCount("folder")}>
								<span className="icon icon-folder"></span>
							</button>
							<button
								className={
									count == "cloud"
										? `btn btn-default active`
										: `btn btn-default`
								}
								onClick={setCount("cloud")}>
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
				{/* <Block /> */}
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
	// 	return setCount(e.target.value);
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
						// value={count}
						// onChange={event => setCount(event.target.value)}
					/>
				</li>
				<li className="list-group-item">
					<img
						className="img-circle media-object pull-left"
						src="../../styles/img/avatar3.jpg"
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
						src="../../styles/img/avatar2.png"
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
			<head>
				<title>Photon</title>
				<link rel="stylesheet" href="../../styles/css/photon.css" />
				<script src="js/menu.js" charSet="utf-8"></script>
			</head>
			<body className="w-75 h-75">
				<div className="window">
					<SideBar />
				</div>
			</body>
		</>
	);
};
