import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState, useRef } from "react";

const ProductCategory = () => {
    const data = useLoaderData();
    const { category } = useParams();
    const [filteredData, setFilteredData] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const productSectionRef = useRef(null); 
    const endOfProductsRef = useRef(null); 

    useEffect(() => {
        const newData = category ? data.filter(item => item.category === category) : data;
        setFilteredData(newData);
        setShowAll(false); 
    }, [data, category]);

    const displayedItems = showAll ? filteredData : filteredData.slice(0, 6);

    const handleToggleShow = () => {
        setShowAll(prev => !prev);

        if (!showAll) {
            console.log("Showing all products");
            scrollToProductSection();
        } else {
            scrollToProductSection();
        }
    };

    const scrollToProductSection = () => {
        productSectionRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

  

    return (
        <div ref={productSectionRef} className="product-section">
            {filteredData.length === 0 ? ( 
                <div className="text-center">
                    <p className="text-lg">No products found. Please check again.</p>
                </div>
            ) : 
            (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {displayedItems.map(item => (
                            <Card key={item.id} data={item} />
                        ))}
                    </div>
                    <div ref={endOfProductsRef}></div>
                    <div className="text-center mt-4">
                        <button 
                            className="btn" 
                            onClick={handleToggleShow} 
                            aria-label={showAll ? "Show less products" : "Show all products"}
                        >
                            {showAll ? "Show Less" : "Show All"}
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default ProductCategory;
