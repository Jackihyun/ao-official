import Modal from "react-modal"; // 추가
import Root from "@/pages/home/page/index";
import About from "@/pages/about/page/index"
import Archive from "@/pages/archive/page/index"
import Intro from "@/pages/intro/page/index"
import History from "@/common/components/History"
import Apply from "@/pages/apply/page/index"
import InitialSetup from "@/common/components/InitialSetup";
import Admin from "@/pages/admin/page/index"
import AdminSignIn from "@/pages/admin/sign-in/page/index"
import ApplicationHistory from "@/pages/admin/application-history/page/index"

import { Provider } from "react-redux";
import { store } from '@/common/redux/store';

import "@/App.css";
import "@/common/assets/css/scrollbar.css"

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";



Modal.setAppElement("#root"); // 추가

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          element={<InitialSetup />}
        >
          <Route
            path="/"
            element={<Root />}
          />

          <Route
            path="/apply"
            element={<Apply />}
          />

          <Route
            element={<Admin />}
          >
            <Route
              path="/admin/sign-in"
              element={<AdminSignIn />}
            />

            <Route
              path="/admin/application-history"
              element={<ApplicationHistory />}
            />
          </Route>

          <Route
            element={<History />}
          >
            <Route
              path="/about"
              element={<About />}
            />

            <Route
              path="/archive"
              element={<Archive />}
            />

            <Route
              path="/intro"
              element={<Intro />}
            />
          </Route>

        </Route>
      </>
    ));

  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  )
};

export default App;
