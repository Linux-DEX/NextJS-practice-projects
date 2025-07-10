'use client';

import { z } from 'zod';

const userSchema = z.object({
  firstName: z.string(),
  email: z.string().email(),
  profileUrl: z.string().url().optional(),
  age: z.number().min(1).nullish(),
  friends: z.array(z.string()).max(3),
  settings: z.object({
    isSubscribed: z.boolean(),
  })
});

const user = {
  firstName: 'Linux-DEX',
  email: 'linux@linux.linux',
  profileUrl: 'https://linuxdex000.web.app/',
  age: 23,
  friends: ['friends 1', 'friends 2', 'friends 3'],
  settings: {
    isSubscribed: true
  }
}

// parse() function will throw an error
// console.log(userSchema.parse(user));

// it will show weather it will pase or not
console.log(userSchema.safeParse(user));

const page = () => {
  return (
    <div className="h-dvh flex justify-center align-middle p-20">
      <h1 className="text-4xl font-bold">Zod Overview</h1>
    </div>
  )
}

export default page
