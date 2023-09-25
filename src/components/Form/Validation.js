export default function validation(input) {
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    const errors = {};
  
    if (!input.username) {
      errors.username = "¡El nombre es obligatorio!";

    } 
    
    else if (input.username.length > 35) {
      errors.username = "¡Máximo 35 caracteres!";
    } 
    
    else if (!regexEmail.test(input.username)) {
      errors.username = "¡El nombre debe ser un email válido!";
    }
  
    if (input.password.length < 6 || input.password.length > 10) {
      errors.password = "¡Entre 6 y 10 caracteres!";
    }
  
    return errors;
  }