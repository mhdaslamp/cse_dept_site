"use client";

import React from "react";
import SubmitButton from "@/components/admin/SubmitButton";
import Input from "@/components/admin/Input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { createStudent } from "@/actions/student.action";

const studentFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  course: z.string().min(1, { message: "Course is required" }),
  batch: z.string().regex(/^\d{4}-\d{4}$/, {
    message: "Invalid batch format",
  }),
});

const StudentForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(studentFormSchema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (data) => {
      await createStudent(data);
    },
    onSuccess: () => {
      alert("Successfully created");
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  return (
    <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Name"
        type="text"
        placeholder="eg. John Doe"
        name="name"
        {...register("name")}
        error={errors?.name}
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
        label="Batch"
        type="text"
        placeholder="eg. 2020-2024"
        name="batch"
        {...register("batch")}
        error={errors?.batch}
      />
      <SubmitButton disabled={isPending} label="save" type="submit" />
    </form>
  );
};

export default StudentForm;
