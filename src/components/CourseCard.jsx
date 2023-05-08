'use client';
import { useState } from 'react';
import { Text, Paper } from '@mantine/core';

export default function CourseCard({ name }) {
  const [isSelected, setSelected] = useState(false);
  return (
    <Paper
      sx={{
        cursor: 'pointer',
        background: isSelected ? 'yellow' : 'white',
      }}
      shadow={isSelected ? 'xl' : 'sm'}
      radius="md"
      p="md"
      withBorder
      onClick={() => setSelected(!isSelected)}
    >
      <Text fw={500} fz="xl">
        {name}
      </Text>
    </Paper>
  );
}
