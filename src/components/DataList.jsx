import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addFilterProduct, fetchProductAxios} from "../reducer/dataSlice.js";

const DataList = () => {
    const dispatch = useDispatch();
    const {filterProduct} = useSelector((state) => state.data);
    const [productText,setProductText] = useState('');
    useEffect(() => {
        dispatch(fetchProductAxios())
    }, []);
    const handleChangeProduct = (e) => {
        setProductText(e.target.value)
        dispatch(addFilterProduct(productText));
    }

    return (
        <div>
            <input
                type="text"
                placeholder='Поисковик'
                value={productText}
                onChange={handleChangeProduct}
            />
            <div style={{
                margin:'0 auto',
                display: 'flex',
                width:'1200px',
                flexWrap:'wrap',
                justifyContent:'space-around',
            }}>
                {
                    filterProduct?.map((product, index) => (
                        <div
                            style={{
                                display:'flex',
                                flexDirection: 'column',
                                width:'200px',
                                paddingRight:'10px',
                                border:'2px solid gray',
                            }}
                            key={index}>
                            <img width='200px' src={product.image} alt=""/>
                            <span>{product.title}</span>
                            <div>
                                <span>Цена:{product.price}</span>
                                <button>Buy</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default DataList;