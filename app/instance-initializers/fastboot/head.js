export function initialize(instance) {
  const container = instance.lookup ? instance : instance.container;
  const renderer = container.lookup('renderer:-dom');
  const componentFactory =
          instance._lookupFactory('component:head-layout');
  // explicitly set renderer & domhelper since we're in fastboot
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
  name: 'head-fastboot',
  initialize: initialize
};
