export const createNewElement = element => {
	return document.createElement(element);
};

export const appendElement = (parent, element) => {
	return parent.appendChild(element);
};