import React,{useState} from "react";

import SpecialButtons from "./SpecialButtons";
import NumberButtons from "./NumberButtons";
import OperationalButtons from "./OperationalButtons";
import InputField from "./InputField";




const BasicCalculator = () => {
  let [inputNum,setInputNum] = useState('');

  const numlist = ['1', '2', '3', '4', '5', '6', '7', '8', '9 ', '0', "00", "."];
  const specialFeatures = ["(", ")", "CE"];
  const operationList = ["/", "*", "-", "+", "="];

  const onclickHandler=(e)=>{
    if(e.target.value==='CE')
    {
        setInputNum('');
    }
    else if(e.target.value==="=")
    {
      try
      {

        setInputNum(eval(inputNum).toString());
      }
      catch(err)
      {
        setInputNum("Error");
      }
    }
    else{
      setInputNum(inputNum.concat(e.target.value))
    }
  }

  

  return (
    <div className="bg-black sm:bg-gradient-to-tr sm:from-gray-700 sm:via-black sm:to-gray-700  h-screen flex flex-col justify-center items-center gap-3">
        <InputField inputNum={inputNum}/>
    <div className="flex gap-2">
      <div className="flex flex-col gap-2">
        <div className="flex  gap-2">
          {specialFeatures.map((sf,id) => {
            return (
              <SpecialButtons btnText={sf} key={id} onclickHandler={onclickHandler} />
            );
          })}
        </div>
        <div className="grid grid-flow-row grid-cols-3  gap-2">
          {numlist.map((num,key) => {
            return (
              <NumberButtons numberText={num} onclickHandler={onclickHandler} key={key}/>
            );
          })}
        </div>
      </div>
      <div className="flex gap-2 flex-col">
        {operationList.map((op,key) => {
          return (
            <OperationalButtons operationalBtn={op} key={key} onclickHandler={onclickHandler}/>
          );
        })}
      </div>
    </div>

    </div>
  );
};

export default BasicCalculator;
