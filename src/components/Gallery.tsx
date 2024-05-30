import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { storage } from "../Firebase";
import { getDownloadURL, listAll, ref } from "firebase/storage";
import { useEffect, useState } from "react";

// const images = [
//   {
//     original: "/img/gallery/1.jpeg",
//     thumbnail: "/img/gallery/1.jpeg",
//   },
//   {
//     original: "/img/gallery/2.jpeg",
//     thumbnail: "/img/gallery/2.jpeg",
//   },
//   {
//     original: "/img/gallery/3.jpeg",
//     thumbnail: "/img/gallery/3.jpeg",
//   },
//   {
//     original: "/img/gallery/4.jpeg",
//     thumbnail: "/img/gallery/4.jpeg",
//   },
//   {
//     original: "/img/gallery/5.jpeg",
//     thumbnail: "/img/gallery/5.jpeg",
//   },
//   {
//     original: "/img/gallery/6.jpeg",
//     thumbnail: "/img/gallery/6.jpeg",
//   },
//   {
//     original: "/img/gallery/7.jpeg",
//     thumbnail: "/img/gallery/7.jpeg",
//   },
//   {
//     original: "/img/gallery/8.jpeg",
//     thumbnail: "/img/gallery/8.jpeg",
//   },
//   {
//     original: "/img/gallery/9.jpeg",
//     thumbnail: "/img/gallery/9.jpeg",
//   },
//   {
//     original: "/img/gallery/10.jpeg",
//     thumbnail: "/img/gallery/10.jpeg",
//   },
//   {
//     original: "/img/gallery/11.jpeg",
//     thumbnail: "/img/gallery/11.jpeg",
//   },
//   {
//     original: "/img/gallery/12.jpeg",
//     thumbnail: "/img/gallery/12.jpeg",
//   },
//   {
//     original: "/img/gallery/13.jpeg",
//     thumbnail: "/img/gallery/13.jpeg",
//   },
//   {
//     original: "/img/gallery/14.jpeg",
//     thumbnail: "/img/gallery/14.jpeg",
//   },
//   {
//     original: "/img/gallery/15.jpeg",
//     thumbnail: "/img/gallery/15.jpeg",
//   },
//   {
//     original: "/img/gallery/16.jpeg",
//     thumbnail: "/img/gallery/16.jpeg",
//   },
//   {
//     original: "/img/gallery/17.jpeg",
//     thumbnail: "/img/gallery/17.jpeg",
//   },
//   {
//     original: "/img/gallery/18.jpeg",
//     thumbnail: "/img/gallery/18.jpeg",
//   },
//   {
//     original: "/img/gallery/19.jpeg",
//     thumbnail: "/img/gallery/19.jpeg",
//   },
//   {
//     original: "/img/gallery/20.jpeg",
//     thumbnail: "/img/gallery/20.jpeg",
//   },
//   {
//     original: "/img/gallery/21.jpeg",
//     thumbnail: "/img/gallery/21.jpeg",
//   },
//   {
//     original: "/img/gallery/22.jpeg",
//     thumbnail: "/img/gallery/22.jpeg",
//   },
//   {
//     original: "/img/gallery/23.jpeg",
//     thumbnail: "/img/gallery/23.jpeg",
//   },
//   {
//     original: "/img/gallery/24.jpeg",
//     thumbnail: "/img/gallery/24.jpeg",
//   },
//   {
//     original: "/img/gallery/25.jpeg",
//     thumbnail: "/img/gallery/25.jpeg",
//   },
//   {
//     original: "/img/gallery/26.jpeg",
//     thumbnail: "/img/gallery/26.jpeg",
//   },
//   {
//     original: "/img/gallery/27.jpeg",
//     thumbnail: "/img/gallery/27.jpeg",
//   },
//   {
//     original: "/img/gallery/28.jpeg",
//     thumbnail: "/img/gallery/28.jpeg",
//   },
//   {
//     original: "/img/gallery/29.jpeg",
//     thumbnail: "/img/gallery/29.jpeg",
//   },
//   {
//     original: "/img/gallery/30.jpeg",
//     thumbnail: "/img/gallery/30.jpeg",
//   },
//   {
//     original: "/img/gallery/31.jpeg",
//     thumbnail: "/img/gallery/31.jpeg",
//   },
//   {
//     original: "/img/gallery/32.jpeg",
//     thumbnail: "/img/gallery/32.jpeg",
//   },
//   {
//     original: "/img/gallery/33.jpeg",
//     thumbnail: "/img/gallery/33.jpeg",
//   },
//   {
//     original: "/img/gallery/34.jpeg",
//     thumbnail: "/img/gallery/34.jpeg",
//   },
//   {
//     original: "/img/gallery/35.jpeg",
//     thumbnail: "/img/gallery/35.jpeg",
//   },
//   {
//     original: "/img/gallery/36.jpeg",
//     thumbnail: "/img/gallery/36.jpeg",
//   },
//   {
//     original: "/img/gallery/37.jpeg",
//     thumbnail: "/img/gallery/37.jpeg",
//   },
//   {
//     original: "/img/gallery/38.jpeg",
//     thumbnail: "/img/gallery/38.jpeg",
//   },
//   {
//     original: "/img/gallery/39.jpeg",
//     thumbnail: "/img/gallery/39.jpeg",
//   },
//   {
//     original: "/img/gallery/40.jpeg",
//     thumbnail: "/img/gallery/40.jpeg",
//   },
//   {
//     original: "/img/gallery/41.jpeg",
//     thumbnail: "/img/gallery/41.jpeg",
//   },
//   {
//     original: "/img/gallery/42.jpeg",
//     thumbnail: "/img/gallery/42.jpeg",
//   },
//   {
//     original: "/img/gallery/43.jpeg",
//     thumbnail: "/img/gallery/43.jpeg",
//   },
//   {
//     original: "/img/gallery/44.jpeg",
//     thumbnail: "/img/gallery/44.jpeg",
//   },
//   {
//     original: "/img/gallery/45.jpeg",
//     thumbnail: "/img/gallery/45.jpeg",
//   },
//   {
//     original: "/img/gallery/46.jpeg",
//     thumbnail: "/img/gallery/46.jpeg",
//   },
//   {
//     original: "/img/gallery/47.jpeg",
//     thumbnail: "/img/gallery/47.jpeg",
//   },
//   {
//     original: "/img/gallery/48.jpeg",
//     thumbnail: "/img/gallery/48.jpeg",
//   },
//   {
//     original: "/img/gallery/49.jpeg",
//     thumbnail: "/img/gallery/49.jpeg",
//   },
//   {
//     original: "/img/gallery/50.jpeg",
//     thumbnail: "/img/gallery/50.jpeg",
//   },
//   {
//     original: "/img/gallery/51.jpeg",
//     thumbnail: "/img/gallery/51.jpeg",
//   },
//   {
//     original: "/img/gallery/52.jpeg",
//     thumbnail: "/img/gallery/52.jpeg",
//   },
//   {
//     original: "/img/gallery/53.jpeg",
//     thumbnail: "/img/gallery/53.jpeg",
//   },
//   {
//     original: "/img/gallery/54.jpeg",
//     thumbnail: "/img/gallery/54.jpeg",
//   },
//   {
//     original: "/img/gallery/55.jpeg",
//     thumbnail: "/img/gallery/55.jpeg",
//   },
// ];

export function Gallery() {
  const [imageList, setImageList] = useState<string[]>([]);

  const imageListRef = ref(storage, "Gallery/");

  // useEffect(() => {
  //   listAll(imageListRef).then((res) => {
  //     res.items.forEach((item) => {
  //       getDownloadURL(item).then((url) => {
  //         setImageList((prev) => [...prev, url]);
  //       });
  //     });
  //   });
  // }, []);

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
