import { useInput } from './input-hook';

const initialModel = {
	"First Name": '',
	"Last Name": '',
	"Emp ID": ''
}

export const useForm = (model = initialModel) => {
	for(let key in model){
		model[key] = useInput();
	}
	const reset = () => Object.values(model).map(input => input.reset());
	return [ Object.entries(model), reset ];
}
