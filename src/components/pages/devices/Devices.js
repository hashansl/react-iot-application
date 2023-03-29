import { Table } from "@material-ui/core";
import React from "react";
import Footer2 from "../../footer2/Footer2";
import DeviceControlTable from "./components/DeviceControlTable";
// import TodoList from "./components/testdynamo";

function Devices() {
  return (
    <>
      {/* <TodoList /> */}
      <DeviceControlTable />
      <Footer2 />
    </>
  );
}

export default Devices;
