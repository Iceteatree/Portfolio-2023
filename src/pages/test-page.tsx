import Button from '@/components/Button';
import ThemeSwitch from '@/components/ThemeSwitch';
import React from 'react';

function TestPage() {
  return (
    <>
      <h1>Hello World</h1>
      <Button onClick={() => {}}>Click Me</Button>
      <h1 className="text-3xl font-bold underline ">Hello, Next.js!</h1>
      <ThemeSwitch />
    </>
  );
}

export default TestPage;
