import styles from './input.module.scss';
import classNames from 'classnames';
import InputGroup from 'react-bootstrap/InputGroup';

export interface InputProps {
    label: string;
    type: string;
    width?: number;
    placeHolder?: string;
    className?: string;
}

/**
 * This component was generated using Codux's built-in Default new component template.
 * For details on how to create custom new component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const FormInput = ({
    className,
    width = 256,
    type,
    label,
    placeHolder,
}: InputProps) => {
    return (
        <div>
            {type === 'checkbox' ? (
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'start',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyItems: 'center',
                        width: '500px',
                        padding: '1px',
                    }}
                >
                    <input
                        style={{
                            margin: '10px',
                            width: '10px',
                            height: '10px',
                            borderRadius: '20px',
                            border: '1px solid #2d9fd9',
                            outline: 'none',
                            color: '#2d9fd9',
                        }}
                        type={type}
                    />
                    <label style={{ fontSize: '12px' }}>{label}</label>
                </div>
            ) : (
                <div>
                    <label>{label}</label>
                    <input
                        style={{ display: 'flex', width: `${width}px` }}
                        placeholder={placeHolder}
                        type={type}
                    />
                </div>
            )}
        </div>
    );
};
