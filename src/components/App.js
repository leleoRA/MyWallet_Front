import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from '../components/GlobalStyle';

import { UserProvider } from '../contexts/UserContext';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import Home from '../pages/Home';
import AddRevenue from '../pages/AddRevenue';
import AddExpense from '../pages/AddExpense';

export default function App(){
    return (
        <>
            <GlobalStyle />
            <UserProvider>
            <BrowserRouter>
                <Switch>

                    <Route path="/login" exact >
                        <LoginPage />
                    </Route>

                    <Route path="/signup" exact>
                        <SignUpPage />
                    </Route>

                    <Route path="/" exact>
                        <Home />
                    </Route>

                    <Route path="/add-revenue" exact>
                        <AddRevenue />
                    </Route>

                    <Route path="/add-expense" exact>
                        <AddExpense />
                    </Route>

                </Switch>
            </BrowserRouter>
            </UserProvider>
        </>
    );
}