import { createBoard } from '@wixc3/react-board';
import { Header } from '../../components/header/header';
import title from "../../assets/sign-up-header.png"

export default createBoard({
    name: 'header',
    Board: () => (
        <div>
            <Header title={"Sign Up"}/>
        </div>
    ),
    cover:title
});
