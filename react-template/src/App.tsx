import './styles.css'
import './styles.scss'
import IMAGE from './react_logo.png'
import BANANA from './bananas.svg'
import { Counter } from './ClickCounter'

export const App = () => {
  return (
    <>
      <h1>
        (6)React TypeScript WebPack Starter Template --- {process.env.NODE_ENV}{' '}
        | {process.env.name}
      </h1>
      <img src={IMAGE} alt="React Logo" width="300" />
      <img src={BANANA} alt="BANANA" width="300" />
      <Counter />
    </>
  )
}
