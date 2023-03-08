import React, { useState, useEffect } from 'react';
import axios from 'axios';

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

function getHeaders(song: Object){
    let headers: string[] = [];

    for (let key of Object.keys(song)){
        if (key != 'songId'){
            headers.push(key)
        }
    }
    return headers;
}

export default function Table(props: TableProps) {
    const headers = getHeaders(props.data[0]);

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        {
                            headers.map(head => {
                                return(
                                    <th>{head}</th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        props.data.map(o =>{
                            return(
                                <tr>
                                    <td>{o.title}</td>
                                    <td>{o.artist}</td>
                                    <td>{o.album}</td>
                                    <td>{o.genre}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}