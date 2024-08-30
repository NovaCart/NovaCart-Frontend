import React, { useState } from 'react'
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { Button } from '../ui/button';


const LoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Handle form submission
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        value={email}
                        placeholder='       your email address'
                        opacity-50
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                        className="w-full mt-2 p-2 border border-gray-300 rounded-full placeholder:opacity-50"
                        required
                    />
                </div>
                <div className="mb-10">
                    <Label htmlFor="password">Password</Label>
                    <Input
                        id="password"
                        type="password"
                        value={password}
                        placeholder='     password'
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                        className="w-full border border-black rounded-full p-2 text-black placeholder:opacity-50"
                        required
                    />
                  
              
                </div>
                <Button type="submit" className="w-full bg-black text-white p-2  rounded-full hover:bg-blue-600">
                    Continue to connect
                </Button>
            </form>
        </div>
    )
}

export default LoginForm