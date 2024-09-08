import React from "react";

interface ContactCardProps {
  imageUrl: string;
  name: string;
  email: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ imageUrl, name, email }) => {
  return (
    <div className="max-w-sm mx-auto lg:me-36">
      <div className="items-center flex flex-col">
        <img
          src={imageUrl}
          alt="Profile"
          className="w-32 h-32 sm:w-48 sm:h-48 mt-8 rounded-full object-cover"
        />
        <p className="text-sm sm:text-md text-black-500 mt-4">{name}</p>
        <p className="text-sm sm:text-md text-black-500">{email}</p>
      </div>
    </div>
  );
};

export default ContactCard;
