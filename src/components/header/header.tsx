import styles from './header.module.scss';
import classNames from 'classnames';

export interface HeaderProps {
    title: string;
}

export const Header = ({ title }: HeaderProps) => {
    return (
        title ?
        <div
            style={{
                fontFamily: 'questrial, sans-serif',
                fontSize: '32px',
                fontWeight: '400',
                lineHeight: '0.8',
            }}
        >
            {title}
        </div> :
        {title}
    );
};
