import React from 'react';

export const ThoughtList = ({ thoughtList }) => {

  const renderedThoughts = thoughtList.map( (thought) =>
    <thoughtCard 
      key={thought.id} 
      title={thought.thought} 
      body={thought.body} 
      />)

  return (
    <div>
    { renderedThoughts }
    </div>
  );
}
