import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import jsx from 'react-syntax-highlighter/dist/esm/languages/prism/jsx';
import dark from 'react-syntax-highlighter/dist/esm/styles/prism/dracula';

import Topic from '../../components/topic/Topic'

import style from './Ecosystem.module.css'

export default function Ecosystem() {

  SyntaxHighlighter.registerLanguage('jsx', jsx);

  const apiCode = `  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("URL")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setData(result)
        },
      )
      .catch(
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])
  
  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      {/** whatever */}
    );
  }`

  return (
    <div className={style.wrapper}>
      <div className={style.innerWrapper}>
        <Topic
          title="React Router"
          summary="React Router is a fully-featured client and server-side routing library."
        >
          <ul>
            <li>Install Package</li>
            <div className={style.code}>
              <SyntaxHighlighter wrapLongLines="true" language="jsx" style={dark}>
                {`npm i react-router-dom@6`}
              </SyntaxHighlighter>
            </div>
            <li>Connect the URL</li>
            <div className={style.code}>
              <SyntaxHighlighter wrapLongLines="true" language="jsx" style={dark}>
                {`import { BrowserRouter } from "react-router-dom"

<BrowserRouter> 
  <App /> 
</BrowserRouter>`}
              </SyntaxHighlighter>
            </div>
            <li>Add Links</li>
            <div className={style.code}>
              <SyntaxHighlighter wrapLongLines="true" language="jsx" style={dark}>
                {`<Link to="/">Home</Link>
<Link to="/about">About</Link>`}
              </SyntaxHighlighter>
            </div>
            <li>Add Routes</li>
            <div className={style.code}>
              <SyntaxHighlighter wrapLongLines="true" language="jsx" style={dark}>
                {`<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
</Routes>`}
              </SyntaxHighlighter>
            </div>
            <li>Nested Routes</li>
            <div className={style.code}>
              <SyntaxHighlighter wrapLongLines="true" language="jsx" style={dark}>
                {`<Route path="/" element={<Home />}>
  <Route path="about" element={<About />} />
</Route>`}
              </SyntaxHighlighter>
            </div>
            <li><a href="https://reactrouter.com/docs/en/v6">React Router Docs</a></li>
          </ul>
        </Topic>
        <Topic
          title="Server-Side Rendering"
          summary="Opt for server-side rendering if you need to pre-render a page whose data must be fetched at request time."
        />
        <Topic
          title="Client-Side Rendering"
          summary="If your page contains frequently updating data, and you don't need to pre-render the data, you can fetch the data on the client side."
        />
        <Topic
          title="Static Site Generation"
          summary="Use this if the data required to render the page is available at build time ahead of a user's request, the data comes from a headless CMS, data is publicly cached, or if the page must be pre-rendered and be very fast."
        />
        <Topic
          title="NextJS"
          summary="A tool for creating react applications with a lot of features built in such as routing, image optimization, fast refresh, and data fetching."
        >
          <div className={style.code}>
            <SyntaxHighlighter wrapLongLines="true" language="jsx" style={dark}>
              {`npx create-next-app`}
            </SyntaxHighlighter>
          </div>
        </Topic>
        <Topic
          title="API Calls"
        >
          <div className={style.code}>
            <SyntaxHighlighter wrapLongLines="true" language="jsx" style={dark}>
              {apiCode}
            </SyntaxHighlighter>
          </div>
        </Topic>
        <Topic
          title="Forms"
        >
          <ul>
            <li><a href="https://reactjs.org/docs/forms.html">React Docs: Forms</a></li>
            <li><a href="https://formik.org/docs/overview">Formik Docs</a></li>
          </ul>
        </Topic>
        <Topic
          title="Jest"
        >
          <ul>
            <li>A testing framework that provides two key ingredients:</li>
            <ul>
              <li>An assertion library</li>
              <li>A test runner</li>
            </ul>
            <li>Searches for files ending in test.js, specs.js, or inside a __tests__ directory</li>
          </ul>
          <div className={style.code}>
            <SyntaxHighlighter wrapLongLines="true" language="jsx" style={dark}>
              {`// import the functions to test
import { findRecipe, getIngredients } from "./recipes.js"; 
 
test("Get the full recipe for Pesto", async () => {
    // testing logic for findRecipe() omitted...
}, 10000);
 
test("Get only the ingredients list for Pesto", () => {
    // testing logic for getIngredients() omitted...
});`}
            </SyntaxHighlighter>
          </div>
          <ul>
            <li>Arrange, Act, Assert</li>
            <ul>
              <li>Arrange - Declare the input and expected output</li>
              <li>Act - Pass the input into the function being tested</li>
              <li>Assert - Use expect() and toEqual() to compare values</li>
            </ul>
          </ul>
          <div className={style.code}>
            <SyntaxHighlighter wrapLongLines="true" language="jsx" style={dark}>
              {`test("Result being tested for", () => {
  //arrange
  const theInput
  const expectedOutput
 
  //act
  const actualResult = getFunction(theInput);
 
  //assertions
  expect(actualResult).toEqual(expectedResult)
});`}
            </SyntaxHighlighter>
          </div>
          <ul>
            <li><a href="https://jestjs.io/docs/expect">.expect() Methods List</a></li>
            <li>Test async function by wrapping assertion in a try/catch and adding done()</li>
            <li><a href="https://jestjs.io/docs/mock-function-api">Mock Function Methods List</a></li>
            <li><a href="https://jestjs.io/docs/getting-started">Jest Docs</a></li>
            <li><a href="https://testing-library.com/docs/react-testing-library/intro/">React Testing Library Docs</a></li>
          </ul>
        </Topic>
        <Topic
          title="React Testing Library"
          summary="A UI-layer testing framework that helps us ensure that our components are rendering and behaving properly."
        >
          <ul>
            <li>Advantages</li>
            <ul>
              <li>Built explicity for testing React components</li>
              <li>Allows us to test our components in a way that mimics real user interactions</li>
            </ul>
          </ul>
        </Topic>
      </div>
    </div >
  )
}