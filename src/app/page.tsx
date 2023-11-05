"use client"

import { TodoItem } from "@/types/TodoItem";
import { useState } from "react";

const Page = () => {

  const [itemInput, setItemInput] = useState('');

  const [list, setList] = useState<TodoItem[]>([
    {label: 'Test', checked: false},
    {label: 'Test', checked: true}
  ]);

  const handleAddButton = () => {
    setList([
      ...list, {label: itemInput, checked: false}
    ]);
    setItemInput('');
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center text-2xl bg-black text-white">
      <h1 className="text-4xl mt-5 font-semibold">Todo ✍🏻</h1>

      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-blue-700 border-2 border-blue-800">
          <input type="text" 
          placeholder="What do you want to do? "
          className="flex-1 bg-blue-700 outline-none text-2xl mr-3"
          value={itemInput}
          onChange={e => setItemInput(e.target.value)}/>
          <button onClick={handleAddButton} className="text-4xl">+</button>
      </div>

      <div>
        <p className="border border-white p-2 rounded-md m-2">{list.length} tasks listed</p>
      </div>

      <ul className="w-full max-w-lg pl-5">
          {list.map(item => (
            <>
              <li className="p-2 flex justify-between">{item.label} 
              <button className="bg-blue-800  rounded-full px-2 text-xl mr-2 hover:opacity-80">Close</button>
              </li>
              <hr />
            </> 

          ))}  
      </ul>
    </div>
  );
}

export default Page;