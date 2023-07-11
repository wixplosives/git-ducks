import styles from './invalid-component.module.scss';
import classNames from 'classnames';

export interface InvalidComponentProps {
    className?: string;
    children?: React.ReactNode;
}

export const InvalidComponent = ({
    className,
    children = 'Invalid Component',
}: InvalidComponentProps) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            {children}
            <audio
                controls={true}
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/audio-placeholder.mp3"
            />
        </div>
    );
};
