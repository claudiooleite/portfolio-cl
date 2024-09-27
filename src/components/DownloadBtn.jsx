'use client'


function DownloadButton() {
    const handleDownload = () => {
        const a = document.createElement('a');
        a.href = '/assets/claudio-leite-cv.pdf';
        a.download = 'claudio-leite-cv.pdf';
        a.click();
    };

    return (
        <div className="flex justify-center">
            <button className='bg-gunmetal text-lightGray font-semibold py-2 px-4 rounded-md' onClick={handleDownload}> Download Resume</button>
        </div>
    );
}

export default DownloadButton;