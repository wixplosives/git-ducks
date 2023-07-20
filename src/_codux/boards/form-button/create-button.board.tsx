import { createBoard } from '@wixc3/react-board';
import { FormButton } from '../../../components/form-button/form-button';
import create from '../../../assets/create-button.png';

export default createBoard({
    name: 'Create-Button',
    Board: () => <FormButton variant={'primary'} content={'Create'} />,
    environmentProps: {
        windowWidth: 1024,
    },
    cover: create,
});
