import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function PizzaForm(props) {
	const { submit, changeHandler, values, disabled, errors } = props;

	const Form = styled.div`
		header,
		header h2 {
			text-align: center;
			background-color: red;
		}
		.section-label {
			background-color: grey;
			padding: 1%;
		}
		select {
			margin: 3% 5%;
			font-size: 1.3rem;
		}
		.radio-btns {
			display: flex;
			flex-direction: column;
			margin: 3% 5%;
			font-size: 1.3rem;
		}
		.checkboxes {
			display: flex;
			margin: 3% 5%;
			font-size: 1.3rem;
		}
		.err {
			color: red;
			font-size: 15%;
		}
		.box-column {
			display: flex;
			flex-direction: column;
		}
		.box-column input {
			margin: 3% 5%;
		}
		#specialInstructions {
			margin: 3% 5%;
			width: 80%;
		}
		.name-section {
			margin: 0 5%;
		}
		.link-btn {
			margin: 1.5rem auto;
		}
		.sub-btn {
			justify-content: center;
			padding: 1rem 2rem;
			font-size: 1.5rem;
			border-radius: 20px;
			background-color: lightgreen;
		}
	`;

	return (
		<Form>
			<form id="pizza-form" onSubmit={submit}>
				<header>
					<h2>Build Your Own Pizza</h2>
					<div className="main-image">hi</div>
				</header>
				<h1>Build Your Own Pizza</h1>
				<div>
					<div className="section-label">
						<h3>Choice of Size</h3>
						<h4>Required</h4>
					</div>
					<select onChange={changeHandler} value={values.size} name="size" id="size-dropdown">
						<option value="">Select</option>
						<option value="Small">Small"</option>
						<option value="Medium">Medium"</option>
						<option value="Large">Large"</option>
					</select>
				</div>

				<div>
					<div className="section-label">
						<h3>Choice of Sauce</h3>
						<h4>Required</h4>
					</div>
					<div className="radio-btns">
						<label>
							<input
								name="sauce"
								type="radio"
								onChange={changeHandler}
								checked={values.sauce === 'OriginalRed'}
								value="OriginalRed"
							/>{' '}
							Original Red
						</label>
						<label>
							<input
								name="sauce"
								type="radio"
								onChange={changeHandler}
								checked={values.sauce === 'GarlicRanch'}
								value="GarlicRanch"
							/>{' '}
							Garlic Ranch
						</label>
						<label>
							<input
								name="sauce"
								type="radio"
								id="BBQSauce"
								onChange={changeHandler}
								checked={values.sauce === 'BBQSauce'}
								value="BBQSauce"
							/>{' '}
							BBQ Sauce
						</label>
						<label>
							<input
								name="sauce"
								type="radio"
								id="SpinachAlfredo"
								onChange={changeHandler}
								checked={values.sauce === 'SpinachAlfredo'}
								value="SpinachAlfredo"
							/>{' '}
							Spinach Alfredo
						</label>
					</div>
				</div>

				<div>
					<div className="section-label">
						<h3>Add Toppings</h3>
						<h4>Choose as Many as you Like. Go crazy, ya Freakin' Animal.</h4>
					</div>
					<div className="checkboxes">
						<div className="leftboxes box-column">
							<label>
								<input
									name="pepperoni"
									id="pepperoni"
									type="checkbox"
									onChange={changeHandler}
									checked={values.pepperoni}
								/>{' '}
								Pepperoni
							</label>
							<label>
								<input
									name="sausage"
									id="sausage"
									type="checkbox"
									onChange={changeHandler}
									checked={values.sausage}
								/>{' '}
								Sausage
							</label>
							<label>
								<input
									name="canadianBacon"
									id="canadianBacon"
									type="checkbox"
									onChange={changeHandler}
									checked={values.canadianBacon}
								/>{' '}
								Canadian Bacon
							</label>
							<label>
								<input
									name="spicyItalianSausage"
									id="spicyItalianSausage"
									type="checkbox"
									onChange={changeHandler}
									checked={values.spicyItalianSausage}
								/>{' '}
								Spicy Italian Sausage
							</label>
						</div>

						<div className="rightboxes box-column">
							<label>
								<input
									name="dicedTomatos"
									id="dicedTomatos"
									type="checkbox"
									onChange={changeHandler}
									checked={values.dicedTomatos}
								/>{' '}
								Diced Tomatos
							</label>
							<label>
								<input
									name="blackOlives"
									id="blackOlives"
									type="checkbox"
									onChange={changeHandler}
									checked={values.blackOlives}
								/>{' '}
								Black Olives
							</label>
							<label>
								<input
									name="roastedGarlic"
									id="roastedGarlic"
									type="checkbox"
									onChange={changeHandler}
									checked={values.roastedGarlic}
								/>{' '}
								Roasted Garlic
							</label>
							<label>
								<input
									name="artichokeHearts"
									id="artichokeHearts"
									type="checkbox"
									onChange={changeHandler}
									checked={values.artichokeHearts}
								/>{' '}
								Artichoke Hearts
							</label>
						</div>
					</div>
				</div>

				{/* <div>
					<div className="section-label">
						<h3>Choice of Substitutes</h3>
						<h4>Choose up to 1</h4>
					</div>
					<div className="radio-btns">
						<label>
							<input type="radio" value="OriginalRed" name="sauce" /> Original Red
						</label>
					</div>
				</div> */}
				{/* <div className="err">{errors.specialInstructions}</div> */}
				<div>
					<div className="section-label">
						<h3>Special Instructions</h3>
					</div>
					<textarea
						name="specialInstructions"
						id="special-text"
						type="text"
						placeholder="Is there anything else you'd like to add"
						onChange={changeHandler}
						value={values.specialInstructions}
					/>
				</div>

				{/* <div className="err">{errors.name}</div> */}
				<div className="name-section">
					<div className="section-label">
						<h3>Personal Details</h3>
						<h4>Required</h4>
					</div>
					<label>
						Name:
						<input
							name="name"
							id="name-input"
							type="text"
							placeholder="Enter Name..."
							onChange={changeHandler}
							value={values.name}
						/>
					</label>
				</div>

				<Link className="link-btn" to="/pizza-ordered">
					<button className="sub-btn" disabled={disabled}>
						Submit Order
					</button>
				</Link>
			</form>
		</Form>
	);
}