
import "./Repairs.css"

export const Repairs = () => {

    return (
        <>
        <Route
          render={() => {
            if (localStorage.getItem("honey_customer")) {
              return (
                <>
                  <NavBar />
                  <ApplicationViews />
                </>
              );
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
    
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </>
    )
}