import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  TitleBar,
  Button,
  TextInput,
  Toolbar,
  Box,
  SegmentedControl,
  IndeterminateProgressWheel,
  Form,
  Label,
  Window,
  Desktop
} from '../src/index';

export class Window1 extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Window chrome style={{marginBottom: '60px'}}>
        <TitleBar
          title="TitleBar"
          controls
          onClosePress={() => { alert('close'); }}
          onMinimizePress={() => { alert('minimize'); }}
          onMaximizePress={() => { alert('mazimize'); }}
        />
      </Window>
    );
  }
}


export class Window2 extends Component {
  constructor() {
    super();
    this.state = {selectedTab: 'login'};
  }

  render() {
    return (
      <Window chrome>
        <TitleBar title="TitleBar with Toolbar" controls>
          <Toolbar/>
        </TitleBar>

        <Box className="box">
          <SegmentedControl>
            <SegmentedControl.Item
              title="Selected"
              selected={this.state.selectedTab === 'login'}
              onPress={() => { this.setState({ selectedTab: 'login' }) }}
              className="form"
            >
              <Form onSubmit={() => { alert('form submitted'); }}>
                <Label color="red" align="center">
                  There was an error submitting this form.
                </Label>

                <Form.Row>
                  <Label>Label:</Label>
                  <TextInput defaultValue="" placeholder="TextField" style={{width: '200px'}}/>
                </Form.Row>

                <Form.Row>
                  <Label>Longer label:</Label>
                  <TextInput defaultValue="" placeholder="TextField" style={{width: '200px'}}/>
                </Form.Row>

                <Form.Row>
                  <Button>PushButton</Button>
                  <Button onPress="submit" color="blue">PushButton Blue</Button>

                  <IndeterminateProgressWheel absolute/>
                </Form.Row>
              </Form>
            </SegmentedControl.Item>

            <SegmentedControl.Item
              title="Segmented"
              selected={this.state.selectedTab === 'segmented'}
              onPress={() => { this.setState({ selectedTab: 'segmented' }) }}
            >
            </SegmentedControl.Item>

            <SegmentedControl.Item
              title="Control"
              selected={this.state.selectedTab === 'control'}
              onPress={() => { this.setState({ selectedTab: 'control' }) }}
            >
            </SegmentedControl.Item>
          </SegmentedControl>
        </Box>
      </Window>
    );
  }
}
