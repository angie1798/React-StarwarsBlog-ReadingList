import React from "react";
import "../../styles/character.scss";
import Props from "prop-types";

export const Card = props => {
	return (
		<div>
			<div className="card">
				<img
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSryam1PRHJHHTl8xBxtfd3hPiMonVa5WO3PCZcoa1MS-TK3-d7ux1RwNW-D1KT6EDUtrc&usqp=CAU"
					className="card-img-top"
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">{props.name}</h5>
					<p className="card-text">{props.info}</p>
					<a href="#" className="btn btn-outline-primary float-left">
						Learn more!
					</a>
					<a href="#" className="btn btn-outline-warning float-right">
						<i className="far fa-heart" />
					</a>
				</div>
			</div>
		</div>
	);
};

Card.propTypes = {
	name: Props.any,
	info: Props.any
};
