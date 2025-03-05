import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import { ContactCard } from '../ContactCards';

const Card = () => {
  return (
    <div className="flex w-full  justify-center ">
      <div className="flex w-5/6 justify-center  rounded-xl shadow-md max-md:flex-col">
        <div className="h-full w-3/5 rounded-l-xl bg-white max-md:w-full max-md:rounded-r-xl">
          <ContactForm />
        </div>
        <div className="h-full w-2/5 max-md:w-full ">
          <ContactCard />
        </div>
      </div>
    </div>
  );
};

export default Card;
