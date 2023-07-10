import { createBoard } from '@wixc3/react-board';
import { FormInput } from '../../../components/input/input';

export default createBoard({
    name: 'CheckoutboxInput',
    Board: () => (
        <FormInput
            type={'checkbox'}
            label={
                'I agree to all the terms of the Agreement'
            }
        />
    ),
    environmentProps: {
        canvasWidth: 456,
    },
});
