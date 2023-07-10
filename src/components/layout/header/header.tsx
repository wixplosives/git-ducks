import { memo } from 'react';
import classNames from 'classnames';
import { Logo } from '../../common/logo/logo';
import styles from './header.module.scss';
import { FormButton } from '../../form-button/form-button';

export interface HeaderProps {
    className?: string;
}

export const Header = memo<HeaderProps>(function Header({ className }) {
    return (
        <header className={classNames(styles.root, className)}>
            <FormButton content={'hllo9'} variant={'primary'} />
            <Logo className={styles.logo} />
        </header>
    );
});
