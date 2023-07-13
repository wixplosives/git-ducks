import { createBoard } from '@wixc3/react-board';
import { FormButton } from '../../../components/form-button/form-button';
import submit from '../../../assets/invalid-button.png';

export default createBoard({
    name: 'Invalid-Button ',
    Board: () => false ? <FormButton variant={'warning'} content={'Invalid'} /> : 5,
    environmentProps: {
        windowWidth: 1024,
    },
    cover: submit,
});
