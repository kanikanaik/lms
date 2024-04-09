"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/app/components/ui/form";
import React from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/app/components/ui/input";
import TipTap from "@/app/components/TipTap";
import { Button } from "@/app/components/ui/button";
import { title } from "process";

interface PageProps {
  params: {
    noteId: string;
  };
}

const page = ({ params }: PageProps) => {
  const formSchema = z.object({
    title: z
      .string()
      .min(5, { message: "hey tile is notlong" })
      .max(100, { message: "its too long" }),
    description: z
      .string()
      .min(5, { message: "hey tile is not long" })
      .max(5000, { message: "its too long" })
      .trim(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      title: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values.title);
    console.log(values.description);
    // values.description;
  }
  return (
    <main className="py-8 px-28">
      <Form {...form}>
        <form>
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title :</FormLabel>
                <FormControl>
                  <Input
                    name="note_title"
                    className="border-1 border-black"
                    placeholder="Enter your Title here"
                  ></Input>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <TipTap
                    description={field.value}
                    onChange={field.onChange}
                    title={title}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="p-3">
            <Button className="p-3" type="submit">
              {" "}
              Save
            </Button>
          </div>
        </form>
      </Form>
    </main>
  );
};

export default page;
