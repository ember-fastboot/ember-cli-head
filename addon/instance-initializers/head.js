export function initialize(instance) {
  const container = instance.lookup ? instance : instance.container;
  let component;
  const renderer = container.lookup('renderer:-dom');
  if (window.FastBoot) {
    const componentFactory =
            instance._lookupFactory('component:head-content');
    // explicitly set renderer & domhelper in case we're in fastboot
    component = componentFactory.create(
      instance.ownerInjection(),
      {
        renderer,
        _domHelper: renderer._dom
      }
    );
  } else {
    component = container.lookup('component:head-content');
  }
  component.appendTo(renderer._dom.document.head);
}

export default {
  name: 'head',
  initialize: initialize
};
