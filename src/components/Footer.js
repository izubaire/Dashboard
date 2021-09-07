import React from 'react';
import { HeartIcon } from '@heroicons/react/outline'

export default function Footer() {
  return (
  <footer className="flex justify-between items-center w-full">
    <h2 className="text-2xl text-gray-500 font-normal normal-case">COPYRIGHT © 2022 All rights Reserved</h2>
    <h3 className="flex items-center gap-3 text-xl text-gray-500 font-normal normal-case">Hand-crafted & Made with <HeartIcon className="w-9 h-9 text-red-500"/></h3>
</footer>
)
}
