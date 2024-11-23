'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { TASKS_API } from '@/lib/constants/tasks';
import { validateTask } from '@/lib/validation';
import { TaskForm } from '@/app/components/TaskForm';
import Header from '@/app/components/Header';

export default function CreateTaskPage() {
  const router = useRouter();
  const { register, handleSubmit, control } = useForm<Task>();
  const [error, setError] = useState<string | null>(null);

  const onSubmit = handleSubmit(async (task: Task) => {
    const { isValid, error } = validateTask(task);

    if (!isValid) {
      setError(error);
      return;
    }

    try {
      await axios.post(TASKS_API.endpoints.create(), task);
      router.push('/home');
    } catch (err) {
      console.error(err);
      setError('Failed to add task');
    }
  });

  return (
    <>
      <Header />
      <TaskForm
        register={register}
        control={control}
        error={error}
        submitLabel="Add Task"
        onSubmit={onSubmit}
      />
    </>
  );
}
