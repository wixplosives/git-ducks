import styles from './icon.module.scss';
import classNames from 'classnames';

export interface IconProps {
    svg : any
}

export const Icon = ({
svg
}: IconProps) => {
    return <div>{svg}</div>;
};
