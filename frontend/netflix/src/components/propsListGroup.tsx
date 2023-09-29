import { useState } from "react";

interface Props {
    name : string[];
   heading : string;
   onSelectItem:(name:string)=> void;
}


function PropsListGroup({ name, heading,onSelectItem} : Props){

  
     
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
      <>
      <h1>{heading}</h1>
        <ul className="max-w-xs flex flex-col">
     
          {name.length === 0 && <p>No item Found</p>}
          {name.map((name, index) => (
            <li
              className={
                selectedIndex === index
                  ? "inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white cursor-pointer"
                  : "inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium"
              }
              key={name}
              onClick={() => {
                setSelectedIndex(index)
                onSelectItem(name)
                console.log("-->",selectedIndex);
                
              }}
            >
              {name}
            </li>
          ))}
        </ul>
      </>
    );
}
export default PropsListGroup;


