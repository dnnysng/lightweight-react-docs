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
          <ul>
            <li><p className={style.code}><code>npx create-next-app</code></p></li>
          </ul>
        </Topic>
      </div>
    </div>
  )
}