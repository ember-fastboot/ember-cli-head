export function initialize(owner) {
  const document = owner.lookup('service:-document');
  const component = owner.lookup('component:head-layout');

  component.appendTo(document.head);
}

export default {
  name: 'head-fastboot',
  initialize
};
