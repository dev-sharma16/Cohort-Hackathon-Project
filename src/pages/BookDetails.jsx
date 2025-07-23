import React, {useEffect} from 'react'
import BookDetailSection from '../components/BookDetailSection'
import Testimonials from '../components/easyFrontend/Testimonials'

function BookDetails() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
  return (
    <>
        <BookDetailSection/>
        <Testimonials/>
    </>
  )
}

export default BookDetails