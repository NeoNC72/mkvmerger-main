'use client';

import Image from 'next/image'
import React from 'react';
function handleFileChange(event : React.ChangeEvent<HTMLInputElement>){
  if (event.target.files != null){
      const selectedFile = event.target.files[0];
    if (selectedFile) {
      console.log('Selected file:', selectedFile);
    }else{
      console.log("Error");
    };
  };
  }



export default function Home() {
  return (
  <div>
    <input type="file" onChange={handleFileChange} />
  </div>
  )
}
