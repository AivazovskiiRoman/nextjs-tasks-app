'use client';

import Header from '@/app/components/Header';
import CreateButton from '@/app/components/CreateButton';
import TaskList from '@/app/components/TaskList';

export default function HomePage() {
  return (
    <div>
      <Header />
      <CreateButton />
      <TaskList />
    </div>
  );
}
