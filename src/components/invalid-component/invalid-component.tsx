import styles from './invalid-component.module.scss';
import classNames from 'classnames';

export interface InvalidComponentProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const InvalidComponent = ({
    className,
    children = 'InvalidComponent',
}: InvalidComponentProps) => {
    return <div style={{border: "solid 1px"}}>Component with multiple returns</div>;
};
