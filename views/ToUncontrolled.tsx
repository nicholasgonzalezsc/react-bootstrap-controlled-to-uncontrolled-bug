import Inputs from './Inputs';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Grid, Row, Col, Button } from 'react-bootstrap';

export default class ToUncontrolled extends React.PureComponent<{}, {}> {
  state = {
    value: 'a',
    checkedValue: true,
    interval: 1
  };

  render() {
    const { value, checkedValue } = this.state;
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <Inputs value={value} checkedValue={checkedValue} />
          </Col>
          <Col xs={12}>
            <Button bsSize="lg" onClick={this.nextInterval}>Next Interval</Button>
          </Col>
          <Col xs={12}>
            <p><strong>Value:</strong> {typeof value !== 'undefined' ? JSON.stringify(value) : 'undefined'}</p>
            <p><strong>Checked Value:</strong> {typeof checkedValue !== 'undefined' ? JSON.stringify(checkedValue) : 'undefined'}</p>
          </Col>
        </Row>
      </Grid>
    );
  }

  generateNextStringValue = (letter, len) => {
    let newVal = '';
    for (let i = 0; i < len; i++) {
      newVal += letter;
    }
    return newVal;
  }

  nextInterval = () => {
    const { interval } = this.state;
    if (interval % 2 === 0) {
      this.setState({
        value: this.generateNextStringValue('a', interval),
        checkedValue: true,
        interval: interval + 1,
      });
    } else {
      this.setState({
        value: null,
        checkedValue: null,
        interval: interval + 1,
      });
    }
  }
}

ReactDOM.render(<ToUncontrolled />, document.getElementById('app'));
