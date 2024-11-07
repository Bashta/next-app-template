"use client";

import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { DateRangePicker } from "@nextui-org/date-picker";
import { useState } from "react";
import RoomCard from "@/components/RoomCard"; // Import the RoomCard component

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

export default function Home() {
  const [dateValue, setDateValue] = useState<[Date | null, Date | null]>([null, null]);

  const handleSelectRoom = (roomType: string) => {
    console.log(`Selected room type: ${roomType}`);
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center mb-8">
        <span className={title()}>Experience&nbsp;</span>
        <span className={`${title()} bg-gradient-to-b from-orange-400 via-orange-500 to-amber-600 bg-clip-text text-transparent`}>
          luxury&nbsp;
        </span>
        <br />
        <span className={title()}>
          in the heart of tranquility.
        </span>
        <div className={subtitle({ class: "mt-4" })}>
          Your perfect getaway awaits at{' '}
          <span className="bg-gradient-to-b from-orange-400 via-orange-500 to-amber-600 bg-clip-text text-transparent font-semibold">
            KRAAL Hotel
          </span>.
        </div>
      </div>

      <div className="flex flex-col gap-6 w-full max-w-md">
        <DateRangePicker
          label="Select your stay dates"
          value={dateValue}
          onChange={setDateValue}
          variant="bordered"
          radius="sm"
          color="warning"
          size="lg"
          classNames={{
            label: "text-white",
            base: "h-14",
          }}
        />
      </div>

      {/* Room Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 w-full max-w-7xl">
        <RoomCard
          image="https://images.unsplash.com/photo-1666813721996-42956e40788e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDJ8fHJvb218ZW58MHx8fHwxNjYyMjY0NzY0&ixlib=rb-1.2.1&q=80&w=400" // Unsplash image for Standard Room
          title="Deluxe Room"
          price="$150/night"
          amenities={["King Bed", "Free WiFi", "Breakfast Included"]}
          description="A spacious room with a beautiful view."
          onSelect={() => handleSelectRoom("Deluxe Room")}
        />
        <RoomCard
          image="https://images.unsplash.com/photo-1666813721996-42956e40788e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDJ8fHJvb218ZW58MHx8fHwxNjYyMjY0NzY0&ixlib=rb-1.2.1&q=80&w=400" // Unsplash image for Standard Room
          title="Standard Room"
          price="$100/night"
          amenities={["Queen Bed", "Free WiFi"]}
          description="A comfortable room for a relaxing stay."
          onSelect={() => handleSelectRoom("Standard Room")}
        />
        <RoomCard
          image="https://images.unsplash.com/photo-1666813721996-42956e40788e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDJ8fHJvb218ZW58MHx8fHwxNjYyMjY0NzY0&ixlib=rb-1.2.1&q=80&w=400" // Unsplash image for Standard Room
          title="Suite"
          price="$250/night"
          amenities={["Living Area", "Free WiFi", "Room Service"]}
          description="Luxurious suite with all amenities."
          onSelect={() => handleSelectRoom("Suite")}
        />
        <RoomCard
          image="https://images.unsplash.com/photo-1666813721996-42956e40788e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDJ8fHJvb218ZW58MHx8fHwxNjYyMjY0NzY0&ixlib=rb-1.2.1&q=80&w=400" // Unsplash image for Standard Room
          title="Family Room"
          price="$200/night"
          amenities={["Two Queen Beds", "Free WiFi", "Kitchenette"]}
          description="Perfect for families with kids."
          onSelect={() => handleSelectRoom("Family Room")}
        />
      </div>

      {/* Book Now Button */}
      <Link
        className={buttonStyles({
          color: "warning",
          radius: "full",
          variant: "shadow",
          size: "lg",
        })}
        href={siteConfig.links.docs}
        disabled // Disable the button for now
      >
        Book Now
      </Link>
    </section>
  );
}
