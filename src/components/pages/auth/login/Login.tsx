"use client";

import useCustomForm from "@/components/hooks/useCustomForm";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authService } from "@/services/auth/auth.service";
import { AxiosError } from "axios";
import React from "react";
import { z } from "zod";

const Login = () => {
  const defaultValues = {
    username: "",
    password: "",
  };

  const resolver = z.object({
    username: z.string().min(1, {
      message: "username field can't be null",
    }),
    password: z.string().min(1, {
      message: "password field can't be null",
    }),
  });

  const form = useCustomForm({ defaultValues, resolver });

  const handleSubmit = async (fData: LoginPayload) => {
    const data = new FormData();

    for (const key in fData) {
      data.append(key, fData[key]);
    }

    try {
      const tokens = await authService.login(data);
      console.log(tokens);
    } catch (error) {
      console.log(error?.message);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col justify-center items-center border rounded-md p-12 gap-4 shadow-xl bg-white"
      >
        <div className="flex justify-center items-center">Login</div>
        <FormField
          name="username"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input {...field} className="w-80" />
              </FormControl>
              <FormDescription>Write your username</FormDescription>
              <FormMessage></FormMessage>
            </FormItem>
          )}
        />
        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} className="w-80" />
              </FormControl>
              <FormDescription>Write your password</FormDescription>
              <FormMessage></FormMessage>
            </FormItem>
          )}
        />
        <Button type="submit">Log in</Button>
      </form>
    </Form>
  );
};

export { Login };
