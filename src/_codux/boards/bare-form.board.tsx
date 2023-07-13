import { createBoard } from '@wixc3/react-board';
import formCover from '../../assets/bare-form.png';

export default createBoard({
    name: 'bare-Form ',
    Board: () => (
        <div className="formContainer">
            <div className="logoContainer"></div>
            <div className="inputContainer">
                <div className="userName"></div>
            </div>
            <div style={{ marginTop: '48px' }}></div>
            <div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'end',
                        padding: 5,
                    }}
                ></div>
            </div>
        </div>
    ),
    cover: formCover,
    environmentProps: {
        windowHeight: 700,
        windowWidth: 1000,
    },
});
