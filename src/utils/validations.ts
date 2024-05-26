interface Form {
  name: string;
  company: string;
  email: string;
  country: string;
  phone: string;
  message: string;
  agreeToPolicies: boolean;
}

export const validateForm = (form: Form) => {
  const { name, company, email, country, phone, message, agreeToPolicies } =
    form;
  const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  const regexPhone = /^[1-9][0-9]*$/;

  if (!name || !company || !email || !country || !phone || !message) {
    return "Todos los campos son requeridos!";
  } else if (!regexPhone.test(phone)) {
    return "Ingresa un teléfono válido!";
  } else if (!regexEmail.test(email)) {
    return "Ingresa un email válido!";
  } else if (!agreeToPolicies) {
    return "Para enviar el formulario debes aceptar las Políticas de Privacidad y Tratamiento de Datos!";
  }

  return "";
};
