const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			character: [],
			planets: [],
			vehicles: [],
			detailsVehicles: [],
			detailsCharacters: [],
			detailsPlanet: [],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			addFavorite: nombre => {
				const store = getStore();
				const favorito = store.favorites;
				setStore({ favorites: favorito.concat(nombre) });
			},
			deleteFavorite: val => {
				const store = getStore();
				const favorites = store.favorites.filter((elm, index) => {
					return val != index;
				});

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				setStore({ favorites: favorites.concat() });
			},
			getInfoChar: () => {
				let fetchUrl = "https://www.swapi.tech/api/people/";
				fetch(fetchUrl)
					.then(response => response.json())
					.then(result => {
						setStore({ character: result.results });
					})
					.catch(error => console.log("error", error));
			},

			getDetailCharacter: url => {
				fetch(url)
					.then(response => response.json())
					.then(result => {
						setStore({ detailsCharacters: result.result });
					})
					.catch(error => console.log("error", error));
			},

			getInfoPlanets: () => {
				let fetchUrl = "https://www.swapi.tech/api/planets/";
				fetch(fetchUrl)
					.then(response => response.json())
					.then(result => {
						setStore({ planets: result.results });
					})
					.catch(error => console.log("error", error));
			},
			getDetailPlanet: url => {
				fetch(url)
					.then(response => response.json())
					.then(result => {
						setStore({ detailsPlanet: result.result });
					})
					.catch(error => console.log("error", error));
			},
			getInfoVehicle: () => {
				let fetchUrl = "https://www.swapi.tech/api/vehicles/";
				fetch(fetchUrl)
					.then(response => response.json())
					.then(result => {
						setStore({ vehicles: result.results });
					})
					.catch(error => console.log("error", error));
			},
			getDetailVehicle: url => {
				fetch(url)
					.then(response => response.json())
					.then(result => {
						setStore({ detailsVehicles: result.result });
					})
					.catch(error => console.log("error", error));
			}
		}
	};
};

export default getState;
