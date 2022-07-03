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

  async componentDidMount() {
    console.log("*** Loading KameletApi & ComponentApi ***");
    
    const componentsResponse = await fetch('data/components.json');
    const componentsData = await componentsResponse.json();
    componentsData.forEach((text: string) => {
      fetch("components/" + text)
                .then((r) => r.text())
                .then(value => ComponentApi.saveComponent(value));
    });

    const kameletsResponse = await fetch('data/kamelets.json');
    const kameletsData = await kameletsResponse.json();
    kameletsData.forEach((text: string) => {
      fetch("kamelets/" + text)
                .then((r) => r.text())
                .then(value => KameletApi.saveKamelet(value));
    });

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