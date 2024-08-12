import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import styles from "../styles/ExactPost.module.scss";

const ExactPost = ({}) => {
  const location = useLocation();
  const parts = location.pathname.split("/");
  const id = parts[parts.length - 1];

  const [dataList, setDataList] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `https://agordzineba.vercel.app/api/getData/${id}`
      );
      setDataList([response.data]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log(typeof dataList);

  useEffect(() => {
    fetchData();
  }, []);

  const url = window.location.href;
  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        {Array.isArray(dataList) &&
          dataList.map((data) => {
            console.log(data);
            return (
              <li className={styles.data} key={data._id}>
                {data.image && (
                  <img
                    src={`https://agordzineba.vercel.app/${data.image.split("/")[1]}`}
                    alt="surati"
                    style={{ width: "100px", marginLeft: "10px" }}
                  />
                )}
                <div>
                  <h3 className={styles.header}>{data.header}</h3>
                  <h3>{data.text}</h3>
                </div>
              </li>
            );
          })}
      </ul>

      <a href={`https://www.facebook.com/sharer/sharer.php?u=https://www.quixfye.com`} target="_blank">Share on Facebook</a>
    </div>
  );
};

export default ExactPost;
