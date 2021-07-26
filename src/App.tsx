import './styles.css'
import IMAGE from './react_logo.png'
import BANANA from './bananas.svg'

export const App = () => {
    return <>
    <h1>React TypeScript WebPack Starter Template</h1>
    <img src={IMAGE} alt="React Logo" width="300" />
    <img src={BANANA} alt="BANANA" width="300" />
    </>
}