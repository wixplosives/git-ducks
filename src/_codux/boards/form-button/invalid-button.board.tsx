import { createBoard } from '@wixc3/react-board';
import { FormButton } from '../../../components/form-button/form-button';
import cancel from '../../../assets/Cancel.png';

export default createBoard({
    name: 'Invalid-Button',
    Board: () => false ? <FormButton variant={'secondary'} content={'Invalid'} /> : 2,
    cover: cancel,
    environmentProps: {
        windowWidth: 1024,
    },
});
