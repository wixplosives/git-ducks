import styles from './codux-icon.module.scss';
import classNames from 'classnames';

export interface CoduxIconProps {
    className?: string;
    children?: React.ReactNode;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const CoduxIcon = ({
    className,
    children = 'CoduxIcon',
}: CoduxIconProps) => {
    return <div className={classNames(styles.root, className)}>{children}</div>;
};
