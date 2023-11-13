import {createRoot} from "react-dom/client"
import Main from "./src/components/Main"

const App = () => {
    return (
        <div>
            <h1>My First React Project</h1>
            <Main />
        </div>
    )
}

const root = createRoot(document.getElementById("root"));

root.render(<App/>)
