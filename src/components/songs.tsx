import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './table';

interface Song {
    title: string;
    artist: string;
    genre: string,
    album: string,
    songId : number
  }
  
interface TableProps {
    data: Song[];
  }

export default function Songs() {
    const url = 'https://localhost:5001/';
    const [songs, setSongs] = useState<Song[]>();

    useEffect(() => {
        axios.get(`${url}api/Songs?page=1&pageSize=10`).then(result => {
            setSongs(result.data.songs);
        });
    }, []);

    console.log(songs);

    return(
        <div>
            {songs ? (
                <Table data={songs} />
            ) : (
                <h1>Loading...</h1>
            )}
        </div>
    )
}