"use client"

import Link from "next/link"
import {useForm } from "react-hook-form"
import * as z from "zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../ui/input"
import { Button } from "../ui/button"

const FormSchema = z.object({
  username: z.string().min(1, 'User Name is required').max(30),
  password: z
  .string()
  .min(1, 'Password is requied')
  .min(8, 'Password must have 8 characters')
  ,
}); 


const Signinform = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
   
  })

  const onSubmit = (values: z.infer<typeof FormSchema> ) => {
    console.log(values)
  }
  const sentence = `If you don't have an account, please `;


  return (

    <div className="w-80 bg-slate-100 p-8 rounded-sm ml-40">
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">

      <div className="space-y-2">
      <FormField
        control={form.control}
        name="username"
        render={({ field }) => (
          <FormItem>
            <FormLabel>User Name</FormLabel>
            <FormControl>
              <Input type="email" placeholder="username" {...field} />
            </FormControl>
            
            <FormMessage />
          </FormItem>
        )}
      />

<FormField
        control={form.control}
        name="password"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Password</FormLabel>
            <FormControl>
              <Input type="password" placeholder="Enter Your  Password" {...field} />
            </FormControl>
            
            <FormMessage />
          </FormItem>
        )}
      />

</div>


      <Button className="w-full mt-6" type="submit">Sign In</Button>
    </form>

          <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 
          after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
            or
          </div>
          <p>
            {sentence} <Link className="text-blue-500 hover:underline" href="/sign-up">Sign up</Link>
            
          </p>

  </Form>
  </div>
  )
}

export default Signinform;
