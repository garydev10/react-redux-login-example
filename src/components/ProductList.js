import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    retrieveProducts,
    retrieveProduct,
} from "../slices/productSlice";
import { Link } from "react-router-dom";

import ProductService from "../services/product.service";


const ProductList = () => {
    /*
    const [currentProduct, setCurrentProduct] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchTitle, setSearchTitle] = useState("");
    */

    const products = useSelector(state => state.products);
    const dispatch = useDispatch();

    /*
    const onChangeSearchTitle = e => {
        const searchTitle = e.target.value;
        setSearchTitle(searchTitle);
    };
    */

    const initFetch = useCallback(() => {
        dispatch(retrieveProducts());
    }, [dispatch])

    useEffect(() => {
        initFetch()
    }, [initFetch])

    /*
        const refreshData = () => {
            setCurrentProduct(null);
            setCurrentIndex(-1);
        };
    
        const setActiveProduct = (product, index) => {
            setCurrentProduct(product);
            setCurrentIndex(index);
        };
    
        const findByTitle = () => {
            refreshData();
            dispatch(retrieveProduct({ id: searchTitle }));
        };
    */

    return (

        // Object.entries(products).map(([key, value], i) => {
        //     return (
        //         <div key={key}>
        //             id is: {value.id} ;
        //             name is: {value.name}
        //         </div>
        //     )
        // })

        < div >
            <h1>Products</h1>
            <p>All products from secure (admin only) api end point:</p>
            {/* <Link to={`${path}/add`} className="btn btn-sm btn-success mb-2">Add Product</Link> */}
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th style={{ width: '10%' }}>ID</th>
                        <th style={{ width: '20%' }}>Name</th>
                        <th style={{ width: '10%' }}>Stock</th>
                        <th style={{ width: '10%' }}>Price</th>

                        <th style={{ width: '20%' }}>shortDesc</th>
                        <th style={{ width: '30%' }}>description</th>
                        {/* <th style={{ width: '10%' }}></th> */}
                    </tr>
                </thead>
                <tbody>
                    {products && products.length > 0 && products.map(product =>
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.stock}</td>
                            <td>{product.price}</td>

                            <td>{product.shortDesc}</td>
                            <td>{product.description}</td>
                            {/* <td style={{ whiteSpace: 'nowrap' }}>
                                 <Link to={`${path}/edit/${product.id}`} className="btn btn-sm btn-primary mr-1">Edit</Link>
                                 <button onClick={() => deleteProduct(product.id)} className="btn btn-sm btn-danger" style={{ width: '60px' }} disabled={product.isDeleting}>
                                     {product.isDeleting
                                         ? <span className="spinner-border spinner-border-sm"></span>
                                         : <span>Delete</span>
                                     }
                                 </button>
                             </td> */}
                        </tr>
                    )}
                    {(!products || products.length === 0) &&
                        <tr>
                            <td colSpan="6" className="text-center">
                                <span className="spinner-border spinner-border-lg align-center"></span>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div >

    );
};

export default ProductList;
