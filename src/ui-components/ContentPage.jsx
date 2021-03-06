import React from 'react'

const ContentPage = ({children}) => {
    return (
        <div className='py-10 lg:container mx-auto px-7 min-h-screen'>
            {children}
        </div>
    )
}

export default ContentPage
