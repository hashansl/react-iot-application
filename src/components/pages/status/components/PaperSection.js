import React from "react";

import Amplify from "aws-amplify";
import awsconfig from "../../../../aws-exports";
import "@aws-amplify/ui/dist/style.css";

import "./PaperSection.css";
import OneDevice from "./OneDevice";

Amplify.configure(awsconfig);

class PaperSection extends React.Component {
  render() {
    return (
      <>
        <div className="name_papersection">
          <h3>Real-time Device Status</h3>
        </div>
        <div className="home_papersection">
          <div class="flex_container_papersection">
            <div className="row_papersection">
              <OneDevice sealId="seal-01" deviceName="Device 1" />
              <OneDevice sealId="seal-02" deviceName="Device 2" />
              <OneDevice sealId="seal-03" deviceName="Device 3" />
              <OneDevice sealId="seal-04" deviceName="Device 4" />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PaperSection;
