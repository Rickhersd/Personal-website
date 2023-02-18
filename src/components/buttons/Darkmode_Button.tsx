'use client'

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes'
import { Fragment } from 'react';

const Darkmode_btn = () => {

  const { theme, setTheme } = useTheme()

  const handleClick = () => {
    setTheme(theme == "light" ? 'dark' : 'light');
  }

  return (
    <Fragment>
      <motion.button 
        animate={theme}
        onClick={handleClick}>
        <svg className="cont" width="35" height="35" viewBox="0 0 94 94" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path className="bg" fill="#6E869F" d="M73 49C73 60.598 63.598 70 52 70C40.402 70 31 60.598 31 49C31 37.402 40.402 28 52 28C53.1437 28 54.266 28.0914 55.36 28.2674C64.4063 29.7221 71.5203 36.955 72.7958 46.06C72.9304 47.0207 73 48.0022 73 49Z"/>
          <motion.path 
            className="origin-center" 
            stroke="#6E869F"
            strokeWidth="9"
            fill="transparent"
            variants={{
              light: {
                originX: '50%',
                originY: '50%',
                d: "M72 47C72 60.8071 60.8071 72 47 72C33.1929 72 22 60.8071 22 47C22 33.1929 33.1929 22 47 22C48.3615 22 49.6976 22.1088 51 22.3183C61.7694 24.0501 70.2384 32.6607 71.7569 43.5C71.9172 44.6437 72 45.8122 72 47Z",
                rotate: "-240deg"
              },
              dark: {
                originX: '50%',
                originY: '50%',
                d: "M83.9886 59.8669C83.2336 68.1625 68.5976 84 47.7493 84C26.9009 84 10 67.1178 10 46.2927C10 28.8586 21.3248 13.11 33.4045 10.0933C35.4859 9.5349 37.1795 11.6017 36.4245 13.11C25.8547 34.2257 46.2393 69.6707 80.2136 57.6045C82.4786 56.8001 84.1555 58.033 83.9886 59.8669Z",
                rotate: "0deg"
              },
            }}
            transition={{
              ease: "easeInOut",
              duration: 2,
            }}
            />
          <motion.g 
            className="origin-center fill-teal-800"
            variants= {{
              light: {
                originX: '50%',
                originY: '50%',
                scale: 1,
                opacity: 1,
              },
              dark: {
                originX: '50%',
                originY: '50%',
                scale: 0.5,
                opacity: 0,
              }
            }}
            >
            <path d="M50.5355 1.46447C51.4732 2.40215 52 3.67392 52 5V10C52 11.3261 51.4732 12.5979 50.5355 13.5355C49.5979 14.4732 48.3261 15 47 15C45.6739 15 44.4021 14.4732 43.4645 13.5355C42.5268 12.5979 42 11.3261 42 10V5C42 3.67392 42.5268 2.40215 43.4645 1.46447C44.4021 0.526784 45.6739 0 47 0C48.3261 0 49.5979 0.526784 50.5355 1.46447Z"/>
            <path d="M1.46447 43.4645C2.40215 42.5268 3.67392 42 5 42H10C11.3261 42 12.5979 42.5268 13.5355 43.4645C14.4732 44.4021 15 45.6739 15 47C15 48.3261 14.4732 49.5979 13.5355 50.5355C12.5979 51.4732 11.3261 52 10 52H5C3.67392 52 2.40215 51.4732 1.46447 50.5355C0.526784 49.5979 0 48.3261 0 47C0 45.6739 0.526784 44.4021 1.46447 43.4645Z"/>
            <path d="M50.5355 80.4645C51.4732 81.4021 52 82.6739 52 84V89C52 90.3261 51.4732 91.5979 50.5355 92.5355C49.5979 93.4732 48.3261 94 47 94C45.6739 94 44.4021 93.4732 43.4645 92.5355C42.5268 91.5979 42 90.3261 42 89V84C42 82.6739 42.5268 81.4021 43.4645 80.4645C44.4021 79.5268 45.6739 79 47 79C48.3261 79 49.5979 79.5268 50.5355 80.4645Z"/>
            <path d="M80.4645 43.4645C81.4021 42.5268 82.6739 42 84 42H89C90.3261 42 91.5979 42.5268 92.5355 43.4645C93.4732 44.4021 94 45.6739 94 47C94 48.3261 93.4732 49.5979 92.5355 50.5355C91.5979 51.4732 90.3261 52 89 52H84C82.6739 52 81.4021 51.4732 80.4645 50.5355C79.5268 49.5979 79 48.3261 79 47C79 45.6739 79.5268 44.4021 80.4645 43.4645Z"/>
            <path d="M13.9566 9.00019C15.2675 8.9888 16.5305 9.49277 17.4736 10.4036L22.4736 15.4036C23.3844 16.3466 23.8883 17.6096 23.8769 18.9206C23.8655 20.2316 23.3397 21.4856 22.4127 22.4127C21.4856 23.3397 20.2316 23.8655 18.9206 23.8769C17.6096 23.8883 16.3466 23.3844 15.4036 22.4736L10.4036 17.4736C9.49277 16.5305 8.9888 15.2675 9.00019 13.9566C9.01158 12.6456 9.53743 11.3915 10.4645 10.4645C11.3915 9.53743 12.6456 9.01158 13.9566 9.00019Z"/>
            <path d="M74.9566 70.0002C76.2675 69.9888 77.5305 70.4928 78.4736 71.4036L83.4736 76.4036C84.3844 77.3466 84.8883 78.6096 84.8769 79.9206C84.8655 81.2316 84.3397 82.4856 83.4127 83.4127C82.4856 84.3397 81.2316 84.8655 79.9206 84.8769C78.6096 84.8883 77.3466 84.3844 76.4036 83.4736L71.4036 78.4736C70.4928 77.5305 69.9888 76.2675 70.0002 74.9566C70.0116 73.6456 70.5374 72.3915 71.4645 71.4645C72.3915 70.5374 73.6456 70.0116 74.9566 70.0002Z"/>
            <path d="M79.9386 9C81.2644 9 82.5359 9.52658 83.4736 10.4639C84.4109 11.4016 84.9375 12.6731 84.9375 13.9989C84.9375 15.3248 84.4109 16.5963 83.4736 17.5339L78.4736 22.5339C77.5306 23.4447 76.2675 23.9487 74.9566 23.9373C73.6456 23.9259 72.3915 23.4001 71.4645 22.473C70.5374 21.546 70.0116 20.2919 70.0002 18.9809C69.9888 17.67 70.4928 16.4069 71.4036 15.4639L76.4036 10.4639C77.3412 9.52658 78.6127 9 79.9386 9Z"/>
            <path d="M18.9386 70C20.2644 70 21.5359 70.5266 22.4736 71.4639C23.4109 72.4016 23.9375 73.6731 23.9375 74.9989C23.9375 76.3248 23.4109 77.5963 22.4736 78.5339L17.4736 83.5339C16.5306 84.4447 15.2675 84.9487 13.9566 84.9373C12.6456 84.9259 11.3915 84.4001 10.4645 83.473C9.53743 82.546 9.01158 81.2919 9.00019 79.9809C8.9888 78.67 9.49276 77.4069 10.4036 76.4639L15.4036 71.4639C16.3412 70.5266 17.6127 70 18.9386 70Z"/>
          </motion.g> 
        </svg>
      </motion.button>
    </Fragment>
  )
}

export default Darkmode_btn;
