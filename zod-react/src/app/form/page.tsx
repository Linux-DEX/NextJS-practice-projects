'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const userFormSchema = z.object({
  firstName: z.string(),
  email: z.string().email(),
  profileUrl: z.string().url().optional(),
  age: z.number().min(1).nullish(),
  friends: z.array(z.string()).max(3),
  settings: z.object({
    isSubscribed: z.boolean(),
  })
});

type UserForm = z.infer<typeof userFormSchema>;

const page = () => {
  const form = useForm<UserForm>({
    resolver: zodResolver(userFormSchema)
  });

  return (
    <div className="h-dvh flex justify-center align-middle p-20">
      <h1 className="text-4xl font-bold">Zod with forms</h1>
    </div>
  )
}

export default page
