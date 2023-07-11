import { createBoard } from '@wixc3/react-board';
import { FormInput } from '../../../components/input/input';
import lastNameInput from '../../../assets/last=-name.png';

export default createBoard({
    name: 'Last-Name-Input',
    Board: () => <FormInput type={'text'} label={'Last Name'} width={115} />,
    cover: lastNameInput,
    environmentProps: {
        windowHeight: 640,
    },
});
