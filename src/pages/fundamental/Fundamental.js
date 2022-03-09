import Topic from '../../components/topic/Topic'

import style from './Fundamental.module.css'

export default function Fundamental() {
  return (
    <div className={style.wrapper}>
      <div className={style.innerWrapper}>
        <Topic
          title="Create React App"
          summary="Create React App is a toolchain recommended for creating a new single-page app."
        >
          <ul>
            <li><a href="https://reactjs.org/docs/create-a-new-react-app.html#create-react-app">React Docs - Create React App</a></li>
          </ul>
        </Topic>
        <Topic
          title="JSX"
          summary="JSX is an syntax extension to JavaScript recommended for use with React."
        >
          <ul>
            <li><a href="https://reactjs.org/docs/introducing-jsx.html">React Docs - Introducing JSX</a></li>
          </ul>
        </Topic>
        <Topic
          title="Components"
          summary="Components let you split UI into independent, reusable pieces, and think about each piece in isolation."
        >
          <ul>
            <li>Functional Component</li>
            <ul>
              <li>These are conceptually like functions</li>
              <li>They accept props and return React elements</li>
            </ul>
            <li>Class Component</li>
            <ul>
              <li>Components are extended with React.Component</li>
              <li>You can access component lifecycles directly</li>
            </ul>
            <li><a href="https://reactjs.org/docs/components-and-props.html">React Docs - Components and Props</a></li>
          </ul>
        </Topic>
        <Topic
          title="Props vs State"
          summary="Props are immutable and can not be modified. State are mutable and can be modified by setting a new state. State can be defined in the component. Props are passed down from the parent."
        >
          <ul>
            <li><a href="https://reactjs.org/docs/components-and-props.html">React Docs - Components and Props</a></li>
            <li><a href="https://reactjs.org/docs/state-and-lifecycle.html">React Docs - State and Lifecycle</a></li>
          </ul>
        </Topic>
        <Topic
          title="Conditional Rendering"
          summary="You can conditionally render React elements using if statements or ternary operators."
        >
          <ul>
            <li><a href="https://reactjs.org/docs/conditional-rendering.html">React Docs - Conditional Rendering</a></li>
          </ul>
        </Topic>
        <Topic
          title="Component Lifecycle"
          summary="Broadly classified into three parts including mounting, updating, and unmounting."
        >
          <ul>
            <li><a href="https://reactjs.org/docs/react-component.html#the-component-lifecycle">React Docs - The Component Lifecycle</a></li>
          </ul>
        </Topic>
        <Topic
          title="Lists & Keys"
          summary="Keys help React identify which items have changed, are added, or are removed. Keys are given to elements inside an array to give the element a stable identity."
        >
          <ul>
            <li>Keys use a string that uniquely identifies a list item among siblings</li>
            <li>Most common is to use the ID from the data you recieve</li>
            <li>Use item index as a last resort</li>
            <li><a href="https://reactjs.org/docs/lists-and-keys.html">React Docs - Lists and Keys</a></li>
          </ul>
        </Topic>
        <Topic
          title="Composition vs Inheritance"
          summary="It is recommended to use composition instead of inheritance to reuse code between components. For example, you can use props.children to pass UI elements."
        >
          <ul>
            <li><a href="https://reactjs.org/docs/composition-vs-inheritance.html">React Docs - Composition vs Inheritance</a></li>
          </ul>
        </Topic>
      </div>
    </div>
  )
}