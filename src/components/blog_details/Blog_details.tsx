'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { useSearchParams } from 'next/navigation';

import { factorsdata } from '@/constants/index';

import styles from './blog_details.module.scss';
import { FaUser } from 'react-icons/fa';
import { FaRegCalendarAlt } from 'react-icons/fa';
type data = {
  id: number;
  img: string;
  name: string;
  date: string;
  text: string;
  author: string;
  cardContent: string;
  content: string;
};

function Blog_details() {
  const [data, setdata] = useState<data | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const product_id = searchParams.get('id');
  console.log(product_id);
  const handeldetails = (id: number) => {
    router.push(`blog/blog_details?id=${id}`);
  };
  useEffect(() => {
    if (product_id && factorsdata.length > 0) {
      const foundProduct = factorsdata.find(
        (product) => product.id == Number(product_id)
      );
      if (foundProduct) {
        setdata(foundProduct);
      }
    }
  }, [product_id, factorsdata]);
  //   short data
  const sortdata = [...factorsdata].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return (
    <div className={styles.main}>
      <div className={styles.blogdetailsleft}>
        {data && (
          <div className={styles.blogcard}>
            <h1 className={styles.titel}>{data.text}</h1>
            <div className={styles.imgdiv}>
              <img src={data.img} alt="" className={styles.img} />
            </div>

            <div className={styles.carddetails}>
              <span className={styles.detail}>
                <div className={styles.detaildote}>
                  <FaUser />
                </div>

                <p>{data.author}</p>
              </span>
              <span className={styles.detail}>
                <div className={styles.detaildote}>
                  <FaRegCalendarAlt />
                </div>
                <p>{data.date}</p>
              </span>
            </div>
            <div className={styles.info}>
              <p className={styles.information}>{data.cardContent}...</p>
              {/* <p >{data.content}</p> */}
              <p dangerouslySetInnerHTML={{ __html: data?.content }} />
            </div>
          </div>
        )}
      </div>
      <div className={styles.blogdetailsright}>
        <h1 className={styles.filterheading}>Recent Posts</h1>
        {sortdata.map((val, index) => (
          <div
            key={index}
            className={styles.fcard}
            onClick={() => handeldetails(val.id)}
          >
            <div className={styles.fiterimgdiv}>
              <img src={val.img} alt="" className={styles.fimg} />
            </div>
            <div className={styles.filterdetails}>
              <p className={styles.filterdate}>{val.date}</p>
              <h1 className={styles.filtertitle}>{val.text}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog_details;
