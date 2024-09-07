import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [pathname]); // Listen for route changes

  return null;
};

export default ScrollToTop;

export type CabinType = {
  id: number;
  title: string;
  details: string;
  longDescription: string;
  pricePerNight: number;
  maxGuests: number;
  image: string;
  location: {
    city: string;
    region: string;
  };
};

export const cabinsInfo: CabinType[] = [
  {
    title: "Forest Retreat",
    details: "Cozy and quiet with beautiful views.",
    longDescription: `Nestled in the heart of Bulgaria's forested landscapes, the Forest Retreat offers a unique blend of comfort and seclusion. Wake up to the sound of birds and a breathtaking view of the surrounding trees, perfect for couples or small families looking to reconnect with nature. 
    The cabin is fully equipped with modern amenities while maintaining a rustic charm. With hiking trails just a few steps away and a wood-fired hot tub, this retreat is ideal for nature lovers and adventurers alike.`,
    pricePerNight: 120,
    maxGuests: 4,
    image: "/cabins/cabin_01.jpg",
    id: 1,
    location: {
      city: "Teteven",
      region: "Balkan Mountains",
    },
  },
  {
    title: "Mountain Escape",
    details: "Spacious and perfect for a family getaway.",
    longDescription: `The Mountain Escape is a large, luxurious cabin situated in the foothills of the Balkan Mountains. This cabin offers stunning panoramic views of the peaks, a spacious living area with a fireplace, and enough room for up to six guests. 
    Whether you want to explore nearby hiking trails or simply relax by the fire, this cabin provides the perfect base for an unforgettable family vacation. Nearby attractions include historic villages and the Central Balkan National Park, making it a great destination year-round.`,
    pricePerNight: 150,
    maxGuests: 6,
    image: "/cabins/cabin_02.jpg",
    id: 2,
    location: {
      city: "Bansko",
      region: "Pirin Mountains",
    },
  },
  {
    title: "Lakeside Lodge",
    details: "Charming with a large deck and lake view.",
    longDescription: `Imagine sipping your morning coffee while watching the sunrise over a serene lake. The Lakeside Lodge offers a tranquil and picturesque setting that’s perfect for anyone looking to escape the hustle and bustle of daily life. 
    With a large outdoor deck, modern kitchen, and spacious rooms, the cabin provides everything you need for a relaxing getaway. Located near the famous Lake Batak, this lodge is ideal for fishing enthusiasts, boaters, and anyone who enjoys water activities.`,
    pricePerNight: 175,
    maxGuests: 5,
    image: "/cabins/cabin_03.jpg",
    id: 3,
    location: {
      city: "Batak",
      region: "Rhodope Mountains",
    },
  },
  {
    title: "Seaside Haven",
    details: "Modern with direct access to the beach.",
    longDescription: `If you're dreaming of waking up to the sound of waves crashing on the shore, the Seaside Haven is the cabin for you. This modern retreat boasts direct beach access and stunning ocean views from every room. 
    Enjoy a peaceful morning stroll along the beach or explore the local seaside town, which is full of restaurants, shops, and cultural attractions. Whether you're planning a romantic getaway or a family vacation, this beachfront cabin has everything you need for a perfect stay.`,
    pricePerNight: 200,
    maxGuests: 4,
    image: "/cabins/cabin_04.jpg",
    id: 4,
    location: {
      city: "Sozopol",
      region: "Black Sea Coast",
    },
  },
  {
    title: "Riverside Cabin",
    details: "Rustic with a private riverbank.",
    longDescription: `Located along the banks of the Iskar River, the Riverside Cabin offers an idyllic retreat for those who love the sound of flowing water. This charming, rustic cabin provides a private riverbank where guests can relax, fish, or even take a swim. 
    The cabin is equipped with cozy, wooden interiors, making it the perfect place to unwind after a day of exploring the surrounding forests and mountains. Nearby attractions include scenic hiking trails and the beautiful Iskar Gorge.`,
    pricePerNight: 130,
    maxGuests: 3,
    image: "/cabins/cabin_05.jpg",
    id: 5,
    location: {
      city: "Tryavna",
      region: "Central Balkan",
    },
  },
  {
    title: "Country Hideaway",
    details: "Classic country style with great amenities.",
    longDescription: `Step into the charm of rural Bulgaria with the Country Hideaway, a classic country-style cabin that offers all the modern comforts. With rolling hills and green fields stretching as far as the eye can see, this is the perfect place for a peaceful retreat. 
    The cabin features a fully equipped kitchen, a large fireplace, and an outdoor area with BBQ facilities. Located in the heart of Bulgaria’s countryside, it’s the ideal base for exploring nearby farms and enjoying traditional Bulgarian food and culture.`,
    pricePerNight: 110,
    maxGuests: 4,
    image: "/cabins/cabin_06.jpg",
    id: 6,
    location: {
      city: "Veliko Tarnovo",
      region: "Central Bulgaria",
    },
  },
  {
    title: "Alpine Chalet",
    details: "Luxurious with a fireplace and mountain views.",
    longDescription: `Experience luxury at its finest in the Alpine Chalet, a spacious, high-end cabin located in the Rila Mountains. With a large stone fireplace, hot tub, and breathtaking mountain views, this chalet offers the perfect combination of comfort and style. 
    Guests can enjoy skiing in the winter or hiking in the summer, with easy access to some of Bulgaria’s most beautiful natural parks. The nearby village is known for its traditional restaurants and vibrant culture.`,
    pricePerNight: 220,
    maxGuests: 8,
    image: "/cabins/cabin_07.jpg",
    id: 7,
    location: {
      city: "Borovets",
      region: "Rila Mountains",
    },
  },
  {
    title: "Desert Oasis",
    details: "Unique design with desert landscape views.",
    longDescription: `Located in Bulgaria's southern sand dunes, the Desert Oasis cabin offers a unique experience. The minimalist, modern design contrasts beautifully with the rugged desert landscape. 
    Guests can enjoy incredible stargazing at night, as well as exploring the nearby ancient Thracian ruins during the day. The cabin is ideal for those looking for a quiet retreat in a less-traveled part of the country.`,
    pricePerNight: 140,
    maxGuests: 5,
    image: "/cabins/cabin_08.jpg",
    id: 8,
    location: {
      city: "Petrich",
      region: "Rupite",
    },
  },
];
