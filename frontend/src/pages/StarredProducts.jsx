import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const StarredProducts = () => {
    const [starredProducts, setStarredProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchStarredProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/starred-products');
                setIsLoading(false)
                setStarredProducts(response.data);
            } catch (error) {
                console.error('Error fetching starred products:', error);
            }
        };

        fetchStarredProducts();
    }, []);

    return (
        <div className='h-[100vh] px-40 py-16 bg-fuchsia-200/25'>
            <Link to={'/'} >
                <a className='font-bold uppercase'>Back</a>
            </Link>
            <div className='flex flex-col items-center justify-center'>
                <h2 className="text-4xl font-semibold mb-4">Listings</h2>
                <div className='text-center'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also
                    the leap into electronic typesetting, remaining essentially unchanged.
                </div>
            </div>

            <div className="py-16">
                <h1 className='py-4 font-bold text-2xl'>List Of Prodcuts</h1>
                <div className="overflow-x-auto bg-sky-100/60">
                    {isLoading ? <p>loading...</p> :
                        <table className="min-w-full border-collapse overflow-y-scroll ">
                            <thead>
                                <tr>
                                    <th className="px-6 py-3 bg-gray-200 text-gray-700">Product Name</th>
                                    <th className="px-6 py-3 bg-gray-200 text-gray-700">User Name</th>
                                    <th className="px-6 py-3 bg-gray-200 text-gray-700">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {starredProducts.map((userStaredProducts) => (
                                    <Row user={userStaredProducts} />
                                ))}
                            </tbody>
                        </table>
                    }
                </div>
            </div>
        </div>
    );
};

export default StarredProducts;


const Row = ({ user }) => {
    return (
        <>
            {user.starredProducts.map((starredProduct) => (
                <tr key={starredProduct.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{starredProduct.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{user?.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{user?.email}</td>
                </tr>
            ))}
        </>
    )


}

