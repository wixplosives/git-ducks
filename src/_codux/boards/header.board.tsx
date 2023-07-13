import { createBoard } from '@wixc3/react-board';
import { Header } from '../../components/header/header';
import title from '../../assets/sign-up-header.png';

export default createBoard({
    name: 'header',
    Board: () => (
            <Header title={'Sign Up'} />
    ),
    cover: title,
    environmentProps: {
        windowHeight: 484,
    },
});
