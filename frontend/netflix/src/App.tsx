import ListGroup from "./components/listGroup";
import PropsListGroup from "./components/propsListGroup";
function App() {
  let name = ["what", "kerala", "Something"];

  // return <div><ListGroup /></div>
  const handleSelectItem=(name : string)=>{
    console.log("inside app-->",name);
    
  }
  return (
    <>
      <ListGroup /> 
      <PropsListGroup name={name} heading="Cities" onSelectItem={handleSelectItem}/>
    </>
  );
}

export default App;
