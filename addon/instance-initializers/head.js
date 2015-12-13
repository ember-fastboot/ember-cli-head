export function initialize(instance) {
  const container = instance.lookup ? instance : instance.container;
  const component = container.lookup(
    'component:head-content'
  );
  component.appendTo('head');
}

export default {
  name: 'head',
  initialize: initialize
};
