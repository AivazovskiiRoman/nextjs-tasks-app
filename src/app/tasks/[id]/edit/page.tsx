'use client';

import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter, useParams } from 'next/navigation';
import axios from 'axios';
import { TASKS_API } from '@/lib/constants/tasks';
import { validateTask } from '@/lib/validation';
import { TaskForm } from '@/app/components/TaskForm';
import Header from '@/app/components/Header';

export default function EditTaskPage() {
  const { id } = useParams();
  const router = useRouter();
  const { register, handleSubmit, setValue, control } = useForm<Task>();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTask();
  }, []);

  const fetchTask = async () => {
    const response = await axios.get(TASKS_API.endpoints.detail(id as string));
    const { title, color } = response.data;
    setValue('title', title);
    setValue('color', color);
  };

  const onSubmit = handleSubmit(async (task: Task) => {
    const { isValid, error } = validateTask(task);

    if (!isValid) {
      setError(error);
      return;
    }

    try {
      await axios.put(TASKS_API.endpoints.update(id as string), task);
      router.push('/home');
    } catch (err) {
      console.error(err);
      setError('Failed to update task');
    }
  });

  return (
    <>
      <Header />
      <TaskForm
        register={register}
        control={control}
        error={error}
        submitLabel="Save"
        onSubmit={onSubmit}
      />
    </>
  );
}
