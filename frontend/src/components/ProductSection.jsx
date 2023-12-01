
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Rating from './Rating';
import { Link } from 'react-router-dom';
import StarModal from './StarModal';

const ProductSection = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/products');
                setProducts(response.data);
                setIsLoading(false)
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);
    return (
        <div className="bg-gray-100 py-8">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                    VIEW OUR PRODUCTS
                </h2>
                <div className="flex flex-1 -mx-4 items-center justify-center ">
                    {isLoading ? <p>loading products...</p> :
                        <>
                            {products.map((product) => (
                                <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                                    <ProductCard product={product} />
                                </div>
                            ))}
                        </>
                    }
                </div>
            </div>
        </div>

    )
};

const ProductCard = ({ product }) => {


    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleStar = async (name, email) => {
        console.log("product.id: ", product.id)
        try {
            const response = await axios.post('http://localhost:3001/api/products/star', {
                name, email, productId: product.id
            });
            console.log("handleStar ~ response", response)
            setIsLoading(false)
            setStarredProducts(response.data);
        } catch (error) {
            console.error('Error fetching starred products:', error);
        }
    };


    const handleRatingChange = (rating) => {
        setIsModalOpen(true);
    };

    return (
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md">
            <div className="p-5">
                <h5 className="text-gray-900 text-xl font-medium mb-2">{product?.name}</h5>
                <p className="text-gray-700 text-base mb-4">
                    {product?.description ??
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
                    }
                </p>
                <div className="flex justify-between items-center">
                    <span className="text-3xl font-bold text-gray-900">${product.price}</span>
                    <div className="flex justify-between items-center">
                        <Rating onRatingChange={handleRatingChange} />
                    </div>

                </div>
                <Link to="/starred">
                    <button className="text-white bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        Show Detail
                    </button>
                </Link>
            </div>
            {/* Star Modal */}
            <StarModal isOpen={isModalOpen} onRequestClose={() => setIsModalOpen(false)} onStar={handleStar} />
        </div>
    );
};


export default ProductSection