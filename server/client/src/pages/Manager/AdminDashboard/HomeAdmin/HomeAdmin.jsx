import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { getAllProduct } from "../../../../redux/actions/productActions";
import { getAllOrders } from "../../../../redux/actions/orderActions";
import { userList } from "../../../../redux/actions/userActions";
import Chart from "../../../../components/Chart/Chart";
const HomeAdmin = () => {
  const dispatch = useDispatch();
  const [userStats, setUserStats] = useState([]);

  const productData = useSelector((state) => state.allProducts);
  const { products } = productData;
  const { orders } = useSelector((state) => state.allOrders);

  const { access_token } = useSelector((state) => state.userLogin?.userInfo);

  const { users } = useSelector((state) => state.userList);

  useEffect(() => {
    dispatch(getAllProduct());
    dispatch(getAllOrders());
    dispatch(userList());
  }, [dispatch]);

  let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  useEffect(() => {
    const getStats = async () => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: access_token,
          },
        };
        const res = await axios.get(
          "https://mern-camera-shop.herokuapp.com/api/admin/stats",
          config
        );
        res.data.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id - 1], "Active User": item.total },
          ])
        );
      } catch (error) {
        console.log(error?.messge);
      }
    };
    getStats();
  }, [MONTHS, access_token]);

  return (
    <section className="admin container-div">
      <div className="admin__container grid">
        <div className="admin__container__summary grid">
          <div>
            <h3>Total Sales</h3>
            <h4>${Math.round(totalAmount)}</h4>
          </div>

          <div>
            <h3>All Products</h3>
            <h4>{products && products?.length}</h4>
          </div>
          <div>
            <h3>Total Orders</h3>
            <h4>{orders && orders?.length}</h4>
          </div>
          <div>
            <h3>Active Users</h3>
            <h4>{users && users?.length}</h4>
          </div>
        </div>

        <Chart
          data={userStats}
          title="User Analytics"
          grid
          dataKey="Active User"
        />
      </div>
    </section>
  );
};

export default HomeAdmin;
