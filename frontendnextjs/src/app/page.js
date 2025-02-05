'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { userCheck } from '@/store/user/userSlice';

export default function Home() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(userCheck())
  },[dispatch])

  return (
    <>
      <div>
        <div>
          <Link href={"/signin"}>Go to Signin</Link>
        </div>
      </div>
    </>
  );
}