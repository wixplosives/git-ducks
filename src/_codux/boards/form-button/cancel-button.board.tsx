import { createBoard } from '@wixc3/react-board';
import { FormButton } from '../../../components/form-button/form-button';
import cancel from '../../../assets/Cancel.png';

export default createBoard({
    name: 'Cancel-Button',
    Board: () => <FormButton variant={'secondary'} content={'Cancel'} />,
    cover: cancel,
    environmentProps: {
        windowWidth: 1024,
    },
});
