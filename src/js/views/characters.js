import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";

export const Characters = () => {
	const { store, actions } = useContext(Context);
	useEffect(() => {
		actions.getPeople("https://swapi.dev/api/people/");
	}, []);

	return (
		<>
			<h1 className="characters">Characters</h1>
			<div className="card-deck">
				<div className="card">
					<img src="http://placehold.it/300x150" className="card-img-top" alt="" />
					<div className="card-body">
						<h5 className="card-title">{store.people !== null ? store.people[0].name : "hola"}</h5>
						<p className="card-text">
							This is a longer card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer.
						</p>
						<p className="card-text">
							<small className="text-muted">Last updated 3 mins ago</small>
						</p>
					</div>
				</div>
				<div className="card">
					<img src="http://placehold.it/300x150" className="card-img-top" alt="" />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This card has supporting text below as a natural lead-in to additional content.
						</p>
						<p className="card-text">
							<small className="text-muted">Last updated 3 mins ago</small>
						</p>
					</div>
				</div>
				<div className="card">
					<img src="http://placehold.it/300x150" className="card-img-top" alt="" />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This is a wider card with supporting text below as a natural lead-in to additional content.
							This card has even longer content than the first to show that equal height action.
						</p>
						<p className="card-text">
							<small className="text-muted">Last updated 3 mins ago</small>
						</p>
					</div>
				</div>
				<div className="card">
					<img src="http://placehold.it/300x150" className="card-img-top" alt="" />
					<div className="card-body">
						<h5 className="card-title">Card title</h5>
						<p className="card-text">
							This is a longer card with supporting text below as a natural lead-in to additional content.
							This content is a little bit longer.
						</p>
						<p className="card-text">
							<small className="text-muted">Last updated 3 mins ago</small>
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
