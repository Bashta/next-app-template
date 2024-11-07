import React from "react";

interface RoomCardProps {
    image: string;
    title: string;
    price: string;
    amenities: string[];
    description: string;
    onSelect: () => void;
}

const RoomCard: React.FC<RoomCardProps> = ({
    image,
    title,
    price,
    amenities,
    description,
    onSelect,
}) => {
    return (
        <div className="border rounded-lg shadow-md overflow-hidden flex flex-col">
            <img src={image} alt={title} className="w-full h-32 object-cover" />
            <div className="p-4 flex-grow">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="text-gray-200">{price}</p>
                <ul className="text-sm text-gray-300">
                    {amenities.map((amenity, index) => (
                        <li key={index}>• {amenity}</li>
                    ))}
                </ul>
                <p className="text-gray-200 mt-2">{description}</p>
            </div>
            <button
                onClick={onSelect}
                className="mt-4 mb-4 mx-4 bg-warning text-black py-3 px-4 rounded transition duration-300 ease-in-out shadow-lg hover:shadow-xl hover:shadow-orange-500/50"
            >
                Select Room
            </button>
        </div>
    );
};

export default RoomCard;