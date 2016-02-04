export function initialize(instance) {
  const container = instance.lookup ? instance : instance.container;
  const componentFactory =
          instance._lookupFactory('component:head-content');
  const renderer = container.lookup('renderer:-dom');
  // explicitly set renderer & domhelper in case we're in fastboot
  const component = componentFactory.create(
    instance.ownerInjection(),
    {
      renderer,
      _domHelper: renderer._dom
    }
  );
  component.appendTo(renderer._dom.document.head);
}

export default {
  name: 'head',
  initialize: initialize
};
