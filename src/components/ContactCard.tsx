import React from "react";

interface ContactCardProps {
  imageUrl: string;
  name: string;
  email: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ imageUrl, name, email }) => {
  return (
    <div className="max-w-sm me-36">
      <div className="items-center flex flex-col">
        <img
          src={imageUrl}
          alt="Profile"
          className="w-48 h-48 mt-8 rounded-full object-cover"
        />
        <p className="text-md text-black-500">{name}</p>
        <p className="text-md text-black-500">{email}</p>
      </div>
    </div>
  );
};

export default ContactCard;
