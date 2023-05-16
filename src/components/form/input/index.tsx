import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { ErrorMessage, Field } from 'formik';
import { FormEvent } from 'react';
import { InputGroup } from 'react-bootstrap';

type TInputProps = {
  id: string;
  name: string;
  placeholder: string;
  type: string;
  className: string;
  label: string;
  max: string;
  min: string;
  icon: IconProp;
  onChange: (event: FormEvent<HTMLInputElement>) => void;
  onFocus: (event: FormEvent<HTMLInputElement>) => void;
};

function Input(props: TInputProps) {
  return (
    <div className="input mb-3">
      <InputGroup
        className={classNames(props.className, {
          'flex-nowrap': props.icon || false,
        })}
      >
        {props.icon && (
          <InputGroup.Text>
            <FontAwesomeIcon icon={props.icon} />
          </InputGroup.Text>
        )}

        <Field
          id={props.id}
          className="form-control"
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
        />
      </InputGroup>

      <ErrorMessage
        name={props.name}
        component="div"
        className="text-danger text-end"
      />
    </div>
  );
}

Input.defaultProps = {
  id: '',
  name: '',
  placeholder: '',
  type: 'text',
  className: '',
  label: '',
  max: '',
  min: '',
  icon: '',
  onChange: () => true,
  onFocus: () => true,
};

export default Input;
