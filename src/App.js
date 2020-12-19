import React, { useState }  from "react";
import Footer from "./container/Footer/Footer";
import Header from "./container/Header/Header";
import { Provider } from "react-redux";
import store from "./container/ReduxMethods/store";

const App = () => {
    return (
      <div> 
        <Provider store={store}>
          <Header />
        </Provider>
        <Footer />
      </div>
      );
};

export default App;