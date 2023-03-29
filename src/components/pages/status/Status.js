import { Table } from "@material-ui/core";
import React from "react";
import Footer2 from "../../footer2/Footer2";
// import ConnectedDevicesTable from "./components/ConnectedDevicesTable";
import PaperSection from "./components/PaperSection";
import DeviceTable from "./components/DeviceTable";
// import { DeviceMap } from "./components/DeviceMap";

function Status() {
  return (
    <>
      <PaperSection />
      <DeviceTable />
      <Footer2 />
    </>
  );
}

export default Status;
