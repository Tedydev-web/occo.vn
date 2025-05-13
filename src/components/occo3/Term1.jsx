import animationCharCome from "@/lib/utils/animationCharCome";
import { useEffect, useRef } from "react";
import { Accordion } from "react-bootstrap";
import Detail1 from "../../../public/assets/imgs/blog/detail/1.jpg";
import Detail2 from "../../../public/assets/imgs/blog/detail/2.jpg";
import Detail3 from "../../../public/assets/imgs/blog/detail/3.jpg";
import Image from "next/image";
import Link from "next/link";

const Term1 = () => {
  const charAnim = useRef();
  useEffect(() => {
    animationCharCome(charAnim.current);
  }, []);
  return (
    <>
      <section className="faq__area-6">
        <div className="container g-0 line pt-130 pb-140">
          <div className="line-3"></div>
          <div className="row">
            <div className="col-xxl-12">
              <div className="sec-title-wrapper">
                <h2 className="sec-title-2 animation__char_come" ref={charAnim}>
                  Điều khoản sử dụng
                </h2>
                <p>
                  Điều khoản sử dụng của OCCO.
                </p>
              </div>
            </div>
          </div>

          <div className="col-xxl-8 col-xl-10 offset-xxl-2 offset-xl-1">
              <div className="blog__detail-content">
                <p>
                  We love to bring designs to life as a developer, and I aim to
                  do this using whatever front end tools are necessary. My
                  preferred tools are more modern javascript libraries like
                  React.js but I like to use whatever is best for the websites
                  needs. There are several reasons why a business would consider
                  a rebrand and it doesn’t necessarily mean the business has
                  been unsuccessful.{" "}
                </p>
                <p>
                  But in order that you may see whence all this born error of
                  those who accuse pleasure and praise pain, I will open the
                  whole matter, and explain the very things which were said by
                  that discoverer of truth and, as it were, the architect of a
                  happy life.
                </p>
                <Image
                  priority
                  width={850}
                  style={{ height: "auto" }}
                  src={Detail2}
                  alt="Blog Image"
                />
                <h2>JavaScript</h2>
                <p>
                  We love to bring designs to life as a developer, and I aim to
                  do this using whatever front end tools are necessary. My
                  preferred tools are more modern javascript libraries like
                  React.js but I like to use whatever is best for the websites
                  needs. There are several reasons why a business would consider
                  a rebrand and it doesn’t necessarily mean the business has
                  been unsuccessful.
                </p>
                <h2>Fremework</h2>
                <p>
                  Always ready to push the boundaries, especially when it comes
                  to our own platform, Our analytical eye to create a site that
                  was visually engaging and also optimised for maximum
                  performance. It also perfectly reflects the journey to help it
                  tell a story to increase its understanding and drive action.
                  To create a site that was visually engaging for maximum
                  performance.
                </p>
                <ul>
                  <li>Brand Development</li>
                  <li>UX/UI Design</li>
                  <li>Front-end Development</li>
                  <li>Copywriting</li>
                  <li>Shopify Development</li>
                </ul>
                <h2>Visual Studio</h2>
                <p>
                  Just like other pseudo-elements and pseudo-class selectors,
                  :not() can be chained with other pseudo-classes and
                  pseudo-elements. For example, the following will add a “New!”
                  word to list items that do not have a .old class name, using
                  the ::after pseudo-element:
                </p>
                <Image
                  priority
                  width={850}
                  style={{ height: "auto" }}
                  src={Detail3}
                  alt="Code"
                />
              </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Term1;
