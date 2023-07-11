import { createBoard } from '@wixc3/react-board';
import { Icon } from '../../../components/icon/icon';
import CoduxIcon from '../../../assets/Codux-icon.png';

export default createBoard({
    name: 'Codux-Icon',
    Board: () => (
        <Icon
            svg={
                <svg
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <g clip-path="url(#clip0_37_16)">
                        <rect
                            x="8"
                            y="8"
                            width="8"
                            height="5"
                            fill="white"
                        ></rect>
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M18.7932 6.79687C18.7932 8.13189 18.4084 9.37702 17.7435 10.4273C21.2447 10.7027 24 13.6311 24 17.2031C24 20.9569 20.957 24 17.2031 24H6.79692C3.04308 24 0 20.9569 0 17.2031C0 13.6335 2.75175 10.7065 6.2497 10.4279C5.58462 9.37744 5.1996 8.13212 5.1996 6.79687C5.1996 3.04306 8.24264 0 11.9964 0C15.7502 0 18.7932 3.04306 18.7932 6.79687ZM15.2609 9.8089L12.8066 8.48399C12.2964 8.20854 11.6816 8.20918 11.1719 8.48568L8.73161 9.80959C8.23924 10.0767 8.23924 10.7834 8.73161 11.0505L11.1719 12.3744C11.6816 12.6509 12.2964 12.6516 12.8066 12.3761L15.2609 11.0512C15.7549 10.7845 15.7549 10.0756 15.2609 9.8089Z"
                            fill="url(#paint0_linear_37_16)"
                        ></path>
                    </g>
                    <defs>
                        <linearGradient
                            id="paint0_linear_37_16"
                            x1="20.4874"
                            y1="20.5841"
                            x2="-2.8072"
                            y2="-2.85635"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop offset="0.213542" stop-color="#4B47FF"></stop>
                            <stop offset="1" stop-color="#39DBB0"></stop>
                        </linearGradient>
                        <clipPath id="clip0_37_16">
                            <rect width="24" height="24" fill="white"></rect>
                        </clipPath>
                    </defs>
                </svg>
            }
        />
    ),
    cover: CoduxIcon,
});
