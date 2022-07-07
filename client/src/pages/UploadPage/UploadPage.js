import Upload from "../../components/Upload/Upload";
import Header from "../../components/Header/Header";

import "./UploadPage.scss";

function UploadPage () {
    return (
        <>
        <Header />
        <section className="upload-page">
        <Upload />
        </section>
        </>
    )
}

export default UploadPage;