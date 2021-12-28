import React, { useEffect, useState } from "react";

//custom components
import ProductList from "../ProductList/ProductList";

//css
import "./productPage.css";

const ProductPage = ({ products, data }) => {
	const [productLists, setProductLists] = useState([]);
	useEffect(() => {
		//making 2D array, each inner array contains same products(grouping the products)
		setProductLists(
			products.map((product) => {
				return data.filter((item) => item.product_name === product);
			})
		);
	}, [data, products]);

	return (
		<section className="rightSection">
			<header>
				<h1 className="title1">Edvora</h1>
				<p className="title2">Products</p>
			</header>
			<main>
				{productLists.map(
					(productList, ind) =>
						productList &&
						productList.length > 0 && (
							<ProductList
								key={ind}
								products={productList}
								productName={productList[0].product_name}
							/>
						)
				)}
			</main>
		</section>
	);
};

export default ProductPage;
