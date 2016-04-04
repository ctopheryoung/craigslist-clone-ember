import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  author: DS.attr('string'),
  phone: DS.attr('number'),
  email: DS.attr('string'),
  createdDate: DS.attr('date', { defaultValue: new Date() }),
  price: DS.attr('number'),
  compensation: DS.attr('number'),
  subcategory: DS.belongsTo('subcategory', { async: true })
});
