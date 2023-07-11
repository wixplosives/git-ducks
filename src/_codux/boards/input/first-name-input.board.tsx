import { createBoard } from '@wixc3/react-board';
import { FormInput } from '../../../components/input/input';
import firstNameInput from '../../../assets/first-name-input.png';


export default createBoard({
    name: 'First-Name-Input',
    Board: () => <FormInput type={'text'} label={'First Name'} width={115} />,
    cover: firstNameInput,
    environmentProps: {
        windowHeight: 640,
    },
});
