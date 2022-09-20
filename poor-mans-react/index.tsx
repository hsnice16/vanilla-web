// React
let React = {
  createElement: (tag, props, ...children) => {
    if (typeof tag == "function") {
      try {
        return tag(props);
      } catch ({ promise, key }) {
        // concurrent feature
        promise.then((data) => {
          promiseCache.set(key, data);
          rerender();
        });
        return { tag: "h1", props: { children: ["I AM LOADING"] } };
      }
    }

    var element = { tag, props: { ...props, children } };
    // console.log(element); /* Will console log the vDOM */
    return element;
  },
};

const states = [];
let stateCursor = 0;

// React useState hook
const useState = (initialState) => {
  const FROZENCURSOR = stateCursor;
  states[FROZENCURSOR] = states[FROZENCURSOR] || initialState;

  let setState = (newState) => {
    states[FROZENCURSOR] = newState;
    rerender();
  };

  stateCursor += 1;
  return [states[FROZENCURSOR], setState];
};

const promiseCache = new Map();

// For Concurrent feature
const createResource = (thingThatReturnsASomething, key) => {
  if (promiseCache.has(key)) {
    return promiseCache.get(key);
  }

  throw { promise: thingThatReturnsASomething(), key };
};

// Functional Component
const App = () => {
  const [name, setName] = useState("person");
  const [count, setCount] = useState(0);

  const dogPhotoUrl = createResource(
    () =>
      fetch("https://dog.ceo/api/breeds/image/random")
        .then((r) => r.json())
        .then((payload) => payload.message),
    "dogPhoto"
  );

  return (
    <div className="react-2022">
      <h1>Hello, {name}!</h1>
      <input
        type="text"
        placeholder="name"
        value={name}
        onchange={(e) => setName(e.target.value)}
      />
      <h2>The count is: {count}</h2>
      <button onclick={() => setCount(count + 1)}>+</button>
      <button onclick={() => setCount(count - 1)}>-</button>
      <img src={dogPhotoUrl} alt="GOOD BOYYYYEEE" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis,
        officiis dicta ipsa dolor iste iure et harum eaque rem dolore voluptas
        deleniti commodi praesentium labore odio corrupti debitis architecto
        ducimus.
      </p>
    </div>
  );
};

// React Render
const render = (reactElementOrStringOrNumber, container) => {
  if (["string", "number"].includes(typeof reactElementOrStringOrNumber)) {
    container.appendChild(
      document.createTextNode(String(reactElementOrStringOrNumber))
    );
    return;
  }

  const actualDomElement = document.createElement(
    reactElementOrStringOrNumber.tag
  );

  if (reactElementOrStringOrNumber.props) {
    Object.keys(reactElementOrStringOrNumber.props)
      .filter((p) => p !== "children")
      .forEach(
        (p) => (actualDomElement[p] = reactElementOrStringOrNumber.props[p])
      );
  }

  if (reactElementOrStringOrNumber.props.children) {
    reactElementOrStringOrNumber.props.children.forEach((child) =>
      render(child, actualDomElement)
    );
  }

  container.appendChild(actualDomElement);
};

// Rerender
const rerender = () => {
  stateCursor = 0;
  window.app.firstChild.remove();
  render(<App />, window.app);
};

// render(<App />, document.querySelector("#app"));
render(<App />, window.app);
