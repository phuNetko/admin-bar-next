"use client"
import { useParams } from "next/navigation";

const ProductDetailPage = () => {
    const { id } = useParams();
    console.log(id);
    return <div>ProductDetailPage</div>;
};

export default ProductDetailPage;