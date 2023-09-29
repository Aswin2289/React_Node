import { useState } from "react";

// import { MouseEvent } from "react";
function ListGroup() {
  let name = ["Thoudpuzha", "kerala", "Idukki"];

  //   const handleClick = (event: MouseEvent) => console.log("Clicked\t", event);

  let selectHandle = -1;
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //   const message=name.length===0?<p>No item Found</p>:null

  //   const getMessage = () => {
  //     return name.length === 0 ? <p>No item Found</p> : null;
  //   };
  return (
    <>
    <h1>List</h1>
      <ul className="max-w-xs flex flex-col">
        {/* <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
          Profile
        </li>
        <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
          Settings
        </li>
        <li className="inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
          Newsletter
        </li> */}
        {/* {getMessage()} */}
        {name.length === 0 && <p>No item Found</p>}
        {name.map((name, index) => (
          <li
            className={
              selectHandle === index
                ? "inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium bg-white border text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white cursor-pointer"
                : "inline-flex items-center gap-x-2 py-3 px-4 text-sm font-medium"
            }
            key={name}
            onClick={() => {
              setSelectedIndex(index)
            }}
            // () => console.log("Clicked\t", name)
          >
            {name}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
