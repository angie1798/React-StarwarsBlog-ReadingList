import React from "react";
import { Card } from "./card";

export const Planets = () => {
	return (
		<div className="contenedor">
			<h1>Planets</h1>
			<div className="scroll">
				<div className="row">
					<div className="col-4">
						<Card />
					</div>
				</div>
			</div>
		</div>
	);
};
