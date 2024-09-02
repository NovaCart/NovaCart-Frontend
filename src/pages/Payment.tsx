import React, { useState } from 'react'
import { Input } from '../components/ui/input';
import CustomerPayInfo from '../components/CustomerPayInfo';
import { Button } from '../components/ui/button';
import OrderDetails from '../components/OrderDetails';
import OrderSummary from '../components/OrderSummary';
import HomeNavBar from '../components/HomeNavBar';

const Payment: React.FC= () => {
  const [emailAddress, setemailAddress] = useState('');
  const [isChecked, setIsChecked] =useState(false);
  const [selectedOption, setSelectedOption] = useState<string>();

  function setValue(arg0: string, value: string): void {
    throw new Error('Function not implemented.');
  }
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
  };
  return (
    <>
    <HomeNavBar/>
      <hr className="border-gray-300 border-t-2 mt-8 mx-auto w-11/12 md:w-3/4 lg:w-2/3" />
      <div className='flex flex-col lg:flex-row justify-between mt-8 px-4 md:px-8 lg:px-32'>
        <div className='w-full lg:w-1/2'>
          <div className='mb-4'>
            <div className='pl-8 font-medium text-green-700'>CONTACT</div>
            <Input
              id='emailAddress'
              type='text'
              value={emailAddress}
              placeholder='Email Address'
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue('name',e.target.value)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-full placeholder:opacity-50 placeholder:text-gray-600"
              required
            />
          </div>
          <div className='mb-4'>
            <div className='pl-8 font-medium text-green-700'>CUSTOMER INFORMATION</div>
            <CustomerPayInfo/>
          </div>
          <div>
            <div className='flex items-center space-x-4 pl-8 mb-4'>
              <Input
                  id='acceptTerms'
                  type='checkbox'
                  onChange={handleCheckboxChange}
                  className="h-4 w-4 border-gray-300 rounded focus:ring-green-500"
              />
              <span className='font-medium text-gray-800'>Use a different shipping address</span>
            </div>
            {isChecked && <CustomerPayInfo/>}
          </div>
          <div className='pl-8 mb-4 mt-8 font-medium text-green-700'>PAYMENT INFORMATION</div>
          <div className='flex flex-col md:flex-row md:space-x-4'>
            <Button className='w-full md:w-1/2 p-3 flex items-center border border-gray-300 rounded-full hover:bg-gray-300 bg-gray-200 transition mb-4'>
              <Input
                id='Cash on Delivery'
                type='radio'
                name='Cash on Delivery'
                value='Cash on Delivery'
                checked={selectedOption === 'Cash on Delivery'}
                onChange={handleRadioChange}
                className="h-4 w-4 border-gray-300 rounded-full"
              />
              <span className='ml-2 font-medium text-center text-gray-800'>Cash on Delivery</span>
            </Button>
            <Button className='w-full md:w-1/2 p-3 flex items-center border border-gray-300 rounded-full hover:bg-gray-300 bg-gray-200 transition mb-4'>
              <Input
                id='Online Payment'
                type='radio'
                name='Online Payment'
                value='Online Payment'
                checked={selectedOption === 'Online Payment'}
                onChange={handleRadioChange}
                className="h-4 w-4 border-gray-300 rounded-full"
              />
              <span className='ml-2 font-medium text-gray-800'>Online Payment</span>
            </Button>
          </div>
          <div className="flex justify-center mt-4 mb-6">
            <Button className='bg-green-700 text-white font-bold py-2 px-4 rounded-3xl shadow-md hover:bg-green-800 transition'>
              Place Order
            </Button>
          </div>
        </div>
        <div className='bg-gray-200 p-4 mt-8 lg:mt-0 w-full lg:w-1/3 rounded-lg shadow-lg'>
          <OrderDetails title="White neck shift dress" size="XS" price="1500" color="PureWhite" qty={3} imageUrl="/images/women.jpeg" />
          <OrderDetails title="White neck shift dress" size="XS" price="1500" color="PureWhite" qty={3} imageUrl="/images/women.jpeg" />
          <div className='p-6'>
          <OrderSummary subtotal={1200} shipping={1000} tax={0} total={2200} />
          </div>
        </div>
        </div>
    </>   
  )
}

export default Payment;