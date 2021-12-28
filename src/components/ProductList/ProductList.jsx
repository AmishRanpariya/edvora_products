import React from "react";

//custom components
import ProductCard from "../ProductCard/ProductCard";

//css
import "./list.css";

const ProductList = ({ products, productName }) => {
	return (
		<div>
			<div className="cardListHeader">
				<p className="title3">{productName}</p>
				<div className="divider"></div>
			</div>
			<div className="cardList">
				{products.map((product) => (
					<ProductCard key={product.time} product={product} />
				))}
			</div>
		</div>
	);
};

export default ProductList;
