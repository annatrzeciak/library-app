import DS from "ember-data";
import { validator, buildValidations } from "ember-cp-validations";

const Validations = buildValidations({
  firstName: {
    description: "First name",
    validators: [
      validator("presence", true),
      validator("length", {
        min: 3,
        message: "{description} must include minimum 3 characters"
      })
    ]
  },
  lastName: {
    description: "Last name",
    validators: [
      validator("presence", true),
      validator("length", {
        min: 3,
        message: "{description} must include minimum 3 characters"
      })
    ]
  },
  address: {
    description: "Address",
    validators: [
      validator("presence", true),
      validator("length", {
        min: 5,
        message: "{description} must include minimum 5 characters"
      })
    ]
  },
  phone: {
    description: "Phone",
    validators: [
      validator("format", {
        regex: /\b(\(?(\+|00)?48\)?)?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}\b/,
        message:
          "Invalid phone format. Correct format e.g: 123-456-789, 123456789, 123 456 789"
      })
    ]
  }
});

export default DS.Model.extend(Validations, {
  firstName: DS.attr("string"),
  lastName: DS.attr("string"),
  address: DS.attr("string"),
  phone: DS.attr("string"),
  books: DS.hasMany("book", { async: true, inverse: null })
});
