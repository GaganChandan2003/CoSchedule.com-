import { Box, Checkbox, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";

export const TodoList = ({ todolist }) => {
  console.log("in todolist", todolist)
  const [data1, setData] = useState(todolist);
  
   console.log("after data set ", data1);
  // const [status,setStatus] = useState(false)

  const handleChange = (id) => {
    let x = data1.map((e) => {
      if (e.id === id) {
        return { ...e, isStatus: !e.isStatus };
      } else {
        return e;
      }
    });
    setData(x);
   // console.log(id);
  };

  return (
    <Box w="60%" marginTop="100px" m="auto" fontSize={"30px"}>
      {data1.map((el) => {
        return (
          <Flex key={el.id} justifyContent="space-between">
            <Checkbox onChange={() => handleChange(el.id)} />
            {el.isStatus ? (
              <Text textDecorationLine={"line-through"}>{el.todo} </Text>
            ) : (
              <Text>{el.todo} </Text>
            )}
          </Flex>
        );
      })}
    </Box>
  );
};
