'use client';

import React, { useState } from 'react';
import styles from './blog.module.scss';
import { useRouter } from 'next/navigation';

import { cn } from '@/utils/cn';
import { factorsdata } from '@/constants/index';

function Blog() {
  const router = useRouter();
  const [page, setpage] = useState<number>(1);
  const itemPerPage = 4;

  //    short data acording date
  const sortdata = [...factorsdata].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  //   pagination code
  const pagelastindex = page * itemPerPage;
  const pagefirstindex = pagelastindex - itemPerPage;

  const data = factorsdata.slice(pagefirstindex, pagelastindex);

  const handelnext = () => {
    if (page * itemPerPage < factorsdata.length) {
      setpage(page + 1);
    }
  };

  const handelback = () => {
    if (page > 1) {
      setpage(page - 1);
    }
  };

  const handelnumber = (val: number) => {
    setpage(val);
  };
  const handeldetails = (id: number) => {
    router.push(`blog/blog_details?id=${id}`);
  };
  return (
    <div className={styles.main}>
      <div className={styles.blogdetailsleft}>
        <div className={styles.top}>
          {data.map((val, index) => (
            <div
              key={index}
              className={styles.blogcard}
              onClick={() => handeldetails(val.id)}
            >
              <div className={styles.imgdiv}>
                <img src={val.img} alt="" className={styles.img} />
              </div>

              <div className={styles.carddetails}>
                <span className={styles.detail}>
                  <p>{val.author}</p>
                </span>
                <span className={styles.detail}>
                  <div className={styles.detaildote}></div>
                  <p>{val.date}</p>
                </span>
              </div>
              <div className={styles.info}>
                <h1 className={styles.titel}>{val.text}</h1>
                <p className={styles.information}>{val.cardContent}...</p>
                <button className={styles.cardbtn}>Read more</button>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.pagination}>
          {page > 1 && (
            <button className={styles.button} onClick={handelback}>
              Previous
            </button>
          )}

          {Array.from(
            { length: Math.ceil(factorsdata.length / itemPerPage) },
            (_, i) => i + 1
          ).map((pageNum) => (
            <button
              key={pageNum}
              className={cn(
                styles.button,
                page === pageNum ? styles.button2 : ''
              )}
              onClick={() => handelnumber(pageNum)}
            >
              {pageNum}
            </button>
          ))}

          {page * itemPerPage < factorsdata.length && (
            <button className={styles.button} onClick={handelnext}>
              Next
            </button>
          )}
        </div>
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

export default Blog;
