import axios from "axios";
import React, { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../../../components/Loading/Loading";
import { useNavigate, useParams } from "react-router-dom";
import { CREATE_PRODUCT_RESET } from "../../../../redux/constants/productConstants";
import {
  createProduct,
  updateProduct,
} from "../../../../redux/actions/productActions";
const initialstate = {
  name: "",
  description: "",
  Stock: null,
  price: null,
};
const AddProduct = () => {
  const { productId } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(initialstate);

  const dispatch = useDispatch();

  const token = useSelector((state) => state.userLogin?.userInfo?.access_token);
  const { products, error } = useSelector((state) => state.createProduct);
  // const productData = useSelector((state) => state.adminProducts);

  const [onEdit, setOnEdit] = useState(false);

  const { name, description, Stock, price } = product;

  const [images, setImages] = useState(false);
  const [uploadError, setUploadError] = useState("");
  const [uploadSuccess, setUploadSuccess] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const { addToast } = useToasts();

  useEffect(() => {
    if (productId) {
      setOnEdit(true);

      // productData?.products?.forEach((product) => {
      //   if (product?._id === productId) {
      //     setProduct(product);
      //     setImages(product?.images);
      //   }
      // });
    } else {
      setOnEdit(false);
      setProduct(initialstate);
      setImages(false);
    }
  }, [productId]);

  // image upload here
  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      const file = e.target.files[0];
      let formData = new FormData();
      formData.append("file", file);
      setIsLoading(true);
      setUploadError("");
      const res = await axios.post("/api/upload_image", formData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: token,
        },
      });
      setIsLoading(false);
      setImages(res.data);
      setUploadSuccess(res.data.message);
    } catch (error) {
      setUploadSuccess("");
      setIsLoading(false);
      setUploadError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };

  // delete image
  const handleDestroy = async () => {
    try {
      setIsLoading(true);
      setUploadError("");
      const res = await axios.post(
        "/api/destroy",
        { public_id: images.public_id },
        {
          headers: { Authorization: token },
        }
      );
      setIsLoading(false);
      setImages(false);
      setUploadSuccess(res.data.message);
    } catch (error) {
      setIsLoading(false);
      setUploadSuccess("");
      setUploadError(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  };

  // get the all input value update the state
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // const clear = () => {
  //   setImages();
  //   setProduct({ name: "", description: "", quantity: "", price: "" });
  // };

  const { _id } = product;
  // submit the product
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (onEdit) {
      // update prduct call here
      dispatch(updateProduct({ ...product, images }, _id));
    } else {
      // create product api call here
      dispatch(createProduct({ ...product, images }, navigate));
    }
  };

  // show the toast message error or succes
  useEffect(() => {
    if (error) {
      dispatch({ type: CREATE_PRODUCT_RESET });
      addToast(error, { appearance: "error", autoDismiss: true });
    } else if (products) {
      dispatch({ type: CREATE_PRODUCT_RESET });
      addToast(products.message, {
        appearance: "success",
        autoDismiss: true,
      });
      // navigate(redirect);
    }
  }, [products, addToast, error, dispatch]);

  useEffect(() => {
    if (uploadError) {
      addToast(uploadError, { appearance: "error", autoDismiss: true });
    } else if (uploadSuccess) {
      addToast(uploadSuccess, {
        appearance: "success",
        autoDismiss: true,
      });
      // navigate(redirect);
    }
  }, [addToast, uploadSuccess, uploadError]);

  // clear();

  const styleUpload = {
    display: images ? "block" : "none",
  };

  return (
    <section className="addproduct container-div">
      <h3 className="addproduct__title">
        {onEdit ? "Update Product" : "Add Product"}
      </h3>
      <div className="addproduct__container">
        <form className="addproduct__form  grid" onSubmit={handleSubmit}>
          <div className="addproduct__form__left">
            <div className="contact__form__div">
              <label htmlFor="name" className="contact__form__div-tag">
                Product Title
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Product title here"
                value={name}
                onChange={handleChangeInput}
              />
            </div>
            <div className="contact__form__div pass">
              <label htmlFor="price" className="contact__form__div-tag">
                Price
              </label>
              <input
                className="contact__form__div-input"
                type="number"
                name="price"
                id="price"
                placeholder="Product price here"
                value={price}
                onChange={handleChangeInput}
              />
            </div>
            <div className="contact__form__div pass">
              <label htmlFor="quantity" className="contact__form__div-tag">
                Count of Stock
              </label>
              <input
                className="contact__form__div-input"
                type="number"
                name="Stock"
                id="Stock"
                placeholder="Product stock"
                value={Stock}
                onChange={handleChangeInput}
              />
            </div>

            <div className="contact__form__div pass">
              <label htmlFor="description" className="contact__form__div-tag">
                Product description
              </label>
              <textarea
                className="contact__form__div-input"
                name="description"
                id="description"
                rows="7"
                column="10"
                placeholder="Product description"
                value={description}
                onChange={handleChangeInput}
              />
            </div>
          </div>

          <div className="addproduct__form__right">
            <h4>Upload Image</h4>
            <div className="addproduct__form__right__box">
              <div className="addproduct__form__right__box__upload">
                <input
                  type="file"
                  name="file"
                  id="file_up"
                  onChange={handleUpload}
                />
                {isLoading ? (
                  <div id="file_img">
                    <Loading />
                  </div>
                ) : (
                  <div id="file_img" style={styleUpload}>
                    <img src={images ? images.url : ""} alt="" />
                    <span onClick={handleDestroy}>X</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="addproduct__form__button">
            <button
              style={{ fontSize: "15px", fontWeight: "500" }}
              className="button"
              type="submit"
            >
              {onEdit ? "Update" : "Public Now"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddProduct;
