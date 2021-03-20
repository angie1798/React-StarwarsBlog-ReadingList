import React, { useState, useEffect } from "react";
import "../../styles/character.scss";
import Props from "prop-types";
import { Link } from "react-router-dom";

export const Card = props => {
	const [detalle, setDetalle] = useState();
	const [url, setUrl] = useState();

	useEffect(() => {
		// Actualiza el título del documento usando la API del navegador
		getDetalle();
	}, []);

	const getDetalle = () => {
		fetch(props.url)
			.then(response => response.json())
			.then(result => {
				//console.log("hol", result.result.properties);
				setDetalle(result.result.properties);
				setUrl(result.result.properties.url);
			})
			.catch(error => console.log("error", error));
	};
	function infoCharacter() {
		return (
			<div>
				Gender:
				{" " + detalle.gender}
				<br />
				Hair color:
				{" " + detalle.hair_color}
				<br />
				Eye color:
				{" " + detalle.eye_color}
			</div>
		);
	}
	function infoPlanet() {
		return (
			<div>
				Population:
				{" " + detalle.population}
				<br />
				Terrain:
				{" " + detalle.terrain}
			</div>
		);
	}
	return (
		<div>
			<div className="card">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSryam1PRHJHHTl8xBxtfd3hPiMonVa5WO3PCZcoa1MS-TK3-d7ux1RwNW-D1KT6EDUtrc&usqp=CAU"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">{props.name} </h5>
					<p className="card-text">
						{url ? (url.includes("people") ? (detalle ? infoCharacter() : "") : infoPlanet()) : ""}
					</p>
					<Link to={"/personaje/" + props.it}>
						<a className="btn btn-outline-primary float-left" onClick={props.funcion}>
							Learn more!
						</a>
					</Link>
					<a href="#" className="btn btn-outline-warning float-right">
						<i className="far fa-heart" />
					</a>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	name: Props.string,
	details: Props.string,
	url: Props.string,
	funcion: Props.func,
	it: Props.number
};
