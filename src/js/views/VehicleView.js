import React, { useState, useEffect, useContext } from "react";
import Props from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/detalle.scss";

export const VehicleView = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		// Actualiza el título del documento usando la API del navegador
		actions.getDetailVehicle(store.vehicles[params.theid].url);
	}, []);

	const params = useParams();
	return (
		<div>
			<div className="container-fluid">
				<h1 className="text-center mb-4">{store.vehicles[params.theid].name}</h1>
				<p className="descripcion">{store.detailsVehicles.description}</p>
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
									<th scope="row">Model</th>
									<td>
										{store.detailsVehicles.properties ? store.detailsVehicles.properties.model : ""}
									</td>
								</tr>
								<tr>
									<th scope="row">Vehicle class</th>
									<td>
										{store.detailsVehicles.properties
											? store.detailsVehicles.properties.vehicle_class
											: ""}
									</td>
								</tr>
								<tr>
									<th scope="row">Manufacturer</th>
									<td>
										{store.detailsVehicles.properties
											? store.detailsVehicles.properties.manufacturer
											: ""}
									</td>
								</tr>
								<tr>
									<th scope="row">Length</th>
									<td>
										{store.detailsVehicles.properties
											? store.detailsVehicles.properties.length
											: ""}
									</td>
								</tr>
								<tr>
									<th scope="row">Crew</th>
									<td>
										{store.detailsVehicles.properties ? store.detailsVehicles.properties.crew : ""}
									</td>
								</tr>
								<tr>
									<th scope="row">Passengers</th>
									<td>
										{store.detailsVehicles.properties
											? store.detailsVehicles.properties.passengers
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
