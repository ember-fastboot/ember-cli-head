export function initialize(instance) {
  const renderer = instance.lookup('renderer:-dom');
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
