import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  releaseYear: DS.attr('number'),
  author: DS.attr('string'),
  ISBN: DS.attr('string'),
  reader: DS.belongsTo('reader')
});
