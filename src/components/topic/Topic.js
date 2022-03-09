import style from './Topic.module.css'

export default function Topic({ title, summary, content, children }) {
  return (
    <div className={style.wrapper}>
      <h3 className={style.title}>{title}</h3>
      <p className={style.sumary}>{summary}</p>
      {children}
    </div>
  )
}