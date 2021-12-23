import React from 'react';
import { useCharacter } from '../hooks/useCharacter';
import "./Character.css";

export default function Character(){

  const {data, loading, error} = useCharacter(4);

  console.log(error, loading, data);

  if(error) return <div>Something went wrong</div>;

  if(error) return <div>Spiinner</div>;

  // return(
  //   <div className="Character">
      
  //   </div>
  // )

  return <div className="Character">
    <img src={data.character.image} width={750} height={750} />
      <div className="Character-content">
      <h1>{data.character.name}</h1>
      <p>{data.character.gender}</p>
    <div className="Character-episode">
    {data.character.episode.map(episode => {
      return <div>{episode.name - <b>{episode.episode}</b>}</div>
    })}
    </div>
  </div>
</div>
}