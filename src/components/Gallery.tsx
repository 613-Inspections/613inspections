import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "/img/gallery/1.jpeg",
    thumbnail: "/img/gallery/1.jpeg",
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

export function Gallery() {
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
          <ImageGallery items={images} />
          {/* </div> */}
        </div>
      </div>
    </section>
  );
}
