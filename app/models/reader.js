import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr('string'),
  lastName: DS.attr('string'),
  address:  DS.attr('string'),
  phone:  DS.attr('string'),
  books: DS.hasMany('book'),
});
