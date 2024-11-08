import React from "react";
import { FaWifi, FaBed, FaCoffee } from "react-icons/fa";
import { MdRoomService, MdLiving, MdOutlineLiving } from "react-icons/md";
import { FaKitchenSet } from "react-icons/fa6";
interface RoomCardProps {
    image: string;
    title: string;
    price: string;
    amenities: string[];
    description: string;
    onSelect: () => void;
    isSelected: boolean;
}

const RoomCard: React.FC<RoomCardProps> = ({
    image,
    title,
    price,
    amenities,
    description,
    onSelect,
    isSelected,
}) => {
    return (
        <div className={`border-2 rounded-lg shadow-md overflow-hidden flex flex-col transition-transform duration-300 ${isSelected ? 'border-orange-500 scale-105 glow-effect' : 'border-gray-300'}`}>
            <img src={image} alt={title} className="w-full h-32 object-cover" />
            <div className="p-4 flex-grow">
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="text-gray-200">{price}</p>
                <ul className="text-sm text-gray-300 flex flex-col">
                    {amenities.map((amenity, index) => (
                        <li key={index} className="flex items-center">
                            {amenity === "Free WiFi" && <FaWifi className="mr-2" />}
                            {amenity === "King Bed" && <FaBed className="mr-2" />}
                            {amenity === "Queen Bed" && <FaBed className="mr-2" />}
                            {amenity === "Breakfast Included" && <FaCoffee className="mr-2" />}
                            {amenity === "Room Service" && <MdRoomService className="mr-2" />}
                            {amenity === "Living Area" && <MdOutlineLiving className="mr-2" />}
                            {amenity === "Two Queen Beds" && <FaBed className="mr-2" />}
                            {amenity === "Kitchenette" && <FaKitchenSet className="mr-2" />}
                            {amenity}
                        </li>
                    ))}
                </ul>
                <p className="text-gray-200 mt-2">{description}</p>
            </div>
            <button
                onClick={onSelect}
                className="mt-4 mb-4 mx-4 bg-warning text-black py-3 px-4 rounded transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
            >
                Select Room
            </button>
        </div>
    );
};

export default RoomCard;