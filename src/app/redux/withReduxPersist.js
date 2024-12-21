import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./store";

const withReduxPersist = (PageComponent) => {
  const WrappedComponent = (props) => (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PageComponent {...props} />
      </PersistGate>
    </Provider>
  );
  return WrappedComponent;
};

export default withReduxPersist;
