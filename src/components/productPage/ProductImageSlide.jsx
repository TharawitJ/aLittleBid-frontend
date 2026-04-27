import { useState, useEffect, useRef } from 'react';

const ProductImageSlide = ({ images }) => {
    console.log('imagesauctionbid', images)
    const [currentIndex, setCurrentIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const [isPaused, setIsPaused] = useState(false); // เพิ่ม State สำหรับเช็คการหยุด
    const intervalRef = useRef(null);

    const extendedImages = images && images.length > 0
        ? [images[images.length - 1], ...images, images[0]]
        : [];

    // ฟังก์ชันสำหรับเริ่มเลื่อน
    const startSlider = () => {
        if (!images || images.length <= 1) return;
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prev) => prev + 1);
            setIsTransitioning(true);
        }, 8000);
    };

    // ฟังก์ชันสำหรับหยุดเลื่อน
    const stopSlider = () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
    };

    useEffect(() => {
        // เมื่อ images เปลี่ยน ให้ Reset ทุกอย่างทันที
        setCurrentIndex(1);
        setIsTransitioning(false);
        stopSlider(); // หยุดอันเก่าก่อน

        if (!isPaused && images && images.length > 1) {
            startSlider();
        }
        return () => stopSlider();
    }, [images]); // สั่งทำงานทุกครั้งที่ List ของรูปเปลี่ยน

    useEffect(() => {
        if (currentIndex === extendedImages.length - 1) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(1);
            }, 700);
        }
    }, [currentIndex, extendedImages.length]);

    if (!images || images.length === 0) return null;

    return (
        <div
            className="relative w-full h-full overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}  // หยุดเมื่อ Hover
            onMouseLeave={() => setIsPaused(false)} // เล่นต่อเมื่อเอาเมาส์ออก
        >
            <div
                className={`flex w-full h-full ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {extendedImages.map((image, index) => (
                    <div key={index} className="w-full h-full flex-shrink-0">
                        <img
                            src={image.imageUrl}
                            alt="Product"
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductImageSlide;
