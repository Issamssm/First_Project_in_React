
function Navbar() {
    return (
        <nav className="navbar">
            <svg className="logo" width="83" height="26" viewBox="0 0 83 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_2_14)">
                    <path d="M43.227 6.36977C43.227 7.28343 42.4839 8.01913 41.5616 8.01913C40.6394 8.01913 39.8968 7.28343 39.8968 6.36977C39.8968 5.45611 40.614 4.72042 41.5616 4.72042C42.51 4.74577 43.227 5.48172 43.227 6.36977ZM36.3618 9.69434V10.1005C36.3618 10.1005 35.568 9.08489 33.8773 9.08489C31.0854 9.08489 28.9077 11.1913 28.9077 14.1095C28.9077 17.0026 31.0598 19.1341 33.8773 19.1341C35.5936 19.1341 36.3618 18.0937 36.3618 18.0937V18.525C36.3618 18.728 36.5158 18.8799 36.7205 18.8799H38.7951V9.3379H36.7205C36.5158 9.33867 36.3618 9.51663 36.3618 9.69434ZM36.3618 15.8098C35.9779 16.3683 35.2092 16.8505 34.2872 16.8505C32.6479 16.8505 31.3925 15.8354 31.3925 14.1095C31.3925 12.3839 32.6479 11.3688 34.2872 11.3688C35.1839 11.3688 36.0035 11.8763 36.3618 12.4092V15.8098ZM40.3323 9.33866H42.7912V18.8806H40.3323V9.33866ZM77.0653 9.08465C75.3745 9.08465 74.5802 10.1002 74.5802 10.1002V4.74577H72.1213V18.8806H74.1964C74.4014 18.8806 74.5546 18.7029 74.5546 18.5252V18.094C74.5546 18.094 75.349 19.1344 77.0392 19.1344C79.8315 19.1344 82.0087 17.0034 82.0087 14.1103C82.0087 11.2172 79.8315 9.08465 77.0653 9.08465ZM76.6553 16.8249C75.7072 16.8249 74.9646 16.3432 74.5802 15.7845V12.3839C74.9646 11.8763 75.7842 11.3434 76.6553 11.3434C78.2946 11.3434 79.5498 12.3585 79.5498 14.0842C79.5498 15.8098 78.2949 16.8249 76.6553 16.8249ZM70.8408 13.2217V18.906H68.3813V13.5006C68.3813 11.9275 67.869 11.2927 66.4867 11.2927C65.7441 11.2927 64.9753 11.6735 64.4878 12.232V18.8809H62.0294V9.33892H63.9755C64.1805 9.33892 64.3343 9.51663 64.3343 9.69434V10.1005C65.0516 9.36427 65.9992 9.08489 66.9468 9.08489C68.0228 9.08489 68.9195 9.38987 69.6368 9.99881C70.5074 10.7094 70.8408 11.6228 70.8408 13.2217ZM56.0601 9.08465C54.3699 9.08465 53.5756 10.1002 53.5756 10.1002V4.74577H51.1166V18.8806H53.1912C53.3962 18.8806 53.55 18.7029 53.55 18.5252V18.094C53.55 18.094 54.3443 19.1344 56.0345 19.1344C58.8269 19.1344 61.0041 17.0034 61.0041 14.1103C61.0296 11.2169 58.8525 9.08465 56.0601 9.08465ZM55.6501 16.8249C54.7025 16.8249 53.9599 16.3432 53.5756 15.7845V12.3839C53.9599 11.8763 54.7796 11.3434 55.6501 11.3434C57.2899 11.3434 58.5449 12.3585 58.5449 14.0842C58.5449 15.8098 57.2899 16.8249 55.6501 16.8249ZM48.9904 9.08465C49.733 9.08465 50.1173 9.21191 50.1173 9.21191V11.4702C50.1173 11.4702 48.0681 10.7849 46.7876 12.2317V18.9057H44.3282V9.33866H46.4032C46.6082 9.33866 46.7615 9.51638 46.7615 9.69409V10.1002C47.2231 9.56708 48.2222 9.08465 48.9904 9.08465ZM23.4519 18.0177C23.324 17.7132 23.1958 17.3834 23.0678 17.104C22.8626 16.6474 22.6576 16.2157 22.4788 15.8098L22.4532 15.7845C20.6854 11.9777 18.7902 8.12079 16.7919 4.31455L16.7152 4.16193C16.505 3.76707 16.3002 3.36945 16.1007 2.96915C15.8443 2.51207 15.5884 2.03039 15.1785 1.57331C14.3588 0.558245 13.1804 -0.000244141 11.9255 -0.000244141C10.6445 -0.000244141 9.4919 0.558248 8.64692 1.52236C8.26256 1.97893 7.98056 2.46112 7.72466 2.9182C7.52475 3.31825 7.31993 3.71586 7.11025 4.11098L7.03323 4.26359C5.06076 8.06983 3.13973 11.927 1.37224 15.7335L1.34639 15.784C1.16726 16.1906 0.962032 16.6218 0.757057 17.0782C0.629108 17.3575 0.501158 17.662 0.373209 17.9918C0.0400288 18.9306 -0.0625914 19.8189 0.0658697 20.7328C0.347614 22.6362 1.62813 24.2343 3.39588 24.9454C4.06198 25.2248 4.75368 25.3515 5.47071 25.3515C5.67568 25.3515 5.93159 25.3262 6.13682 25.3006C6.98231 25.1992 7.85313 24.9203 8.69862 24.4381C9.74882 23.8543 10.7478 23.0172 11.8748 21.7991C13.0018 23.0172 14.0264 23.8543 15.051 24.4381C15.8968 24.9203 16.7674 25.1992 17.6126 25.3006C17.8176 25.3264 18.074 25.3515 18.2789 25.3515C18.9962 25.3515 19.7133 25.2248 20.3535 24.9454C22.1469 24.2343 23.4018 22.6108 23.6838 20.7328C23.8872 19.8447 23.7849 18.9569 23.4519 18.0177ZM11.8997 19.3372C10.5163 17.6115 9.61959 15.9875 9.31251 14.6176C9.18456 14.0337 9.15872 13.5262 9.23575 13.0694C9.28667 12.6632 9.44072 12.3078 9.64569 12.0033C10.1324 11.3186 10.9521 10.8869 11.8999 10.8869C12.848 10.8869 13.6932 11.293 14.1544 12.0033C14.3594 12.3078 14.5129 12.6635 14.5646 13.0694C14.6411 13.5264 14.6155 14.0591 14.4876 14.6176C14.1792 15.9622 13.2825 17.5864 11.8997 19.3372ZM22.1197 20.53C21.9406 21.8495 21.0439 22.9918 19.789 23.4994C19.1743 23.7529 18.508 23.8292 17.8424 23.7529C17.2021 23.6766 16.5614 23.4735 15.8958 23.0932C14.9735 22.5852 14.0515 21.7991 12.9755 20.6314C14.6659 18.5762 15.6905 16.6979 16.0749 15.0234C16.2543 14.2365 16.2801 13.5262 16.2028 12.866C16.1007 12.2318 15.8699 11.6479 15.5114 11.1404C14.7168 9.99805 13.3846 9.33866 11.8994 9.33866C10.4142 9.33866 9.08195 10.0239 8.2879 11.1404C7.92938 11.6479 7.69856 12.2318 7.5962 12.866C7.49384 13.5262 7.51917 14.2619 7.72415 15.0234C8.10825 16.6979 9.15847 18.6013 10.8233 20.6567C9.77314 21.8242 8.82528 22.6111 7.90302 23.1186C7.23692 23.4994 6.59692 23.7024 5.95666 23.7782C5.26522 23.8546 4.59886 23.7529 4.00978 23.5247C2.75486 23.0172 1.85819 21.8749 1.67906 20.5553C1.60229 19.921 1.65321 19.2868 1.90962 18.5762C1.98614 18.3221 2.1146 18.0686 2.24255 17.7642C2.42193 17.358 2.6264 16.9263 2.83163 16.4951L2.85748 16.4446C4.62471 12.6632 6.52015 8.80603 8.49262 5.05049L8.56939 4.89788C8.77462 4.51761 8.97959 4.11148 9.18431 3.73071C9.38929 3.32458 9.61959 2.9438 9.90159 2.61373C10.4395 2.0053 11.1565 1.67497 11.9508 1.67497C12.7451 1.67497 13.4622 2.0053 14.0001 2.61373C14.2821 2.94456 14.5124 3.32534 14.7173 3.73071C14.9226 4.11148 15.1276 4.51761 15.332 4.89788L15.409 5.05049C17.3514 8.82163 19.2217 12.6288 21.0189 16.47V16.4953C21.2241 16.902 21.4032 17.3583 21.6082 17.7649C21.7361 18.0689 21.8643 18.3224 21.9411 18.5764C22.1456 19.2356 22.2223 19.8703 22.1197 20.53Z" fill="#FF5A5F" />
                </g>
                <defs>
                    <clipPath id="clip0_2_14">
                        <rect width="82.0204" height="25.3518" fill="white" />
                    </clipPath>
                </defs>
            </svg>

        </nav>
    );
}

export default Navbar;