import { createBoard } from '@wixc3/react-board';
import { FormInput } from '../../../components/input/input';

export default createBoard({
    name: 'PasswordInput',
    Board: () => <FormInput type={'text'} label={'Password'} />,
});
