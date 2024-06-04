import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { storage } from "../Firebase";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { useEffect, useState } from "react";

export function Gallery() {
  const [imageList, setImageList] = useState<string[]>([]);

  const imageListRef = ref(storage, "Gallery/");

  useEffect(() => {
    listAll(imageListRef).then((res) => {
      const urlPromises = res.items.map((item) => getDownloadURL(item));

      Promise.all(urlPromises).then((urls) => {
        setImageList(urls);
      });
    });
  }, []);

  const galleryItems = imageList.map((url) => ({
    original: url,
    thumbnail: url,
  }));

  return (
    <section id="gallery" className="section-bg">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Gallery</h2>
          {/* <!-- <p>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p> --> */}
        </div>
        <div className="row justify-content-center" data-aos="fade-up">
          {/* <div className="col-lg-4 col-md-6"> */}
          <ImageGallery items={galleryItems} />
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
