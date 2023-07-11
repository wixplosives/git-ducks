import { createBoard } from '@wixc3/react-board';
import { InvalidComponent } from '../../../test/invalid-component/invalid-component';
import InvalidComponentCover from "../../../assets/invalid-component.png" 

export default createBoard({
    name: 'Invalid-component',
    Board: () => <InvalidComponent />,
    cover: InvalidComponentCover
});
