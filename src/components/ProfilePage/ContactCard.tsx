import React from "react";

interface ContactCardProps {
  imageUrl: string;
  name: string;
  email: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ imageUrl, name, email }) => {
  return (
    <div className="max-w-sm mx-auto flex flex-col items-center">
      <img
        src={imageUrl}
        alt="Profile"
        className="w-60 h-60 rounded-full object-cover"/>
      <div className="text-center mt-4">
        <p className="text-lg font-semibold">{name}</p>
        <a href={`mailto:${email}`} className="text-blue-500 hover:underline">
          {email}
        </a>
      </div>
      </div>
  );
};

export default ContactCard;
