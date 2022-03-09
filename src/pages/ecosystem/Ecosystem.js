import Topic from '../../components/topic/Topic'

import style from './Ecosystem.module.css'

export default function Ecosystem() {
  return (
    <div className={style.wrapper}>
      <div className={style.innerWrapper}>
        <Topic
          title="React Router"
          summary="React Router is a fully-featured client and server-side routing library."
        >
          <ul>
            <li>Install Package</li>

            <li className={style.code}><code>npm i react-router-dom@6</code></li>

            <li>Connect the URL</li>
            <li className={style.code}><code>{`import { BrowserRouter } from "react-router-dom"`}</code><br />
              <br />
              <code>{`<BrowserRouter> <App /> </BrowserRouter>`}</code></li>
            <li>Add Links</li>
            <li className={style.code}>
              <code>{`<Link to="/">Home</Link>`}</code><br />
              <code>{`<Link to="/about">About</Link>`}</code></li>
            <li>Add Routes</li>
            <li className={style.code}>
              <code>{`<Routes>`}</code><br />
              <code>{`<Route path="/" element={<Home />} />`}</code><br />
              <code>{`<Route path="/about" element={<About />} />`}</code><br />
              <code>{`</Routes>`}</code>
            </li>
            <li>Nested Routes</li>
            <li className={style.code}>
              <code>{`<Route path="/" element={<Home />}>`}</code><br />
              <code>{`<Route path="about" element={<About />} />`}</code><br />
              <code>{`</Route>`}</code>
            </li>
          </ul>
        </Topic>
      </div>
    </div>
  )
}