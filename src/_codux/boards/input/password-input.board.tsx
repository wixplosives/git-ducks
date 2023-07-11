import { createBoard } from '@wixc3/react-board';
import { FormInput } from '../../../components/input/input';
import passwordInput from '../../../assets/password-input.png';

export default createBoard({
    name: 'Password-Input',
    Board: () => <FormInput type={'text'} label={'Password'} />,
    cover: passwordInput,
});
