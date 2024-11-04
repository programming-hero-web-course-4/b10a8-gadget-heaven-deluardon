import PropTypes from 'prop-types';
import { Link} from 'react-router-dom'; 

const category = ({ category }) => {


 
    if (!Array.isArray(category)) {
        return <div>No categories available.</div>;
    }

    return (
        <div className="bg-white p-4 rounded shadow">
            <Link 
                to="/" 
                className={`btn w-[200px] ${location.pathname === '/' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            >
                All Products
            </Link>

            {category.map((category) => (
                <Link key={category.id} to={`/category/${category.category}`}>
                    <button 
                        className={`btn flex w-[200px] mt-4 ${location.pathname === `/category/${category.category}` ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                    >
                        {category.category}
                    </button>
                </Link>
            ))}
        </div>
    );
};

category.propTypes = {
    category: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired, 
            category: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default category;
