import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return this.store.createRecord('reader');
      },
    
      actions: {
    
        saveReader(newReader) {
            newReader.save().then(() => this.transitionTo('readers'));
        },
    
        willTransition() {
          // rollbackAttributes() removes the record from the store
          // if the model 'isNew'
          this.controller.get('model').rollbackAttributes();
        }
      }
});
