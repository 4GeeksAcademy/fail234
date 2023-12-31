const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			book: [
				{
					title: "FIRST",
					background: "white",
					initial: "white",
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
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

				//we have to loop the entire book array to look for the respective index
				//and change its color
				const book = store.book.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ book: book });
			},
			handleForm: (e) => {
				e.preventDefault()
				const store = getStore();
				const { fName, email, phone, address } = getStore();
				const { register } = getActions();
				register({ fName, email, phone, address }); // { fName: fName, email: email }
				console.log("Enviando Formulario") //debugger

				//reset the global store
				setStore({ book: book });
			}
		}
	};
};

export default getState;
