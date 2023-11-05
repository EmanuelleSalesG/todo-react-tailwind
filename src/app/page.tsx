"use client"

import { TodoItem } from "@/types/TodoItem";
import { useState } from "react";

const Page = () => {

  const [itemInput, setItemInput] = useState('');

  const [list, setList] = useState<TodoItem[]>([
    
  ]);

  const handleAddButton = () => {
    if(itemInput.trim() === '') return;
    setList([
      ...list, {id: list.length + 1, label: itemInput, checked: false}
    ]);
    setItemInput('');
  }

  const deleteItem = (id: number) => {
    setList(list.filter((item) => item.id !== id));
  }

  const toggleItem = (id: number) => {
      let newList = [...list];

      for(let i in newList){
        if(newList[i].id === id){
          newList[i].checked = !newList[i].checked;
        }
      }
      setList(newList);
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center text-2xl bg-black text-white">
      <h1 className="text-4xl mt-5 font-semibold font-mono">Todo ✍🏻</h1>

      <div className="flex w-full max-w-lg my-3 p-4 rounded-md bg-blue-700 border-2 border-blue-800">
          <input type="text" 
          placeholder="What do you want to do? "
          className="flex-1 bg-blue-700 outline-none text-2xl mr-3"
          value={itemInput}
          onChange={e => setItemInput(e.target.value)}/>
          <button onClick={handleAddButton} className="text-4xl">+</button>
      </div>

      { (list.length > 1) &&
        <div>
          <p className="border border-white p-2 rounded-md m-2">{list.length} tasks listed</p>
        </div>
      }

      <ul className="w-full max-w-lg pl-5">
          {list.map((item) => (
            <>
              <li key={item.id} className="p-2 flex justify-between">
              <div>
                <input onClick={() => toggleItem(item.id)} className="mr-2 w-5 h-5" type="checkbox" checked={item.checked} />  
                {item.label}
              </div>       
              <button onClick={() => deleteItem(item.id)} className="bg-blue-800 ml-2  rounded-full px-2 text-xl mr-2 hover:opacity-80">Close</button> 
              </li>
              <hr />
            </> 

          ))}  
      </ul>
    </div>
  );
}

export default Page;