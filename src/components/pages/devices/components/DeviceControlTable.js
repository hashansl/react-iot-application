import React, { Component } from "react";
import ReactDOM from "react-dom";
import MaterialTable from "material-table";
import Button from "@material-ui/core/Button";

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

export default function DeviceControlTable() {
  const { useState } = React;

  const [columns, setColumns] = useState([
    {
      title: "Device ID",
      field: "Id",
      headerStyle: {
        backgroundColor: "#dbdbdb",
      },
    },
    {
      title: "Company",
      field: "company",
      headerStyle: {
        backgroundColor: "#dbdbdb",
      },
    },
    {
      title: "Device Active Status",
      field: "activeStatus",
      headerStyle: {
        backgroundColor: "#dbdbdb",
      },
    },
  ]);

  const [data, setData] = useState([]);

  const saveSensor = (event) => {
    fetch(
      "https://pt1tefe1ya.execute-api.us-east-2.amazonaws.com/devv/sensor",
      {
        method: "POST",
        body: JSON.stringify(event),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log("error"));
  };

  const deleteSensor = (Id) => {
    fetch(
      "https://pt1tefe1ya.execute-api.us-east-2.amazonaws.com/devv/sensor",
      {
        method: "DELETE",
        body: JSON.stringify({
          Id: Id,
        }),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log("error"));
  };

  return (
    <div class="name_devicetable">
      <MaterialTable
        title="Device Management"
        columns={columns}
        data={(query) =>
          new Promise((resolve, reject) => {
            let url =
              "https://pt1tefe1ya.execute-api.us-east-2.amazonaws.com/devv/sensors";

            fetch(url)
              .then((response) => response.json())
              .then((result) => {
                resolve({
                  data: result.sensors,
                  // page: result.page - 1,
                  // totalCount: result.total,
                });
                // console.log("line 38", result.sensors);
              });
          })
        }
        options={{
          actionsColumnIndex: -1,
        }}
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
        }}
        editable={{
          onRowAdd: (newData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);

                saveSensor(newData);
                resolve();
                // console.log("Line 137", newData);
              }, 1000);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);

                resolve();
              }, 1000);
            }),
          onRowDelete: (oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                const Id = oldData.Id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);

                deleteSensor(Id);
                resolve();
              }, 1000);
            }),
        }}
      />
    </div>
  );
}
