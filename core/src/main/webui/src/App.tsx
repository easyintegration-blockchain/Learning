import React from 'react';
import './App.css';
import {
  Page,
} from "@patternfly/react-core";
import {DesignerPage} from "./designer/DesignerPage";
import {KameletsPage} from "./kamelets/KameletsPage";
import {ComponentsPage} from "./components/ComponentsPage";
import {EipPage} from "./eip/EipPage";
import {BuilderPage} from "./builder/BuilderPage";
import {KameletApi} from "./lib/api/KameletApi";
import {ComponentApi} from "./lib/api/ComponentApi";
import {ProjectModel, StepStatus} from "./lib/model/ProjectModel";

interface Props {
  page: "designer" | "kamelets" | "components" | "eip" | "builder";
}

interface State {
  name: string
  yaml: string
  key: string
}

class App extends React.Component<Props, State>{
  public state: State = {
    name: 'demo.yaml',
    key: '',
    yaml: ''
  }

  componentDidMount() {
    console.log("*** KameletApi & ComponentApi Loaded ***");
  }

  public render() {
    return( <Page className="easy">
              {this.props.page === "designer" &&  <DesignerPage />}
              {this.props.page === "kamelets" &&  <KameletsPage />}
              {this.props.page === "components" &&  <ComponentsPage />}
              {this.props.page === "eip" &&  <EipPage />}
              {this.props.page === "builder" &&  <BuilderPage />}
            </Page>
          );
  }
}

export default App;