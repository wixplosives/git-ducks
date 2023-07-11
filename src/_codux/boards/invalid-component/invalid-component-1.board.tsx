import { createBoard } from '@wixc3/react-board';
import { InvalidComponent } from '../../../components/invalid-component/invalid-component';
import componentWithMultipleReturns from "../../../assets/component-with-multiple-returns.png"

export default createBoard({
    name: 'Invalid-component-multiple returns',
    Board: () => <InvalidComponent />,
    cover: componentWithMultipleReturns
});
