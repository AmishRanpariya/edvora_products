import React from "react";

//css
import "./card.css";
const ProductCard = ({ product }) => {
	const date = new Date(product.date);
	return (
		<div className="card">
			<div className="upper-section">
				<img src={product.image} alt={product.name} className="thumb" />
				<div className="content">
					<p className="body1">{product.product_name}</p>
					<p className="body2">{product.brand_name}</p>
					<p className="body1 bold">
						<span>$ </span>
						{product.price}
					</p>
				</div>
			</div>
			<div className="lower-section">
				<div className="textgroup">
					<p className="body2">
						{product.address.city + ", " + product.address.state}
					</p>
					<p className="body2">
						{date.getDate() + ":" + date.getMonth() + ":" + date.getFullYear()}
					</p>
				</div>
				<div>
					<p className="body3">{product.discription}</p>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
