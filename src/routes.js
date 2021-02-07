import { BrowserRouter, Route, Switch } from "react-router-dom"

import ContactList from "./pages/ContactList"

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <div className="app-content">
          <Switch>
            <Route path="/" exact component={ContactList} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  )
}

export default Routes
