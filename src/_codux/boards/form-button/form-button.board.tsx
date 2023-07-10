import { createBoard } from '@wixc3/react-board';
import { FormButton } from '../../../components/form-button/form-button';

export default createBoard({
    name: 'SubmitButton',
    Board: () => <FormButton variant={'primary'} content={'Create'} />,
    environmentProps: {
        windowWidth: 1024,
    },
});
