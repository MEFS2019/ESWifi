export const getFormValues = formElement => {
  const formElements = Object.values(formElement.elements);
  const formValues = formElements.reduce((previousValues, currentInput) => {
    const { name, value } = currentInput;
    if (!name) return previousValues;
    return {
      ...previousValues,
      [name]: value
    };
  }, {});

  return formValues;
};
