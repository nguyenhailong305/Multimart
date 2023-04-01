import React from "react";
import { Col, Container, Row } from "reactstrap";
import useGetData from "../custom-hooks/useGetData";
import { db } from "../fisebase.config";
import { doc, deleteDoc } from "firebase/firestore";
import {toast} from 'react-toastify'

const AllProduct = () => {
  const { data: productsData, loading } = useGetData("products");

  
  const deleteProducts = async id => {
    await deleteDoc(doc(db, "products", id));
    toast.success("Deleted !")
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12">
            <table className="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <h3 className="py-5 text-center fw-bold">Loading...</h3>
                ) : (
                  productsData.map((item, index) => (
                    <tr key={index}>
                      <td>
                        <img
                          src={item.imgUrl}
                          alt=""
                          style={{ width: "120px" }}
                        />
                      </td>
                      <td>{item.productName}</td>
                      <td>{item.category}</td>
                      <td>{item.price}</td>
                      <td>
                        <button
                          onClick={() => deleteProducts(item.id)}
                          className="btn btn-danger"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AllProduct;
