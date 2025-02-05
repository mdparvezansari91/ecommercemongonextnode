'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { userCheck } from '@/store/user/userSlice';

export default function Home() {
  const user = useSelector(state=>state.user.user)
  console.log(user?.userId?.emailid);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(userCheck())
  },[dispatch])

  return (
    <>
      <div>
        <div>
          <div>{user?.userId?.emailid}</div>
          
          <Link href={"/signin"}>Go to Signin</Link>
        </div>
      </div>
    </>
  );
}