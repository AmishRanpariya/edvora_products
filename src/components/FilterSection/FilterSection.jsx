import React from "react";

//custom components
import Select from "../Select/Select";

//css
import "./filterSection.css";

const FilterSection = ({
	products,
	states,
	cities,
	onProductSelect,
	onStateSelect,
	onCitySelect,
}) => {
	return (
		<section className="leftSection">
			<form action="" className=" filterForm">
				<h3 className="title4">Filter</h3>
				<div className="divider"></div>
				<div className="selectContainer">
					<Select
						defaultValue={"Products"}
						options={products}
						onSelect={onProductSelect}
					/>
					<Select
						defaultValue={"State"}
						options={states}
						onSelect={onStateSelect}
					/>
					<Select
						defaultValue={"City"}
						options={cities}
						onSelect={onCitySelect}
					/>
				</div>
			</form>
		</section>
	);
};

export default FilterSection;
