import React from 'react'

const Quicklinks = () => {
    return (
        <div className='grid grid-cols-5 gap-10 py-10 my-5'>
            <div className='flex flex-col items-center gap-3 '>
                <svg width="28" height="31" viewBox="0 0 28 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.35714 30.5C3.29643 30.5 2.38871 30.2332 1.634 29.6995C0.879285 29.1659 0.501286 28.5236 0.5 27.7727V3.22727C0.5 2.47727 0.878 1.83545 1.634 1.30182C2.39 0.768182 3.29771 0.500909 4.35714 0.5H23.6429C24.7036 0.5 25.6119 0.767273 26.3679 1.30182C27.1239 1.83636 27.5013 2.47818 27.5 3.22727V27.7727C27.5 28.5227 27.1226 29.165 26.3679 29.6995C25.6132 30.2341 24.7049 30.5009 23.6429 30.5H4.35714ZM4.35714 26.4091V27.7727H23.6429V26.4091H4.35714ZM4.35714 23.6818H23.6429V7.31818H4.35714V23.6818ZM4.35714 4.59091H23.6429V3.22727H4.35714V4.59091Z" fill="black" />
                </svg>
                <span className='font-[400]'>Smartphone</span>
            </div>
            <div className='flex flex-col items-center gap-3'>
                <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M21.6279 2.69512V5.16829L24.5116 7.50976V2.69512H21.6279ZM26.6744 9.26585V2.32927C26.6744 1.31951 25.867 0.5 24.8721 0.5H21.2674C20.2726 0.5 19.4651 1.31951 19.4651 2.32927V3.41219L18.8783 2.93512C17.9195 2.15639 16.728 1.73211 15.5 1.73211C14.272 1.73211 13.0805 2.15639 12.1217 2.93512L0.406605 12.4473C0.182515 12.6292 0.0387736 12.8939 0.00700149 13.1833C-0.0247707 13.4727 0.0580292 13.763 0.237186 13.9905C0.416343 14.2179 0.677181 14.3638 0.962319 14.3961C1.24746 14.4283 1.53354 14.3443 1.75763 14.1624L2.88372 13.2463V28.3049H1.0814C0.794591 28.3049 0.519534 28.4205 0.316733 28.6263C0.113932 28.8322 0 29.1113 0 29.4024C0 29.6935 0.113932 29.9727 0.316733 30.1785C0.519534 30.3844 0.794591 30.5 1.0814 30.5H29.9186C30.2054 30.5 30.4805 30.3844 30.6833 30.1785C30.8861 29.9727 31 29.6935 31 29.4024C31 29.1113 30.8861 28.8322 30.6833 28.6263C30.4805 28.4205 30.2054 28.3049 29.9186 28.3049H28.1163V13.2463L29.2438 14.1624C29.4683 14.34 29.7526 14.4206 30.0352 14.3867C30.3179 14.3529 30.5759 14.2073 30.7535 13.9816C30.9311 13.756 31.0139 13.4683 30.9839 13.1811C30.9539 12.8939 30.8136 12.6302 30.5934 12.4473L26.6744 9.26585ZM25.9535 11.4902L17.5273 4.64878C16.9519 4.18139 16.2369 3.92674 15.5 3.92674C14.7631 3.92674 14.0481 4.18139 13.4727 4.64878L5.04651 11.4902V28.3049H10.093V22.0122C10.093 21.0405 10.093 20.202 10.1824 19.5302C10.2776 18.8102 10.4924 18.121 11.0432 17.562C11.594 17.0029 12.2746 16.7849 12.9825 16.6883C13.6443 16.5976 14.4705 16.5976 15.4293 16.5976H15.5707C16.5295 16.5976 17.3557 16.5976 18.0175 16.6883C18.7269 16.7849 19.406 17.0029 19.9568 17.562C20.5076 18.121 20.7224 18.8102 20.8176 19.5302C20.907 20.202 20.907 21.0405 20.907 22.0137V28.3049H25.9535V11.4902ZM18.7442 28.3049V22.0854C18.7442 21.02 18.7413 20.3293 18.675 19.8229C18.6115 19.3473 18.5106 19.198 18.427 19.1146C18.3433 19.0312 18.1977 18.9273 17.7291 18.8629C17.2288 18.7956 16.5497 18.7927 15.5 18.7927C14.4503 18.7927 13.7698 18.7956 13.2709 18.8629C12.8023 18.9273 12.6552 19.0312 12.573 19.1146C12.4908 19.198 12.3885 19.3473 12.325 19.8229C12.2587 20.3307 12.2558 21.02 12.2558 22.0854V28.3049H18.7442ZM15.5 9.28049C15.2633 9.28049 15.0289 9.3278 14.8103 9.41973C14.5916 9.51166 14.3929 9.64641 14.2256 9.81627C14.0582 9.98613 13.9254 10.1878 13.8349 10.4097C13.7443 10.6317 13.6977 10.8695 13.6977 11.1098C13.6977 11.35 13.7443 11.5879 13.8349 11.8098C13.9254 12.0317 14.0582 12.2334 14.2256 12.4032C14.3929 12.5731 14.5916 12.7079 14.8103 12.7998C15.0289 12.8917 15.2633 12.939 15.5 12.939C15.978 12.939 16.4364 12.7463 16.7744 12.4032C17.1124 12.0602 17.3023 11.5949 17.3023 11.1098C17.3023 10.6246 17.1124 10.1593 16.7744 9.81627C16.4364 9.47321 15.978 9.28049 15.5 9.28049ZM11.5349 11.1098C11.5349 10.0424 11.9526 9.0188 12.6962 8.26408C13.4398 7.50936 14.4484 7.08537 15.5 7.08537C16.5516 7.08537 17.5602 7.50936 18.3038 8.26408C19.0474 9.0188 19.4651 10.0424 19.4651 11.1098C19.4651 12.1771 19.0474 13.2007 18.3038 13.9554C17.5602 14.7101 16.5516 15.1341 15.5 15.1341C14.4484 15.1341 13.4398 14.7101 12.6962 13.9554C11.9526 13.2007 11.5349 12.1771 11.5349 11.1098Z" fill="black" />
                </svg>
                <span className='font-[400]'>Houses and Apartments</span>
            </div>
            <div className='flex flex-col items-center gap-3 '>
                <svg width="23" height="32" viewBox="0 0 23 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.5 6.536V4C2.5 2.93913 2.92143 1.92172 3.67157 1.17157C4.42172 0.421427 5.43913 0 6.5 0H14.5C15.5609 0 16.5783 0.421427 17.3284 1.17157C18.0786 1.92172 18.5 2.93913 18.5 4V6.536C19.1081 6.88706 19.613 7.392 19.9641 8.00006C20.3151 8.60811 20.5 9.29787 20.5 10V12C21.0304 12 21.5391 12.2107 21.9142 12.5858C22.2893 12.9609 22.5 13.4696 22.5 14V16C22.5 16.5304 22.2893 17.0391 21.9142 17.4142C21.5391 17.7893 21.0304 18 20.5 18V22C20.5 22.7021 20.3151 23.3919 19.9641 23.9999C19.613 24.608 19.1081 25.1129 18.5 25.464V28C18.5 29.0609 18.0786 30.0783 17.3284 30.8284C16.5783 31.5786 15.5609 32 14.5 32H6.5C5.43913 32 4.42172 31.5786 3.67157 30.8284C2.92143 30.0783 2.5 29.0609 2.5 28V25.464C1.89194 25.1129 1.387 24.608 1.03592 23.9999C0.684852 23.3919 0.500018 22.7021 0.5 22V10C0.500018 9.29787 0.684852 8.60811 1.03592 8.00006C1.387 7.392 1.89194 6.88706 2.5 6.536ZM6.5 2C5.96957 2 5.46086 2.21071 5.08579 2.58579C4.71071 2.96086 4.5 3.46957 4.5 4V6H16.5V4C16.5 3.46957 16.2893 2.96086 15.9142 2.58579C15.5391 2.21071 15.0304 2 14.5 2H6.5ZM18.5 22V10C18.5 9.46957 18.2893 8.96086 17.9142 8.58579C17.5391 8.21071 17.0304 8 16.5 8H4.5C3.96957 8 3.46086 8.21071 3.08579 8.58579C2.71071 8.96086 2.5 9.46957 2.5 10V22C2.5 22.5301 2.71044 23.0385 3.08508 23.4135C3.45972 23.7885 3.96791 23.9995 4.498 24H16.5C17.0304 24 17.5391 23.7893 17.9142 23.4142C18.2893 23.0391 18.5 22.5304 18.5 22ZM4.5 28C4.5 28.5304 4.71071 29.0391 5.08579 29.4142C5.46086 29.7893 5.96957 30 6.5 30H14.5C15.0304 30 15.5391 29.7893 15.9142 29.4142C16.2893 29.0391 16.5 28.5304 16.5 28V26H4.5V28Z" fill="black" />
                </svg>
                <span className='font-[400]'>Electronics</span>
            </div>
            <div className='flex flex-col items-center gap-3 '>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M15.9405 0H16.0595C17.5167 0 18.6954 -2.21785e-08 19.6465 0.0982325C20.6318 0.199442 21.4876 0.415256 22.2556 0.922791C22.6992 1.21451 23.0995 1.56874 23.4433 1.97507C24.0372 2.67758 24.3527 3.50065 24.5715 4.46809C24.7829 5.39981 24.9228 6.57116 25.0969 8.01637L25.2487 9.28595C25.4273 10.7699 25.5747 11.9993 25.5553 12.9801C25.5345 14.01 25.3306 14.9581 24.637 15.7395C23.9434 16.5209 23.0266 16.838 22.0056 16.9808C21.0352 17.1163 19.7968 17.1163 18.3025 17.1163H17.1163V18.6047H23.4419C23.9196 18.6047 24.3676 18.7327 24.7516 18.9574L25.1684 17.7116C25.2543 17.4366 25.3562 17.1667 25.4735 16.9034C25.6015 16.6281 25.667 16.5194 25.7682 16.3513C26.1924 15.6532 26.746 15.0474 27.6406 14.6545C28.483 14.2824 29.5367 14.1395 30.8837 14.1395C31.1798 14.1395 31.4637 14.2571 31.673 14.4665C31.8824 14.6758 32 14.9598 32 15.2558C32 15.5519 31.8824 15.8358 31.673 16.0451C31.4637 16.2545 31.1798 16.3721 30.8837 16.3721C29.6528 16.3721 28.9637 16.509 28.541 16.6966C28.1704 16.8603 27.9308 17.091 27.6763 17.5107C27.6316 17.5851 27.6123 17.6164 27.5929 17.6536C27.5595 17.7155 27.5282 17.7785 27.4992 17.8426C27.4247 18.0063 27.3875 18.1105 27.2759 18.4439L25.99 22.3062C25.9413 22.4457 25.8671 22.5749 25.7712 22.6873C25.4729 23.4574 24.9487 24.1194 24.2674 24.5861C23.586 25.0528 22.7794 25.3025 21.9535 25.3023H17.1163V27.0378C17.9656 27.2767 18.7436 27.72 19.3821 28.3289C20.0206 28.9378 20.5003 29.6939 20.7792 30.531C20.86 30.8081 20.8303 31.1059 20.6963 31.3616C20.5623 31.6173 20.3344 31.8112 20.0605 31.9025C19.7866 31.9938 19.488 31.9755 19.2274 31.8513C18.9667 31.7271 18.7643 31.5067 18.6627 31.2365C18.4019 30.4552 17.8473 29.8061 17.1163 29.4266V30.8837C17.1163 31.1798 16.9987 31.4637 16.7893 31.673C16.58 31.8824 16.2961 32 16 32C15.7039 32 15.42 31.8824 15.2107 31.673C15.0013 31.4637 14.8837 31.1798 14.8837 30.8837V29.4251C14.1524 29.805 13.5978 30.4546 13.3373 31.2365C13.2409 31.5137 13.0391 31.7417 12.7758 31.8713C12.5125 32.0009 12.2087 32.0215 11.9302 31.9288C11.6518 31.836 11.4211 31.6373 11.288 31.3757C11.155 31.1141 11.1303 30.8106 11.2193 30.531C11.4984 29.6937 11.9783 28.9376 12.6171 28.3286C13.2558 27.7197 14.0341 27.2765 14.8837 27.0378V25.3023H10.0465C9.22063 25.3025 8.41401 25.0528 7.73265 24.5861C7.05129 24.1194 6.52706 23.4574 6.22884 22.6873C6.1329 22.5749 6.05871 22.4457 6.01005 22.3062L4.7226 18.4439C4.6627 18.2384 4.58809 18.0374 4.49935 17.8426C4.44785 17.7284 4.38919 17.6175 4.32372 17.5107C4.06921 17.091 3.82958 16.8603 3.45898 16.6966C3.03479 16.509 2.34716 16.3721 1.11628 16.3721C0.820223 16.3721 0.536294 16.2545 0.326951 16.0451C0.117608 15.8358 0 15.5519 0 15.2558C0 14.9598 0.117608 14.6758 0.326951 14.4665C0.536294 14.2571 0.820223 14.1395 1.11628 14.1395C2.46326 14.1395 3.51702 14.2809 4.36093 14.653C5.25395 15.0474 5.80763 15.6532 6.23181 16.3498C6.33302 16.5194 6.39851 16.6281 6.52651 16.9034C6.65749 17.1892 6.73042 17.405 6.83312 17.7116L7.24837 18.9574C7.63237 18.7341 8.08037 18.6047 8.55814 18.6047H14.8837V17.1163H13.6975C12.2032 17.1163 10.9648 17.1163 9.99442 16.9808C8.9734 16.838 8.05656 16.5209 7.36298 15.7395C6.6694 14.9581 6.46549 14.01 6.44465 12.9801C6.4253 11.9993 6.57265 10.7699 6.75126 9.28595L6.90307 8.01637C7.07721 6.57116 7.21712 5.39981 7.42847 4.46809C7.64726 3.50065 7.96279 2.67758 8.55665 1.97507C8.90047 1.56874 9.30084 1.216 9.74437 0.922791C10.5124 0.416744 11.3667 0.199442 12.3535 0.0982325C13.3046 -2.21785e-08 14.4833 0 15.9405 0ZM21.9535 23.0698C22.9805 23.0698 23.814 22.2363 23.814 21.2093C23.814 21.1106 23.7748 21.016 23.705 20.9462C23.6352 20.8764 23.5405 20.8372 23.4419 20.8372H8.55814C8.45945 20.8372 8.36481 20.8764 8.29503 20.9462C8.22525 21.016 8.18605 21.1106 8.18605 21.2093C8.18605 22.2363 9.01954 23.0698 10.0465 23.0698H21.9535ZM12.5827 2.31888C11.7805 2.40223 11.3235 2.55405 10.9738 2.78623C10.7079 2.96235 10.4679 3.17476 10.2608 3.4173C9.98995 3.73879 9.78456 4.1734 9.60595 4.95926C9.42288 5.76744 9.29488 6.8227 9.1133 8.34233L8.97786 9.47051C8.78735 11.0571 8.66084 12.1302 8.67721 12.934C8.69209 13.7079 8.83944 14.0368 9.03442 14.2571C9.22791 14.4759 9.53749 14.6605 10.304 14.7676C11.1018 14.8793 12.1823 14.8822 13.7808 14.8822H18.2192C19.8177 14.8822 20.8982 14.8793 21.696 14.7676C22.4625 14.6605 22.7721 14.4759 22.9671 14.2571C23.1606 14.0368 23.3079 13.7064 23.3243 12.934C23.3392 12.1287 23.2127 11.0556 23.0221 9.46902L22.8882 8.34084C22.7051 6.82121 22.5756 5.76595 22.394 4.95777C22.2154 4.17191 22.01 3.7373 21.7392 3.41581C21.5321 3.17328 21.2921 2.96086 21.0262 2.78474C20.6765 2.55256 20.2195 2.40074 19.4173 2.3174C18.5942 2.23256 17.5315 2.23107 16 2.23107C14.4685 2.23107 13.4058 2.23107 12.5827 2.3174" fill="black" />
                </svg>
                <span className='font-[400]'>Furniture</span>
            </div>
            <div className='flex flex-col items-center gap-3'>
                <svg width="43" height="28" viewBox="0 0 43 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M34.0417 9.93548C33.0383 9.93548 32.0887 10.1342 31.1929 10.4413L25.9075 0H19.7083V2.70968H24.2592L25.8358 5.81677L21.5 15.5897L18.3287 8.03871C18.8125 7.85806 19.2425 7.37032 19.2425 6.77419C19.2425 6.03355 18.6512 5.41935 17.9167 5.41935H14.3333C13.5808 5.41935 12.9717 6.03355 12.9717 6.77419C12.9717 7.51484 13.5808 8.12903 14.3333 8.12903H15.4262L19.4575 17.6129H17.7733C17.1283 13.2774 13.4375 9.93548 8.95833 9.93548C4.01333 9.93548 0 13.9819 0 18.9677C0 23.9535 4.01333 28 8.95833 28C13.4375 28 17.1283 24.6581 17.7733 20.3226H22.3958L27.3946 8.90581L28.81 11.6697C27.6592 12.5008 26.721 13.5962 26.073 14.8652C25.425 16.1342 25.0858 17.5404 25.0833 18.9677C25.0833 23.9535 29.0967 28 34.0417 28C38.9867 28 43 23.9535 43 18.9677C43 13.9819 38.9867 9.93548 34.0417 9.93548ZM8.95833 25.2903C5.50042 25.2903 2.6875 22.4542 2.6875 18.9677C2.6875 15.4813 5.50042 12.6452 8.95833 12.6452C11.9504 12.6452 14.4587 14.7768 15.0679 17.6129H7.16667V20.3226H15.0679C14.7636 21.7287 13.992 22.9879 12.8809 23.8913C11.7697 24.7948 10.3858 25.2884 8.95833 25.2903ZM34.0417 25.2903C30.5837 25.2903 27.7708 22.4542 27.7708 18.9677C27.7708 17.0168 28.6667 15.3006 30.0462 14.1445L33.2712 20.5032L35.6362 19.2026L32.4292 12.88C32.9487 12.7535 33.4862 12.6452 34.0417 12.6452C37.4996 12.6452 40.3125 15.4813 40.3125 18.9677C40.3125 22.4542 37.4996 25.2903 34.0417 25.2903Z" fill="black" />
                </svg>
                <span className='font-[400]'>Bikes</span>
            </div>
        </div>
    )
}

export default Quicklinks