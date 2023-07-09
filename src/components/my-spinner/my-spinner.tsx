import { Spinner } from '@chakra-ui/react'


const MySpinner = () => {
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
            />
        </div>
    );
};

export default MySpinner;