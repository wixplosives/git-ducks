import { createBoard } from '@wixc3/react-board';
import { FormInput } from '../../../components/input/input';
import checkbox from '../../../assets/agrriment-checkbox.png';

export default createBoard({
    name: 'Checkoutbox-Input',
    Board: () => (
        <FormInput
            type={'checkbox'}
            label={'I agree to all the terms of the Agreement'}
        />
    ),
    cover: checkbox,
    environmentProps: {
        canvasWidth: 456,
    },
});
