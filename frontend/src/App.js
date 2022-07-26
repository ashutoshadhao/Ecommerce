import "./App.css";
import { useEffect, useState } from "react";
import Header from "./component/layout/Header/Header";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route, useParams } from "react-router-dom";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home.jsx";
import LoadingBar from "./component/layout/Loader/LoadingBar";
import ProductDetails from "./component/Product/ProductDetails.jsx";
import Products from "./component/Product/Products.jsx";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import WebFont from "webfontloader";
import UserOptions from "./component/layout/Header/UserOptions.jsx";
import { useSelector } from "react-redux";
import ProtectedRoute from "./component/Route/ProtectedRoute.jsx";
import Profile from "./component/User/Profile.jsx";
import UpdateProfile from "./component/User/UpdateProfile.jsx";
import UpdatePassword from "./component/User/UpdatePassword.jsx";
import ForgotPassword from "./component/User/ForgotPassword.jsx";
import Cart from "./component/Cart/Cart.jsx";
import Shipping from "./component/Cart/Shipping.jsx";
import ConfirmOrder from "./component/Cart/ConfirmOrder.jsx";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Payment from "./component/Cart/Payment.jsx";
import OrderSuccess from "./component/Cart/OrderSuccess.jsx";
import MyOrders from "./component/Order/MyOrders.jsx";
import OrderDetails from "./component/Order/OrderDetails.jsx";
import Dashboard from "./component/Admin/Dashboard.js";
import ProductList from "./component/Admin/ProductList.js";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct";
import OrderList from "./component/Admin/OrderList";
import ProcessOrder from "./component/Admin/ProcessOrder";
import UsersList from "./component/Admin/UsersList";
import UpdateUser from "./component/Admin/UpdateUser";
import ProductReviews from "./component/Admin/ProductReviews";
import Contact from "./component/layout/Contact/Contact";
import About from "./component/layout/About/About";
import NotFound from "./component/layout/Not Found/NotFound.jsx";

function App() {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
    // console.log(data.stripeApiKey);
    setStripeApiKey(data.stripeApiKey);
  }
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["sans-serif", "Droid Sans", "Chilanka"],
      },
    });
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);
  return (
    <>
      <Header />
      {isAuthenticated && <UserOptions user={user} />}

      {stripeApiKey && (
        <Elements stripe={loadStripe(stripeApiKey)}>
          <Routes>
            <Route
              path="/process/payment"
              element={
                isAuthenticated ? (
                  loading ? (
                    <LoadingBar />
                  ) : (
                    <Payment />
                  )
                ) : (
                  <LoginSignUp />
                )
              }
            ></Route>
          </Routes>
        </Elements>
      )}
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
        <Route exact path="/products" element={<Products />}></Route>
        <Route path="/products/:keyword" element={<Products />}></Route>
        <Route path="/login" element={<LoginSignUp />}></Route>
        <Route path="/password/forgot" element={<ForgotPassword />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>

        <Route
          path="/account"
          element={
            isAuthenticated === true ? (
              loading ? (
                <LoadingBar />
              ) : (
                <Profile />
              )
            ) : (
              <LoginSignUp />
            )
          }
        ></Route>

        <Route
          path="/me/update"
          element={
            isAuthenticated === true ? (
              loading ? (
                <LoadingBar />
              ) : (
                <UpdateProfile />
              )
            ) : (
              <LoginSignUp />
            )
          }
        ></Route>

        <Route
          path="/password/update"
          element={
            isAuthenticated === true ? (
              loading ? (
                <LoadingBar />
              ) : (
                <UpdatePassword />
              )
            ) : (
              <LoginSignUp />
            )
          }
        ></Route>

        <Route
          path="/login/shipping"
          element={
            isAuthenticated === true ? (
              loading ? (
                <LoadingBar />
              ) : (
                <Shipping />
              )
            ) : (
              <LoginSignUp />
            )
          }
        ></Route>

        <Route
          path="/order/confirm"
          element={
            isAuthenticated === true ? (
              loading ? (
                <LoadingBar />
              ) : (
                <ConfirmOrder />
              )
            ) : (
              <LoginSignUp />
            )
          }
        ></Route>

        <Route
          path="/success"
          element={
            isAuthenticated === true ? (
              loading ? (
                <LoadingBar />
              ) : (
                <OrderSuccess />
              )
            ) : (
              <LoginSignUp />
            )
          }
        ></Route>

        <Route
          path="/orders"
          element={
            isAuthenticated === true ? (
              loading ? (
                <LoadingBar />
              ) : (
                <MyOrders />
              )
            ) : (
              <LoginSignUp />
            )
          }
        ></Route>

        <Route
          path="/order/:id"
          element={
            isAuthenticated === true ? (
              loading ? (
                <LoadingBar />
              ) : (
                <OrderDetails />
              )
            ) : (
              <LoginSignUp />
            )
          }
        ></Route>

        <Route
          path="/admin/dashboard"
          element={
            isAuthenticated === true ? (
              loading ? (
                <LoadingBar />
              ) : user.role === "admin" ? (
                <Dashboard />
              ) : (
                <LoginSignUp />
              )
            ) : (
              <LoginSignUp />
            )
          }
        ></Route>

        <Route
          path="/admin/products"
          element={
            isAuthenticated === true ? (
              loading ? (
                <LoadingBar />
              ) : user.role === "admin" ? (
                <ProductList />
              ) : (
                <LoginSignUp />
              )
            ) : (
              <LoginSignUp />
            )
          }
        ></Route>

        <Route
          path="/admin/product"
          element={
            isAuthenticated === true ? (
              loading ? (
                <LoadingBar />
              ) : user.role === "admin" ? (
                <NewProduct />
              ) : (
                <LoginSignUp />
              )
            ) : (
              <LoginSignUp />
            )
          }
        ></Route>

        <Route
          path="/admin/product/:id"
          element={
            isAuthenticated === true ? (
              loading ? (
                <LoadingBar />
              ) : user.role === "admin" ? (
                <UpdateProduct />
              ) : (
                <LoginSignUp />
              )
            ) : (
              <LoginSignUp />
            )
          }
        ></Route>

        <Route
          path="/admin/orders"
          element={
            isAuthenticated === true ? (
              loading ? (
                <LoadingBar />
              ) : user.role === "admin" ? (
                <OrderList />
              ) : (
                <LoginSignUp />
              )
            ) : (
              <LoginSignUp />
            )
          }
        ></Route>

        <Route
          path="/admin/order/:id"
          element={
            isAuthenticated === true ? (
              loading ? (
                <LoadingBar />
              ) : user.role === "admin" ? (
                <ProcessOrder />
              ) : (
                <LoginSignUp />
              )
            ) : (
              <LoginSignUp />
            )
          }
        ></Route>

        <Route
          path="/admin/users"
          element={
            isAuthenticated === true ? (
              loading ? (
                <LoadingBar />
              ) : user.role === "admin" ? (
                <UsersList />
              ) : (
                <LoginSignUp />
              )
            ) : (
              <LoginSignUp />
            )
          }
        ></Route>

        <Route
          path="/admin/user/:id"
          element={
            isAuthenticated === true ? (
              loading ? (
                <LoadingBar />
              ) : user.role === "admin" ? (
                <UpdateUser />
              ) : (
                <LoginSignUp />
              )
            ) : (
              <LoginSignUp />
            )
          }
        ></Route>

        <Route
          path="/admin/reviews"
          element={
            isAuthenticated === true ? (
              loading ? (
                <LoadingBar />
              ) : user.role === "admin" ? (
                <ProductReviews />
              ) : (
                <LoginSignUp />
              )
            ) : (
              <LoginSignUp />
            )
          }
        ></Route>
        {/* <Route
          path="*"
          element={
            window.location.pathname === "/process/payment" ? null : (
              <NotFound />
            )
          }
        /> */}
      </Routes>

      <Footer />
    </>
  );
}
export default App;
