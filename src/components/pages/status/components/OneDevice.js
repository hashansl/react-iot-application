import React from "react";

import Amplify from "aws-amplify";
import awsconfig from "../../../../aws-exports";
import "@aws-amplify/ui/dist/style.css";

import { PubSub, Auth } from "aws-amplify";
import { AWSIoTProvider } from "@aws-amplify/pubsub/lib/Providers";
import "./OneDevice.css";
import { Paper } from "@material-ui/core";

Amplify.configure(awsconfig);

// Apply plugin with configuration
Amplify.addPluggable(
  new AWSIoTProvider({
    aws_pubsub_region: "us-east-2",
    aws_pubsub_endpoint:
      "wss://a2dbivycrriq9k-ats.iot.us-east-2.amazonaws.com/mqtt",
  })
);

class OneDevice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sensorMsg: '{"Null": 0}',
    };
  }

  componentDidMount() {
    Auth.currentCredentials().then((response) => console.log(response));
    PubSub.subscribe(
      "smart-seal/company-1/" + this.props.sealId + "/seal-update"
    ).subscribe({
      next: (data) => {
        try {
          this.setState({ sensorMsg: data.value });
          // console.log("dataXXXXX");
          // console.log(data);
        } catch (error) {
          console.log("Error, are you sending the correct data?");
        }
      },
      error: (error) => console.error(error),
      close: () => console.log("Done"),
    });
  }

  render() {
    const { sensorMsg } = this.state;
    let sensorID = sensorMsg["device_Id"];
    let latitude = sensorMsg["latitude"];
    let longitude = sensorMsg["longitude"];
    let seal_status = sensorMsg["seal_status"];

    if (seal_status === 1) {
      var sensorStat = "Safe";
    } else if (seal_status === 0) {
      var sensorStat = "Not Safe";
    } else {
      var sensorStat = "Not Connected";
    }

    return (
      <>
        <div className="col_OneDevice">
          <h3>{this.props.deviceName}</h3>
          <Paper className="paper_1_OneDevice" elevation={10} square>
            Device Status: {sensorStat}
          </Paper>
          <Paper className="paper_2_OneDevice" elevation={10} square>
            GPS:({latitude}, {longitude})
          </Paper>
        </div>
      </>
    );
  }
}

export default OneDevice;
