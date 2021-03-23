import React, { useState, useEffect, useContext } from "react";
import Props from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/detalle.scss";

export const PlanetView = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		// Actualiza el título del documento usando la API del navegador
		actions.getDetailPlanet(store.planets[params.theid].url);
	}, []);
	const params = useParams();
	return (
		<div>
			<div className="container-fluid">
				<h1 className="text-center mb-4">{store.planets[params.theid].name}</h1>
				<p className="descripcion">{store.detailsPlanet.description}</p>
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
									<th scope="row">Diameter</th>
									<td>
										{store.detailsPlanet.properties ? store.detailsPlanet.properties.diameter : ""}
									</td>
								</tr>
								<tr>
									<th scope="row">Rotation period</th>
									<td>
										{store.detailsPlanet.properties
											? store.detailsPlanet.properties.rotation_period
											: ""}
									</td>
								</tr>
								<tr>
									<th scope="row">Orbital period</th>
									<td>
										{store.detailsPlanet.properties
											? store.detailsPlanet.properties.orbital_period
											: ""}
									</td>
								</tr>
								<tr>
									<th scope="row">Gravity</th>
									<td>
										{store.detailsPlanet.properties ? store.detailsPlanet.properties.gravity : ""}
									</td>
								</tr>
								<tr>
									<th scope="row">Population</th>
									<td>
										{store.detailsPlanet.properties
											? store.detailsPlanet.properties.population
											: ""}
									</td>
								</tr>
								<tr>
									<th scope="row">Climate</th>
									<td>
										{store.detailsPlanet.properties ? store.detailsPlanet.properties.climate : ""}
									</td>
								</tr>
								<tr>
									<th scope="row">Terrain</th>
									<td>
										{store.detailsPlanet.properties ? store.detailsPlanet.properties.terrain : ""}
									</td>
								</tr>
								<tr>
									<th scope="row">Surface water</th>
									<td>
										{store.detailsPlanet.properties
											? store.detailsPlanet.properties.surface_water
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
