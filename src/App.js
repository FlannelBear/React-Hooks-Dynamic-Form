import React from 'react';
import { useForm } from './hooks/form-hook';
import "./App.css";
export const App = () => {

	const formModel = {
		"First Name": '',
		"Last Name": '',
		"Consumer ID": ''
	}

	const [
		inputs, 
		reset
	] = useForm(formModel);

	const submitForm = (e) => {
		e.preventDefault()
		reset();
	}

	return(
		<React.Fragment>
			<form onSubmit={submitForm}>
				{inputs.map(([label, input], index) => {
					return(
						<label key={index}>{label}
							<input type="text" {...input.bind}/>
						</label>
					);
				})}
				<input type="submit" value="Submit"/>
			</form>
			<div className="results">
				{inputs.map(([label, input], index) => {
					return <p key={index}>{`${label}: ${input.value}`}</p>
				})}
			</div>
		</React.Fragment>
	);
}
