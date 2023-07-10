import { createBoard } from '@wixc3/react-board';
import { FormButton } from '../../../components/form-button/form-button';

export default createBoard({
    name: 'CancelButton',
    Board: () => <FormButton variant={'secondary'} content={'Cancel'} />,
    environmentProps: {
        windowWidth: 1024,
    },
});
