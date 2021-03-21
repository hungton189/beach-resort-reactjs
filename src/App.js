import Router from "./Router"
import NavBar from "./Components/NavBar/index"
import LoginForm from "./Components/LoginForm/index"
import "./App.css"
function App() {
	return ( <div className="app">
		<NavBar />
		<Router />
		<LoginForm />
		</div>
	);
}

export default App;
