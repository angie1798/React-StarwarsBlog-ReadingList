import React from "react";
import "../../styles/character.scss";
import { Card } from "../component/card";

export const Characters = () => {
	return (
		<div className="contenedor">
			<h1>Characters</h1>
			<div className="scroll">
				<div className="row">
					<div className="col-4">
						<Card />
					</div>
				</div>{" "}
				{/*cierre de div row*/}
			</div>{" "}
			{/*cierre de div scroll*/}
		</div>
	);
};
