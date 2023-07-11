import styles from './form-button.module.scss';
import classNames from 'classnames';
import Button from 'react-bootstrap/Button';
import { Variant } from 'react-bootstrap/esm/types';


type ButtonVariant =
    | Variant
    | 'link'
    | 'outline-primary'
    | 'outline-secondary'
    | 'outline-success'
    | 'outline-danger'
    | 'outline-warning'
    | 'outline-info'
    | 'outline-dark'
    | 'outline-light';

export interface FormButtonProps {
    variant: ButtonVariant;
    content: string;
    className?: string;
}

export const FormButton = ({ variant, content }: FormButtonProps) => {
    return (  <div style={{ padding: 5 }}><Button variant={variant}>{content}</Button></div>);
};
