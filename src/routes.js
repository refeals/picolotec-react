import { BrowserRouter, Route, Switch } from "react-router-dom"

import ContactList from "./pages/ContactList"
import CreateContact from "./pages/CreateContact"

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <div className="app-content">
          <Switch>
            <Route path="/" exact component={ContactList} />
            <Route path="/create" exact component={CreateContact} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  )
}

export default Routes
