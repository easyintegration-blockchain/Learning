import React from 'react';
import './designer.css';
import {
    Badge, Button, Checkbox, Modal, ModalVariant,
    PageSection, PageSectionVariants, Tab, Tabs, TabTitleIcon, TabTitleText, Title, Tooltip,
} from '@patternfly/react-core';

interface Props {
    tab?: string
}

interface State {
    tab: string
}

export class DesignerPage extends React.Component<Props, State> {
    public state: State = {
        tab: this.props.tab ? this.props.tab : 'routes'
    };

    getTab(title: string, tooltip: string, icon: string) {
        const showCount = 0;
        return (
            <Tooltip position={"bottom"}
                     content={<div>{tooltip}</div>}>
                <div className="top-menu-item">
                    <TabTitleText>{title}</TabTitleText>
                    {showCount && <Badge isRead className="count">{0}</Badge>}
                </div>
            </Tooltip>

        )
    }
    
    render() {
        const tab = this.state.tab;
        return( <PageSection className="page" isFilled padding={{default: 'noPadding'}}>
                    <Tabs className="main-tabs" activeKey={tab}>
                        <Tab data-tour="routes" eventKey='routes' title={this.getTab("Routes", "Integration flows", "routes")}></Tab>
                        <Tab eventKey='rest' title={this.getTab("REST", "REST services", "rest")}></Tab>
                        <Tab eventKey='beans' title={this.getTab("Beans", "Beans Configuration", "beans")}></Tab>
                        <Tab eventKey='dependencies' title={this.getTab("Dependencies", "Dependencies", "dependencies")}></Tab>
                        <Tab eventKey='error' title={this.getTab("Error", "Error Handler", "error")}></Tab>
                        <Tab eventKey='exception' title={this.getTab("Exceptions", "Exception Clauses per type", "exception")}></Tab>
                    </Tabs>
                </PageSection>);
    }
}

export default DesignerPage;