import Topic from '../../components/topic/Topic'

import style from './Advanced.module.css'

export default function Advanced() {

  return (
    <div className={style.wrapper}>
      <div className={style.innerWrapper}>
        <Topic
          title="Hooks"
          summary="Hooks allow you to use state and other React features without writing a class."
        >
          <ul>
            <li>
              <h5 className={style.subTitle}>Writing Your Own Hooks</h5>
              <ul className={style.subList}>
                <li>Building your own hooks lets you extract logic into reusable functions</li>
                <li>Hooks should be named starting with "use" i.e. useStatus()</li>
                <li>Can hide complex logic or help clean up messy components</li>
                <li><a href="https://reactjs.org/docs/hooks-custom.html">React Docs - Building Your Own Hooks</a></li>
              </ul>
            </li>
            <li>
              <h5 className={style.subTitle}>useCallback()</h5>
              <ul className={style.subList}>
                <li>Returns a memoized(pre-calculated) callback</li>
                <li>Recalculates the function that is going to be returned if any dependencies change</li>
                <li><a href="https://reactjs.org/docs/hooks-reference.html#usecallback">React Docs - useCallback()</a></li>
              </ul>
            </li>
            <li>
              <h5 className={style.subTitle}>useMemo()</h5>
              <ul className={style.subList}>
                <li>Returns a memoized(pre-calculated) value</li>
                <li><a href="https://reactjs.org/docs/hooks-reference.html#usememo">React Docs - useMemo()</a></li>
              </ul>
            </li>
            <li>
              <h5 className={style.subTitle}>useRef()</h5>
              <ul className={style.subList}>
                <li>Returns a mutable object</li>
                <li>Holds mutable value in '.current' property</li>
                <li>Gives you the same ref object on every render</li>
                <li>Mutating .current does not cause a re-render</li>
                <li>Use if you need to manage focus, text selection, trigger imperative animations or integrating third-party libraries</li>
                <li><a href="https://reactjs.org/docs/hooks-reference.html#useref">React Docs - useRef()</a></li>
              </ul>
            </li>
            <li>
              <h5 className={style.subTitle}>useReducer()</h5>
              <ul className={style.subList}>
                <li>Returns current state paired with a dispatch method</li>
                <li>Preferable to useState() when you have complex state logic</li>
                <li><a href="https://reactjs.org/docs/hooks-reference.html#usereducer">React Docs - useReducer()</a></li>
              </ul>
            </li>
            <li>
              <h5 className={style.subTitle}>useContext()</h5>
              <ul className={style.subList}>
                <li>Accepts a context object and returns its current context value</li>
                <li><a href="https://reactjs.org/docs/refs-and-the-dom.html">React Docs - Refs and the DOM</a></li>
              </ul>
            </li>
          </ul>
        </Topic>
        <Topic
          title="Context"
          summary="Provides a way to pass data through the component tree without having to do so manually with props. Apply sparingly because it makes component reuse more difficult."
        >
          <ul>
            <li><a href="https://reactjs.org/docs/context.html">React Docs - Context</a></li>
          </ul>
        </Topic>
        <Topic
          title="Refs"
          summary="Provides a way to access DOM nodes or React elements created in the render method. Good use cases include managing focus, text, media playback. They are also good for triggering imperative animations and integrating third-party DOM libraries."
        >
          <ul>
            <li><a href="https://reactjs.org/docs/refs-and-the-dom.html">React Docs - Refs and the DOM</a></li>
          </ul>
        </Topic>
        <Topic
          title="Render Props"
          summary="Technique for sharing code between React components using a prop whose value is a function."
        >
          <ul>
            <li><a href="https://reactjs.org/docs/render-props.html">React Docs - Render Props</a></li>
          </ul>
        </Topic>
        <Topic
          title="Higher Order Components"
          summary="A higher order component is a function that takes a component and returns a new component."
        >
          <ul>
            <li><a href="https://reactjs.org/docs/higher-order-components.html">React Docs - Higher-Order Components</a></li>
          </ul>
        </Topic>
        <Topic
          title="Portals"
          summary="Provide a way to render children into a DOM node that exists outside the DOM hierarchy of the parent."
        >
          <ul>
            <li>Use cases include dialogs, hovercards, tooltips, and modals</li>
            <li><a href="https://reactjs.org/docs/portals.html">React Docs - Portals</a></li>
          </ul>
        </Topic>
        <Topic
          title="Error Boundaries"
          summary="Error Boundaries are components that catch Javascript errors anywhere in their child component tree, log those errors, and display a fallback UI."
        >
          <ul>
            <li>Error Boundaries are components that catch Javascript errors anywhere in their child component tree, log those errors, and display a fallback UI.</li>
            <li><a href="https://reactjs.org/docs/error-boundaries.html">React Docs - Error Boundaries</a></li>
          </ul>
        </Topic>
      </div>
    </div>
  )
}