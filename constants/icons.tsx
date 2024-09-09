import React from 'react';
import Svg, { Path } from 'react-native-svg';

interface Props {
    color: string;
}

export const HomeIcon: React.FC<Props> = ({ color }) => (
    <Svg width="22" height="19" viewBox="0 0 22 19" fill="none">
        <Path d="M11.5556 0.210955C11.2359 -0.0703185 10.7641 -0.0703183 10.4444 0.210955L0.799845 8.69577C0.198041 9.22521 0.562831 10.2373 1.35545 10.2373H2.74713L3.93224 17.5356C4.06946 18.3806 4.78181 19 5.6165 19H10.1463V12.428C10.1463 12.186 10.3374 11.9899 10.5731 11.9899H11.4269C11.6626 11.9899 11.8537 12.186 11.8537 12.428V19H16.3835C17.2182 19 17.9305 18.3806 18.0678 17.5356L19.2529 10.2373H20.6445C21.4372 10.2373 21.802 9.22521 21.2002 8.69577L11.5556 0.210955Z" fill={color} />
    </Svg>
);

export const DiscoverIcon: React.FC<Props> = ({ color }) => (
    <Svg width="22" height="19" viewBox="0 0 21 21" fill="none">
        <Path fillRule="evenodd" clipRule="evenodd" d="M0.75 10.5C0.75 4.98606 5.23606 0.5 10.75 0.5C16.2639 0.5 20.75 4.98606 20.75 10.5C20.75 16.0139 16.2639 20.5 10.75 20.5C5.23606 20.5 0.75 16.0139 0.75 10.5ZM13.5476 11.5832L15.8014 5.94856C15.8294 5.87866 15.8363 5.80209 15.8211 5.72834C15.806 5.65459 15.7696 5.5869 15.7163 5.53367C15.6631 5.48043 15.5954 5.44399 15.5217 5.42886C15.4479 5.41373 15.3713 5.42058 15.3014 5.44856L9.66683 7.7024C9.27985 7.85716 8.92834 8.08892 8.63363 8.38363C8.33892 8.67834 8.10716 9.02985 7.9524 9.41683L5.69856 15.0514C5.67058 15.1213 5.66373 15.1979 5.67886 15.2717C5.69399 15.3454 5.73043 15.4131 5.78367 15.4663C5.8369 15.5196 5.90459 15.556 5.97834 15.5711C6.05209 15.5863 6.12866 15.5794 6.19856 15.5514L11.8332 13.2976C12.2202 13.1428 12.5717 12.9111 12.8664 12.6164C13.1611 12.3217 13.3928 11.9702 13.5476 11.5832ZM11.9038 10.5C11.9038 11.1373 11.3873 11.6538 10.75 11.6538C10.1127 11.6538 9.59615 11.1373 9.59615 10.5C9.59615 9.86275 10.1127 9.34615 10.75 9.34615C11.3873 9.34615 11.9038 9.86275 11.9038 10.5Z" fill={color} />
    </Svg>
);

export const ActivityIcon: React.FC<Props> = ({ color }) => (
    <Svg width="22" height="19" viewBox="0 0 19 21" fill="none" >
        <Path d="M9.49121 20.7334C8.24902 20.7334 7.08008 20.4961 5.98438 20.0215C4.88867 19.5527 3.92188 18.8994 3.08398 18.0615C2.25195 17.2236 1.59863 16.2568 1.12402 15.1611C0.649414 14.0654 0.412109 12.8965 0.412109 11.6543C0.412109 10.4121 0.649414 9.24316 1.12402 8.14746C1.59863 7.05176 2.25195 6.08789 3.08398 5.25586C3.92188 4.41797 4.88574 3.76172 5.97559 3.28711C7.07129 2.8125 8.24023 2.5752 9.48242 2.5752C10.7305 2.5752 11.9023 2.8125 12.998 3.28711C14.0938 3.76172 15.0605 4.41797 15.8984 5.25586C16.7363 6.08789 17.3926 7.05176 17.8672 8.14746C18.3418 9.24316 18.5791 10.4121 18.5791 11.6543C18.5791 12.8965 18.3418 14.0654 17.8672 15.1611C17.3926 16.2568 16.7363 17.2236 15.8984 18.0615C15.0605 18.8994 14.0938 19.5527 12.998 20.0215C11.9023 20.4961 10.7334 20.7334 9.49121 20.7334ZM9.49121 13.1748C9.91309 13.1748 10.2705 13.0283 10.5635 12.7354C10.8564 12.4424 11.0029 12.085 11.0029 11.6631C11.0029 11.376 10.9297 11.1182 10.7832 10.8896C10.6367 10.6553 10.4346 10.4707 10.1768 10.3359V6.09082C10.1768 5.90332 10.1094 5.74512 9.97461 5.61621C9.8457 5.48145 9.68164 5.41406 9.48242 5.41406C9.29492 5.41406 9.13379 5.48145 8.99902 5.61621C8.86426 5.74512 8.79688 5.90332 8.79688 6.09082V10.3271C8.55078 10.4736 8.35449 10.6641 8.20801 10.8984C8.06152 11.127 7.98828 11.3818 7.98828 11.6631C7.98828 12.0791 8.13184 12.4365 8.41895 12.7354C8.71191 13.0283 9.06934 13.1748 9.49121 13.1748ZM8.47168 3.01465V1.74023C8.47168 1.45898 8.57129 1.21875 8.77051 1.01953C8.96973 0.814453 9.20996 0.711914 9.49121 0.711914C9.77246 0.711914 10.0098 0.814453 10.2031 1.01953C10.4023 1.21875 10.502 1.45898 10.502 1.74023V3.01465H8.47168ZM15.1162 5.04492L16.0479 4.13965C16.2646 3.92871 16.5254 3.82324 16.8301 3.82324C17.1055 3.82324 17.3369 3.91699 17.5244 4.10449C17.7119 4.29199 17.8057 4.52051 17.8057 4.79004C17.8057 5.07129 17.6914 5.32617 17.4629 5.55469L16.4873 6.53027L15.1162 5.04492Z" fill={color} />
    </Svg>
);

export const BookmarkIcon: React.FC<Props> = ({ color }) => (
    <Svg width="22" height="19" viewBox="0 0 31 30" fill="none">
        <Path d="M4.5 4.98512C4.5 3.88877 5.39543 3 6.5 3H24.5C25.6046 3 26.5 3.88877 26.5 4.98512V26.0058C26.5 26.7891 25.6289 27.2637 24.9631 26.8432L16.0369 21.2051C15.7093 20.9982 15.2907 20.9982 14.9631 21.2051L6.03688 26.8432C5.37115 27.2637 4.5 26.7891 4.5 26.0058V4.98512Z" fill={color} />
    </Svg>
);

export const ProfileIcon: React.FC<Props> = ({ color }) => (
    <Svg width="22" height="19" viewBox="0 0 20 19" fill="none" >
        <Path d="M9.99121 18.7334C8.74902 18.7334 7.58008 18.4961 6.48438 18.0215C5.38867 17.5527 4.42188 16.8994 3.58398 16.0615C2.75195 15.2236 2.09863 14.2568 1.62402 13.1611C1.14941 12.0654 0.912109 10.8965 0.912109 9.6543C0.912109 8.41211 1.14941 7.24316 1.62402 6.14746C2.09863 5.05176 2.75195 4.08789 3.58398 3.25586C4.42188 2.41797 5.38574 1.76172 6.47559 1.28711C7.57129 0.8125 8.74023 0.575195 9.98242 0.575195C11.2305 0.575195 12.4023 0.8125 13.498 1.28711C14.5938 1.76172 15.5605 2.41797 16.3984 3.25586C17.2363 4.08789 17.8926 5.05176 18.3672 6.14746C18.8418 7.24316 19.0791 8.41211 19.0791 9.6543C19.0791 10.8965 18.8418 12.0654 18.3672 13.1611C17.8926 14.2568 17.2363 15.2236 16.3984 16.0615C15.5605 16.8994 14.5938 17.5527 13.498 18.0215C12.4023 18.4961 11.2334 18.7334 9.99121 18.7334ZM10 17.2393C10.6504 17.2393 11.3037 17.1514 11.96 16.9756C12.6221 16.7998 13.2461 16.5449 13.832 16.2109C14.418 15.877 14.9336 15.4727 15.3789 14.998C15.0449 14.4883 14.6025 14.0576 14.0518 13.7061C13.5068 13.3486 12.8887 13.0791 12.1973 12.8975C11.5117 12.71 10.7793 12.6162 10 12.6162C9.20312 12.6162 8.45898 12.71 7.76758 12.8975C7.07617 13.085 6.46094 13.3574 5.92188 13.7148C5.38281 14.0664 4.94629 14.4941 4.6123 14.998C5.05176 15.4727 5.56445 15.877 6.15039 16.2109C6.74219 16.5449 7.36621 16.7998 8.02246 16.9756C8.67871 17.1514 9.33789 17.2393 10 17.2393ZM10 11.0957C10.5684 11.1016 11.084 10.958 11.5469 10.665C12.0098 10.3662 12.376 9.96484 12.6455 9.46094C12.915 8.95117 13.0498 8.37988 13.0498 7.74707C13.0498 7.14941 12.9121 6.60156 12.6367 6.10352C12.3672 5.60547 12.001 5.20703 11.5381 4.9082C11.0752 4.60352 10.5625 4.45117 10 4.45117C9.42578 4.45117 8.90723 4.60352 8.44434 4.9082C7.98145 5.20703 7.6123 5.60547 7.33691 6.10352C7.06738 6.60156 6.93555 7.14941 6.94141 7.74707C6.94141 8.37988 7.07617 8.94824 7.3457 9.45215C7.61523 9.95605 7.97852 10.3545 8.43555 10.6475C8.89844 10.9404 9.41992 11.0898 10 11.0957Z" fill={color} />
    </Svg>

);

export const AddIcon: React.FC<Props> = ({ color }) => (
    <Svg height="24px" viewBox="0 -960 960 960" width="24px" fill="none"  >
        <Path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" fill={color} />
    </Svg>
);

export const ChevronRightIcon: React.FC<Props> = ({ color }) => (
    <Svg height="24px" viewBox="0 -960 960 960" width="24px" fill="none" >
        <Path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" fill={color} />
    </Svg>
);

export const CommentIcon: React.FC<Props> = ({ color }) => (
    <Svg width="31" height="30" viewBox="0 0 31 30" fill="none">
        <Path fillRule="evenodd" clipRule="evenodd" d="M29.5 13.5C29.5 13.9265 29.4727 14.3476 29.4196 14.7621C29.015 19.0905 25.21 24.8553 17.1569 27.7717C16.836 27.8879 16.5 27.6476 16.5 27.3063V24.9922C16.3341 24.9974 16.1674 25 16 25C8.54416 25 2.5 19.8513 2.5 13.5C2.5 7.14874 8.54416 2 16 2C23.4558 2 29.5 7.14874 29.5 13.5ZM10.5 16C11.6046 16 12.5 15.1046 12.5 14C12.5 12.8954 11.6046 12 10.5 12C9.39542 12 8.5 12.8954 8.5 14C8.5 15.1046 9.39542 16 10.5 16ZM16.5 16C17.6046 16 18.5 15.1046 18.5 14C18.5 12.8954 17.6046 12 16.5 12C15.3954 12 14.5 12.8954 14.5 14C14.5 15.1046 15.3954 16 16.5 16ZM24.5 14C24.5 15.1046 23.6046 16 22.5 16C21.3954 16 20.5 15.1046 20.5 14C20.5 12.8954 21.3954 12 22.5 12C23.6046 12 24.5 12.8954 24.5 14Z" fill={color} />
    </Svg>
);

export const HeartIcon: React.FC<Props> = ({ color }) => (
    <Svg width="31" height="30" viewBox="0 0 31 30" fill="none">
        <Path d="M29.5 9.99184C29.5 18.4448 21.05 24.9693 17.2796 27.4599C16.1881 28.1808 14.8123 28.1799 13.7215 27.4579C9.95167 24.9625 1.5 18.4274 1.5 9.99184C1.5 8.31449 2.01362 6.67966 2.96812 5.31893C3.92261 3.95819 5.26958 2.94054 6.81823 2.41012C8.36688 1.87969 10.0387 1.86339 11.5969 2.36352C13.155 2.86365 14.5205 3.85486 15.5 5.19674C16.4795 3.85486 17.845 2.86365 19.4031 2.36352C20.9613 1.86339 22.6331 1.87969 24.1818 2.41012C25.7304 2.94054 27.0774 3.95819 28.0319 5.31893C28.9864 6.67966 29.5 8.31449 29.5 9.99184Z" fill={color} />
    </Svg>
);

export const PlaylistIcon: React.FC<Props> = ({ color }) => (
    <Svg width="18" height="15" viewBox="0 0 18 15" fill="none" >
        <Path d="M6.19824 2.68164C4.17969 2.68164 2.92285 3.93213 2.92285 5.94434V11.1177H2.77686C1.37402 11.0859 0.618652 10.3052 0.618652 8.896V2.7832C0.618652 1.34229 1.41211 0.555176 2.85938 0.555176H11.4731C12.8696 0.555176 13.6504 1.28516 13.7075 2.63086V2.68164H6.19824ZM6.19824 14.2788C4.74463 14.2788 3.95752 13.4917 3.95752 12.0508V5.94434C3.95752 4.50342 4.74463 3.71631 6.19824 3.71631H14.8501C16.2974 3.71631 17.0908 4.50342 17.0908 5.94434V12.0508C17.0908 13.4917 16.2974 14.2788 14.8501 14.2788H6.19824ZM8.65479 11.2383C8.65479 11.543 8.99121 11.689 9.26416 11.5303L13.041 9.33398C13.3013 9.18164 13.2949 8.81982 13.0347 8.67383L9.26416 6.46484C8.99121 6.2998 8.65479 6.45215 8.65479 6.76953V11.2383Z" fill={color} />
    </Svg>
);

export const ShareIcon: React.FC<Props> = ({ color }) => (
    <Svg width="31" height="30" viewBox="0 0 31 30" fill="none">
        <Path fillRule="evenodd" clipRule="evenodd" d="M17.1193 2.2949C16.4893 1.66493 15.4122 2.1111 15.4122 3.002V8.58779C9.59571 9.49329 3.32742 12.0869 2.50334 23.0559C2.43541 23.9601 3.4196 24.3127 4.0701 23.6811C5.71358 22.0852 8.75036 20.2449 15.4122 20.2449V26.1736C15.4122 27.0645 16.4893 27.5107 17.1193 26.8807L27.998 16.002C28.779 15.221 28.779 13.9546 27.998 13.1736L17.1193 2.2949Z" fill={color} />
    </Svg>
);

export const SearchIcon: React.FC<Props> = ({ color }) => (
    <Svg width="18" height="19" viewBox="0 0 18 19" fill='none'>
        <Path d="M0.0214844 8.15137C0.0214844 12.2383 3.33496 15.5518 7.42188 15.5518C8.78418 15.5518 10.041 15.1738 11.1133 14.5234L14.6465 18.0566C14.9893 18.3994 15.4463 18.5664 15.9209 18.5664C16.9404 18.5664 17.6963 17.793 17.6963 16.791C17.6963 16.3164 17.5293 15.877 17.1865 15.5254L13.6885 12.0186C14.4092 10.9111 14.8311 9.58398 14.8311 8.15137C14.8311 4.05566 11.5176 0.742188 7.42188 0.742188C3.33496 0.742188 0.0214844 4.05566 0.0214844 8.15137ZM2.52637 8.15137C2.52637 5.44434 4.72363 3.25586 7.42188 3.25586C10.1289 3.25586 12.3262 5.44434 12.3262 8.15137C12.3262 10.8584 10.1289 13.0469 7.42188 13.0469C4.72363 13.0469 2.52637 10.8584 2.52637 8.15137Z" fill={color} />
    </Svg>
)

export const AccesBookmarkIcon: React.FC<Props> = ({ color }) => (
    <Svg width="31" height="30" viewBox="0 0 31 30" fill="none">
        <Path d="M4.5 4.98512C4.5 3.88877 5.39543 3 6.5 3H24.5C25.6046 3 26.5 3.88877 26.5 4.98512V26.0058C26.5 26.7891 25.6289 27.2637 24.9631 26.8432L16.0369 21.2051C15.7093 20.9982 15.2907 20.9982 14.9631 21.2051L6.03688 26.8432C5.37115 27.2637 4.5 26.7891 4.5 26.0058V4.98512Z" fill={color} />
    </Svg>
);