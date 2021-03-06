import Register from "./pages/Register";
import Login from "./pages/Login";
import "./styles/App.scss";
import ApolloProvider from "./ApolloProvider";
import { BrowserRouter, Switch } from "react-router-dom";
import Home from "./pages/home/Home";
import { AuthProvider } from "./context/auth";
import { MessageProvider } from "./context/message";
import DynamicRoute from "./util/DynamicRoute";

function App() {
  return (
    <ApolloProvider>
      <AuthProvider>
        <MessageProvider>
          <BrowserRouter>
            <div className='App'>
              <Switch>
                <DynamicRoute path='/' exact component={Home} authenticated />
                <DynamicRoute path='/register' component={Register} guest />
                <DynamicRoute path='/login' component={Login} guest />
              </Switch>
            </div>
          </BrowserRouter>
        </MessageProvider>
      </AuthProvider>
    </ApolloProvider>
  );
}

export default App;
