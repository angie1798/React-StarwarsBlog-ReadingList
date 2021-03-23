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
			detailsCharacters: [],
			detailsPlanet: []
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
			}
		}
	};
};

export default getState;
