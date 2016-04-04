import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  category: DS.belongsTo('category', { async: true }),
  posts: DS.hasMany('post', { async: true })
});
