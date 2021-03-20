import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/character.scss";
import { Card } from "../component/card";

export const Planets = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="contenedor">
			<h1>Planets</h1>
			<div className="scroll">
				<div className="row">
					{store.planets.map((item, index) => {
						return (
							<div className="col-4" key={index}>
								<Card name={item.name} url={item.url} />
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
