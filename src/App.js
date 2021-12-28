import React, { useEffect, useState } from "react";

//custom components
import FilterSection from "./components/FilterSection/FilterSection";
import ProductPage from "./components/ProductPage/ProductPage";

//css
import "./App.css";

const URL = "https://assessment-edvora.herokuapp.com/";

const App = () => {
	//data fetched from API
	const [rawData, setRawData] = useState([]);

	//filtered data
	const [refinedData, setRefinedData] = useState([]);

	const [products, setProducts] = useState([]);
	const [states, setStates] = useState([]);
	const [cities, setCities] = useState([]);

	const [isProductSelected, setIsProductSelected] = useState(false);
	const [isStateSelected, setIsStateSelected] = useState(false);
	const [isCitySelected, setIsCitySelected] = useState(false);

	const [selectedProduct, setSelectedProduct] = useState(null);
	const [selectedState, setSelectedState] = useState(null);
	const [selectedCity, setSelectedCity] = useState(null);

	useEffect(() => {
		fetch(URL)
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
			})
			.then((data) => {
				console.log(data);
				setRawData(data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	useEffect(() => {
		setRefinedData(rawData);
		setProducts(
			rawData
				.map((product) => product.product_name)
				.filter((item, ind, arr) => arr.indexOf(item) === ind)
		);
		setStates(
			rawData
				.map((product) => product.address.state)
				.filter((item, ind, arr) => arr.indexOf(item) === ind)
		);
		setCities(
			rawData
				.map((product) => product.address.city)
				.filter((item, ind, arr) => arr.indexOf(item) === ind)
		);
	}, [rawData]);

	useEffect(() => {
		let newData = [...rawData];

		if (isProductSelected && selectedProduct) {
			newData = newData.filter(
				(product) => product.product_name == selectedProduct
			);
		}

		if (isStateSelected && selectedState) {
			newData = newData.filter(
				(product) => product.address.state == selectedState
			);

			//only show the cities which are in this state.
			let newCities = rawData
				.filter((product) => product.address.state === selectedState)
				.map((product) => product.address.city);
			setCities([...new Set(newCities)]);
		} else {
			let newCities = rawData.map((product) => product.address.city);
			setCities([...new Set(newCities)]);
		}

		if (isCitySelected && selectedCity) {
			newData = newData.filter(
				(product) => product.address.city == selectedCity
			);
		}
		setRefinedData(newData);
	}, [selectedCity, selectedProduct, selectedState]);

	const onProductSelected = (e) => {
		if (e.target.value) {
			setIsProductSelected(true);
			setSelectedProduct(e.target.value);
		} else {
			setIsProductSelected(false);
			setSelectedProduct(null);
		}
	};

	const onStateSelected = (e) => {
		if (e.target.value) {
			//as selecting new state will remove the city selection
			setIsCitySelected(false);
			setSelectedCity(null);
			setIsStateSelected(true);
			setSelectedState(e.target.value);
		} else {
			setIsStateSelected(false);
			setSelectedState(null);
		}
	};

	const onCitySelected = (e) => {
		if (e.target.value) {
			setIsCitySelected(true);
			setSelectedCity(e.target.value);
		} else {
			setIsCitySelected(false);
			setSelectedCity(null);
		}
	};

	return (
		<div className="App">
			<FilterSection
				products={products}
				states={states}
				cities={cities}
				onProductSelect={onProductSelected}
				onStateSelect={onStateSelected}
				onCitySelect={onCitySelected}
			/>
			<ProductPage products={products} data={refinedData} />
		</div>
	);
};

export default App;
