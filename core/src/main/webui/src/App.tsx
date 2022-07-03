import React from 'react';
import './App.css';
import {
  Page,
} from "@patternfly/react-core";
import {Designer} from "./designer/Designer";

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
  public render() {
    return( <Page className="easy">
              {this.props.page === "designer" &&  <Designer />}
            </Page>
          );
  }
}

export default App;