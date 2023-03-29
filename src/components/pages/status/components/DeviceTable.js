import React, { Component } from "react";
import ReactDOM from "react-dom";
import MaterialTable from "material-table";
import Button from "@material-ui/core/Button";
import RefreshIcon from "@material-ui/icons/Refresh";
import DeviceMap from "./DeviceMap";

import "./DeviceTable.css";

import {
  Add,
  Edit,
  Delete,
  Check,
  Close,
  Search,
  NavigateBefore,
  NavigateNext,
  FirstPage,
  LastPage,
  Clear,
} from "@material-ui/icons";

export default function DeviceTable() {
  const tableRef = React.createRef();

  return (
    <div class="name_devicetable">
      <MaterialTable
        title="Active Devices ( Last updated data )"
        tableRef={tableRef}
        columns={[
          {
            title: "Device ID",
            field: "sealId",
            headerStyle: {
              backgroundColor: "#dbdbdb",
            },
          },
          {
            title: "Seal Status",
            field: "sealStatus",
            cellStyle: {
              backgroundColor: "#fff6e8",
              // color: "#FFF",
            },
            headerStyle: {
              backgroundColor: "#dbdbdb",
            },
          },
          {
            title: "Latitude",
            field: "latitude",
            headerStyle: {
              backgroundColor: "#dbdbdb",
            },
          },
          {
            title: "Longitude",
            field: "longitude",
            headerStyle: {
              backgroundColor: "#dbdbdb",
            },
          },
          {
            title: "Timestamp",
            field: "timestamp",
            headerStyle: {
              backgroundColor: "#dbdbdb",
            },
          },
        ]}
        data={(query) =>
          new Promise((resolve, reject) => {
            let url =
              "https://pt1tefe1ya.execute-api.us-east-2.amazonaws.com/devv/sensordata";
            // url += "per_page=" + query.pageSize;
            // url += "&page=" + (query.page + 1);
            fetch(url)
              .then((response) => response.json())
              .then((result) => {
                resolve({
                  data: result.sensors.Items,
                  // page: result.page - 1,
                  // totalCount: result.total,
                });
              });
          })
        }
        actions={[
          {
            icon: "refresh",
            tooltip: "Refresh Data",
            isFreeAction: true,
            onClick: () => tableRef.current && tableRef.current.onQueryChange(),
          },
        ]}
        icons={{
          Add: () => (
            <Button>
              <Add /> Add Device
            </Button>
          ),
          Edit: () => (
            <Button>
              <Edit />
            </Button>
          ),
          Delete: () => (
            <Button>
              <Delete />
            </Button>
          ),
          Check: () => (
            <Button>
              <Check />
            </Button>
          ),
          Clear: () => (
            <Button>
              <Close />
            </Button>
          ),
          Search: () => (
            <Button>
              <Search />
            </Button>
          ),
          FirstPage: () => (
            <Button>
              <FirstPage />
            </Button>
          ),
          LastPage: () => (
            <Button>
              <LastPage />
            </Button>
          ),
          NextPage: () => (
            <Button>
              <NavigateNext />
            </Button>
          ),
          PreviousPage: () => (
            <Button>
              <NavigateBefore />
            </Button>
          ),
          PreviousPage: () => (
            <Button>
              <NavigateBefore />
            </Button>
          ),
          Refresh: () => (
            <Button>
              <RefreshIcon />
            </Button>
          ),
        }}
      />

      {/* <DeviceMap /> */}
    </div>
  );
}
