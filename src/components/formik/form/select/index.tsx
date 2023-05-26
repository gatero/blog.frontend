import { randomString } from '@/functions/string';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { ErrorMessage, Field } from 'formik';
import { Form, InputGroup } from 'react-bootstrap';

export type TSelectOption = {
  label: string;
  value: string;
};

export type TSelectProps = {
  id?: string;
  testId?: string;
  className?: string;
  placeholder: string;
  name: string;
  options: TSelectOption[];
  icon?: IconProp;
};

const defaultValues: TSelectProps = {
  id: randomString(),
  testId: '',
  name: '',
  className: '',
  placeholder: 'Selecciona -',
  options: [],
};

const Select = (props: TSelectProps = defaultValues): React.ReactElement => (
  <div className="select mb-3">
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
        data-testid={props.testId}
        id={props.id}
        as={Form.Select}
        name={props.name}
      >
        <option value="" disabled hidden>
          {props.placeholder}
        </option>
        {props.options.map((option: TSelectOption) => (
          <option key={randomString()} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
    </InputGroup>

    <ErrorMessage
      name={props.name}
      component="div"
      className="text-danger text-end"
    />
  </div>
);

export default Select;
