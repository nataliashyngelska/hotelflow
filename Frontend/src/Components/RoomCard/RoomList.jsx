import React from 'react';
import RoomCard from './RoomCard';
import RoomModal from './RoomModal';

import Room4 from '../../assets/room4.png';
import Room5 from '../../assets/room5.png';
import Room6 from '../../assets/room6.png';
import Room7 from '../../assets/room7.png';
import Room8 from '../../assets/room8.png';
import Room9 from '../../assets/room9.png';
import Room10 from '../../assets/room10.png';
import { useState } from 'react';


  

function RoomList({peopleCount}) {

  const [selectedRoom, setSelectedRoom] = useState(null);

  const rooms = [
    {
      image: Room4,
      title: 'Standard double',
      people: 3,
      price: 2500,
      description: 'Comfortable room with modern amenities, perfect for a group of three friends or a small family.',
    },
    {
      image: Room5,
      title: 'Pets-friendly',
      people: 2,
      price: 2000,
      description: 'Ideal for pet lovers, this cozy room offers a relaxing atmosphere for you and your furry friend.',
    },
    {
      image: Room6,
      title: 'Family',
      people: 4,
      price: 1500,
      description: 'Spacious family room with everything needed to keep parents and kids comfortable and happy.',
    },
    {
      image: Room7,
      title: 'Ocean view suite',
      people: 2,
      price: 3200,
      description: 'Enjoy breathtaking ocean views from this elegant suite designed for romantic getaways.',
    },
    {
      image: Room8,
      title: 'Business deluxe',
      people: 1,
      price: 1800,
      description: 'Quiet and well-equipped room tailored for business travelers who value comfort and functionality.',
    },
    {
      image: Room9,
      title: 'Luxury penthouse',
      people: 5,
      price: 4500,
      description: 'Top-tier luxury with expansive space, premium finishes, and panoramic views for up to five guests.',
    },
    {
      image: Room10,
      title: 'Eco-friendly room',
      people: 2,
      price: 2100,
      description: 'Sustainable design meets cozy comfort — a great choice for environmentally conscious travelers.',
    },
  ];

  const handleCardClick = (room) => {
    setSelectedRoom(room);
  };

  const closeModal = () => {
    setSelectedRoom(null);
  };

  const filteredRooms = rooms.filter((room) => room.people >= peopleCount);

  return (
    <div className="room-wrapper">
      {filteredRooms.map((room, index) => (
        <RoomCard
          key={index}
          image={room.image}
          title={room.title}
          people={room.people}
          price={room.price}
          description={room.description}
          onClick={() => handleCardClick(room)}
        />
      ))}

      {selectedRoom && (
        <RoomModal room={selectedRoom} onClose={closeModal} />
      )}
    </div>
  );
}

export default RoomList;