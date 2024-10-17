"use client";

import React from "react";
import SubmitButton from "@/components/admin/SubmitButton";
import Input from "@/components/admin/Input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { UploadButton } from "@/components/uploadthing";

const achieverFormSchema = z.object({
  category: z.string().min(1, { message: "Category is required" }),
  name: z.string().min(1, { message: "Name is required" }),
  batch: z.string().min(1, { message: "Batch is required" }),
  course: z.string().min(1, { message: "Course is required" }),
  year: z.string().min(1, { message: "Year is required" }),
  sem: z.string().min(1, { message: "Semester is required" }),
  cgpa: z.number().positive({ message: "CGPA must be a positive number" }),
  sgpa: z.number().positive({ message: "SGPA must be a positive number" }),
  imageUrl: z.string().min(1, { message: "Image is required" }),
});

const AchieverForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm({
    resolver: zodResolver(achieverFormSchema),
    defaultValues: {
      imageUrl: "",
    },
  });
  const onSubmit = (data) => console.log(data);

  console.log(errors);

  const imageUrl = watch("imageUrl");

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Category"
        type="text"
        placeholder="eg. Academic"
        name="category"
        {...register("category")}
        error={errors?.category}
      />
      <Input
        label="Name"
        type="text"
        placeholder="eg. John Doe"
        name="name"
        {...register("name")}
        error={errors?.name}
      />
      <Input
        label="Batch"
        type="text"
        placeholder="eg. 2010-2014"
        name="batch"
        {...register("batch")}
        error={errors?.batch}
      />
      <Input
        label="Course"
        type="text"
        placeholder="eg. Computer Science"
        name="course"
        {...register("course")}
        error={errors?.course}
      />
      <Input
        label="Year"
        type="text"
        placeholder="eg. 2014"
        name="year"
        {...register("year")}
        error={errors?.year}
      />
      <Input
        label="Semester"
        type="text"
        placeholder="eg. 8"
        name="sem"
        {...register("sem")}
        error={errors?.sem}
      />
      <Input
        label="CGPA"
        type="number"
        placeholder="eg. 8.5"
        name="cgpa"
        {...register("cgpa")}
        error={errors?.cgpa}
      />
      <Input
        label="SGPA"
        type="number"
        placeholder="eg. 9.0"
        name="sgpa"
        {...register("sgpa")}
        error={errors?.sgpa}
      />
      <div className="space-y-2">
        <h3 className="font-medium capitalize text-2xl">Image(JPEG/JPG)</h3>
        {imageUrl === "" ? (
          <>
            <UploadButton
              endpoint="imageUploader"
              onClientUploadComplete={(res) => {
                // Do something with the response
                console.log("Files: ", res);
                setValue("imageUrl", res[0].url);
              }}
              onUploadError={(error) => {
                // Do something with the error.
                alert(`ERROR! ${error.message}`);
              }}
            />
            {errors?.imageUrl && (
              <p className="text-red-500">{errors.imageUrl.message}</p>
            )}
          </>
        ) : (
          <img
            className="w-[200px] border-2 border-black"
            src={imageUrl}
            alt=""
          />
        )}
      </div>
      <SubmitButton label="save" type="submit" />
    </form>
  );
};

export default AchieverForm;
