import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import Badge from "react-bootstrap/Badge";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 ml-5 pl-5">
					<img
						src="https://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo-1.png"
						height="75px"
						weigth="75px"
					/>
				</span>
			</Link>
			<div className="ml-auto mr-5 pr-5">
				<Dropdown>
					<Dropdown.Toggle variant="secondary" id="dropdown-basic">
						{"Favorites "}
						<Badge variant="warning">{store.favorites.length}</Badge>
					</Dropdown.Toggle>

					<Dropdown.Menu>
						{store.favorites.length == 0 ? (
							<Dropdown.Item>Empty</Dropdown.Item>
						) : (
							store.favorites.map((item, index) => {
								return (
									<div key={index}>
										<Dropdown.Item>
											{item}
											<i
												className="fas fa-trash"
												onClick={() => actions.deleteFavorite(index)}></i>
										</Dropdown.Item>
									</div>
								);
							})
						)}
						{/* <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        onClick={actions.deleteFavorite(index)}
						<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
						<Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
					</Dropdown.Menu>
				</Dropdown>
			</div>
			{/*Cierre de div ml-auto*/}
		</nav>
	);
};
