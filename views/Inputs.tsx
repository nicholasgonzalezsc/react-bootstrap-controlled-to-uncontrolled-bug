import * as React from 'react';
import { Checkbox, ControlLabel, FormControl, FormGroup, Radio } from 'react-bootstrap';

function FieldGroup({ id, label, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
    </FormGroup>
  );
}

interface InputProps {
  checkedValue: boolean;
  value: string;
}

const noop = () => {}

export default class Inputs extends React.PureComponent<InputProps, {}> {

  render() {
    const { value, checkedValue } = this.props;
    return (
      <form>
        <FieldGroup
          id="formControlsText"
          type="text"
          label="Text"
          placeholder="Enter text"
          value={value}
          onChange={noop}
        />
        <FieldGroup
          id="formControlsEmail"
          type="email"
          label="Email address"
          placeholder="Enter email"
          value={value}
          onChange={noop}
        />
        <FieldGroup
          id="formControlsPassword"
          label="Password"
          type="password"
          value={value}
          onChange={noop}
        />

        <Checkbox checked={checkedValue} readOnly onChange={noop}>
          Checkbox
        </Checkbox>
        <Radio checked={checkedValue} readOnly onChange={noop}>
          Radio
        </Radio>

        <FormGroup controlId="formControlsTextarea">
          <ControlLabel>Textarea</ControlLabel>
          <FormControl componentClass="textarea" value={value} onChange={noop} placeholder="textarea" />
        </FormGroup>
      </form>
    );
  };
}
