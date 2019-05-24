import DS from "ember-data";
import { validator, buildValidations } from "ember-cp-validations";

const Validations = buildValidations({
  title: {
    description: "Title",
    validators: [
      validator("presence", true),
      validator("length", {
        min: 1,
        message: "{description} must include minimum 1 characters"
      })
    ]
  },
  releaseYear: {
    description: "Release year",
    validators: [
      validator("number",
      {allowNone:false,
        allowString: true,
        integer: true,
        lte: (new Date()).getFullYear(),
        gt: 100,
        message:
          "{description} must be integer, greater than to 100 and less than or equal to the current year"
      })
    ]
  },
  author: {
    description: "Author",
    validators: [
      validator("presence", true),
      validator("length", {
        min: 3,
        message: "{description} must include minimum 3 characters"
      })
    ]
  },
  ISBN: {
    description: "ISBN",
    validators: [
      validator("presence", true),
      validator("length", {
        min: 10,
        max: 13,
        message: "{description} must include 10 or 13 characters"
      })
    ]
  }
});

export default DS.Model.extend(Validations, {
  title: DS.attr("string"),
  releaseYear: DS.attr("number"),
  author: DS.attr("string"),
  ISBN: DS.attr("string"),
  reader: DS.belongsTo("reader")
});
