/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React, { useEffect, useState } from "react";

export default function HomePage()
{
    const uid = localStorage.getItem('userId');
    const url = 'https://localhost:7152/api/Playlist';
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get(`${url}?userid=${uid}`).then(res => {
            setData(res.data.songs)
        })
    }, [uid]);

    function remove(id)
    {
        const uid = parseInt(localStorage.getItem('userId'));
        axios.delete(`${url}/${uid}/${id}`).then(res => {
            window.location.reload();
        });
    }

    console.log(data)
   
    return(
        <div class="container">
            {uid ? 
                data ? 
                <div>
                    <h1 class="mt-3">Welcome {localStorage.getItem('username')}!</h1>
                    <h3>{localStorage.getItem('username')}'s playlist</h3>
                    <table class="table mt-3">
                    <thead>
                        <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Artist</th>
                        <th scope="col">Album</th>
                        <th scope="col">Genre</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(song => (
                        <tr key={song.id}>
                            <td>{song.title}</td>
                            <td>{song.artist}</td>
                            <td>{song.album}</td>
                            <td>{song.genre}</td>
                            <td>
                                <a href="#" onClick={() => remove(song.songId)}>Delete</a>
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                : <div class="mt-3"></div>
            : 
                <div>
                <h1 class="mt-3">Login or create an account to make a playlist!</h1>
                </div>
            }
        </div>

    )
}