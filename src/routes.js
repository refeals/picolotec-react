import { BrowserRouter, Route, Switch } from "react-router-dom"

import ContactList from "./pages/ContactList"
import CreateContact from "./pages/CreateContact"
import UpdateContact from "./pages/UpdateContact"

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <div className="app-content">
          <Switch>
            <Route path="/" exact component={ContactList} />
            <Route path="/create" exact component={CreateContact} />
            <Route path="/update/:id" exact component={UpdateContact} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  )
}

export default Routes
