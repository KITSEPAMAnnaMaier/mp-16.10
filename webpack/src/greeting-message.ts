const createGreetingMessage = (user: string, colour: string): HTMLElement => {
  const createElement = window.document.createElement('div');
  const greetingHeader = window.document.createElement('h2');
  greetingHeader.innerHTML = `Hello, ${user}!`;
  const greetingMessage = window.document.createElement('p');
  greetingMessage.innerHTML =
    `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
  when an unknown printer took a galley of type and scrambled it to make a type specimen book.
  It has survived not only five centuries, but also the leap into electronic typesetting,
  remaining essentially unchanged.`;

  createElement.appendChild(greetingHeader);
  createElement.appendChild(greetingMessage);
  createElement.classList.add(colour);

  return createElement;
};

export default createGreetingMessage;