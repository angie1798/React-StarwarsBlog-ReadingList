import React, { useState, useEffect, useContext } from "react";
import Props from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/detalle.scss";

export const Personaje = () => {
	const { store, actions } = useContext(Context);
	const [planet, setPlanet] = useState();
	useEffect(() => {
		// Actualiza el título del documento usando la API del navegador
		actions.getDetailCharacter(store.character[params.theid].url);
	}, []);

	const getPlanetName = url => {
		fetch(url)
			.then(response => response.json())
			.then(result => {
				console.log("hol", result.result.properties.name);
				setPlanet(result.result.properties.name);
			})
			.catch(error => console.log("error", error));
		return planet;
	};
	const params = useParams();
	return (
		<div>
			<div className="container-fluid">
				<h1 className="text-center mb-4">{store.character[params.theid].name}</h1>
				<p className="descripcion">{store.detailsCharacters.description}</p>
				<div className="row">
					<div className="col-6">
						<img
							className="img"
							src="https://wallpaper.dog/large/17079286.jpg"
							width="580px"
							height="400px"
						/>
					</div>
					<div className="col-5">
						<table className="table">
							<thead>
								<tr>
									<th scope="col">
										<h4>Details</h4>
									</th>

									<th scope="col"></th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">Height</th>
									<td>
										{store.detailsCharacters.properties
											? store.detailsCharacters.properties.height
											: ""}
									</td>
								</tr>
								<tr>
									<th scope="row">Mass</th>
									<td>
										{store.detailsCharacters.properties
											? store.detailsCharacters.properties.mass
											: ""}
									</td>
								</tr>
								<tr>
									<th scope="row">Hair color</th>
									<td>
										{store.detailsCharacters.properties
											? store.detailsCharacters.properties.hair_color
											: ""}
									</td>
								</tr>
								<tr>
									<th scope="row">Skin color</th>
									<td>
										{store.detailsCharacters.properties
											? store.detailsCharacters.properties.skin_color
											: ""}
									</td>
								</tr>
								<tr>
									<th scope="row">Eye color</th>
									<td>
										{store.detailsCharacters.properties
											? store.detailsCharacters.properties.eye_color
											: ""}
									</td>
								</tr>
								<tr>
									<th scope="row">Birth Year</th>
									<td>
										{store.detailsCharacters.properties
											? store.detailsCharacters.properties.birth_year
											: ""}
									</td>
								</tr>
								<tr>
									<th scope="row">Homeworld</th>
									<td>
										{store.detailsCharacters.properties
											? getPlanetName(store.detailsCharacters.properties.homeworld)
											: ""}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div className="col-1"></div>
				</div>
			</div>
		</div>
	);
};
