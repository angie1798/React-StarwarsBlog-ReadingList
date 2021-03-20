import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/character.scss";

export const Personaje = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div>
			<h1>Hola a todos, esta es la vista de detalles de personaje {store.character[params.theid].name}</h1>
		</div>
	);
};
