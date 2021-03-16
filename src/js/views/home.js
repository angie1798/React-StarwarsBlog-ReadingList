import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Characters } from "../component/characters";
import { Planets } from "../component/planets";
export const Home = () => (
	<div className="text-center mt-5">
		<div className="container">
			<Characters />
			<Planets />
		</div>
	</div>
);
