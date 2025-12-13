import "./styles/style.css";
import Navigation from "./pages/Navigation";
import { useSelector, useDispatch } from "react-redux";
import { selectToken } from "./store/auth/authSelectors";
import { useEffect } from "react";
import { getCurrentUser } from "./store/auth/authOperations";

function App() {
  const isToken = useSelector(selectToken);
  const dispatch = useDispatch();

  useEffect(() => {
    if(isToken) {
      dispatch(getCurrentUser());
    }
  }, [dispatch, isToken]);

  return (
    <>
      <Navigation />
    </>
  )
}

export default App
