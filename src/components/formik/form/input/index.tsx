import { randomString } from '@/functions/string';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { ErrorMessage, Field } from 'formik';
import { InputGroup } from 'react-bootstrap';

type TInputProps = {
  id?: string;
  testId?: string;
  name: string;
  placeholder: string;
  type: string;
  label: string;
  autoComplete?: string;
  className?: string;
  max?: string;
  min?: string;
  icon?: IconProp;
};

const defaultValues: TInputProps = Object.freeze({
  id: randomString(),
  testId: randomString(),
  name: '',
  placeholder: '',
  type: 'text',
  label: '',
  className: '',
  autoComplete: '',
});

const Input = (props: TInputProps = defaultValues): React.ReactElement => (
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
        data-testid={props.name}
        id={props.id}
        className="form-control"
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        autoComplete={props.autoComplete}
      />
    </InputGroup>

    <ErrorMessage
      name={props.name}
      component="div"
      className="text-danger text-end"
    />
  </div>
);

export default Input;
