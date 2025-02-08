import React from 'react';
import { useParams } from 'react-router-dom';

const EventsIdPage = () => {
  const params = useParams();
  return (
    <div>{params.id}</div>
  );
};

export default EventsIdPage;
