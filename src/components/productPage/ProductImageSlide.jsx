import { useState, useEffect } from 'react';

const ProductImageSlide = ({ images }) => {
    console.log('imagesslide', images)
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // ถ้าไม่มีรูป หรือมีรูปเดียว ไม่ต้องรัน Timer
        if (!images || images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // เปลี่ยนรูปทุก 3 วินาที

        return () => clearInterval(interval); // ล้าง Timer เมื่อ Component ปิด
    }, [images]);

    if (!images || images.length === 0) return null;

    return (
        <img
            src={images[currentIndex].imageUrl}
            alt="Product"
            className="w-full aspect-[4/5] object-cover transition-opacity duration-700 group-hover:scale-105"
        />
    );
};

export default ProductImageSlide
