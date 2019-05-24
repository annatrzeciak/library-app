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
  email: {
    description: "Email",
    validators: [
      validator("presence", true),
      validator("format", {
        type: "email",
        message: "An invalid email format"
      })
    ]
  },
  password: {
    description: "Password",
    validators: [
      validator("presence", true),
      validator("length", {
        min: 4,
        max: 10
      }),
      validator("format", {
        regex: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,10}$/,
        message:
          "{description} must include at least one upper case letter, one lower case letter, and a number"
      }),
      validator("length", {
        isWarning: true,
        min: 6,
        message: "What kind of weak password is that?"
      })
    ]
  }
});

export default DS.Model.extend(Validations, {
  firstName: DS.attr("string"),
  lastName: DS.attr("string"),
  email: DS.attr("string"),
  password: DS.attr("string")
});
