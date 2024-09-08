import React, { useState } from 'react'
import { Input } from './ui/input';

const CustomerPayInfo: React.FC = () => {
    const [country, setCountry] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [contactNumber, setContactNumber] = useState('');

    function setValue(arg0: string, value: string): void {
        throw new Error('Function not implemented.');
    }
    return (
        <div>
            <div className='mb-4'>
                <Input 
                    id='country'
                    type='text'
                    value={country}
                    placeholder='     Country'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue('name', e.target.value)}
                    className="w-full mt-2 p-2 border border-gray-300 rounded-full placeholder:opacity-50 placeholder:text-gray-600"
                    required
                />
            </div>    
            <div className='flex space-x-4 mb-4'>
                <div className=''>
                    <Input 
                        id='firstName'
                        type='text'
                        value={firstName}
                        placeholder='     FirstName'
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue('name', e.target.value)}
                        className="w-full mt-2 p-2 border border-gray-300 rounded-full placeholder:opacity-50 placeholder:text-gray-600"
                        required
                    />
                </div> 
                <div className=''>
                    <Input 
                        id='lastName'
                        type='text'
                        value={lastName}
                        placeholder='     LastName'
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue('name', e.target.value)}
                        className="w-full mt-2 p-2 border border-gray-300 rounded-full placeholder:opacity-50 placeholder:text-gray-600"
                        required
                    />
                </div>  
            </div> 
            <div className='mb-4'>
                <Input 
                    id='contactNumber'
                    type='text'
                    value={contactNumber}
                    placeholder='     ContactNumber'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue('name', e.target.value)}
                    className="w-full mt-2 p-2 border border-gray-300 rounded-full placeholder:opacity-50 placeholder:text-gray-600"
                    required
                />
            </div>   
            <div className='mb-4'>
                <Input 
                    id='address'
                    type='text'
                    value={address}
                    placeholder='     Address'
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue('name', e.target.value)}
                    className="w-full mt-2 p-2 border border-gray-300 rounded-full placeholder:opacity-50 placeholder:text-gray-600"
                    required
                />
            </div> 
            <div className='flex space-x-4 mb-4'>  
                <div className='mb-4'>
                    <Input 
                        id='city'
                        type='text'
                        value={city}
                        placeholder='     City'
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue('name', e.target.value)}
                        className="w-full mt-2 p-2 border border-gray-300 rounded-full placeholder:opacity-50 placeholder:text-gray-600"
                        required
                    />
                </div>   
                <div className='mb-4'>
                    <Input 
                        id='postalCode'
                        type='text'
                        value={postalCode}
                        placeholder='     PostalCode'
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue('name', e.target.value)}
                        className="w-full mt-2 p-2 border border-gray-300 rounded-full placeholder:opacity-50 placeholder:text-gray-600"
                        required
                    />
                </div>
            </div>             
        </div>
    )
}

export default CustomerPayInfo;