'use client'
function DownloadButton() {
    const handleDownload = () => {
        const a = document.createElement('a');
        a.href = pdfUrl;
        a.download = '../../public/assets/Claudio_Leite.pdf';
        a.click();
    };

    return (
        <button className='' onClick={handleDownload}> Download Resume</button>
    );
}

export default DownloadButton;