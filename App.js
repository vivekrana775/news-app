import React, {
  useEffect,
  useState,
  View,
  TextInput,
  TouchableOpacity,
  Text,
} from "react";

import { NavigationContainer } from "@react-navigation/native";

import { Provider } from "react-redux";
import { store, persistor } from "./app/store/store";
import { PersistGate } from "redux-persist/integration/react";

import AuthNavigator2 from "./navigation/AuthNavigator2";

const App = (props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <AuthNavigator2 />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
