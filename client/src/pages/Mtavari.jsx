import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "../styles/Mtavari.module.scss";
import TextWithMore from "../common/TextWithMore"; // Import the new component
import backgroundImage from '../assets/bg.jpeg'

function Mtavari() {
  const [dataList, setDataList] = useState([]);
  const [exactDataList, setExactDataList] = useState("");

  const fetchPinnedData = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/data/pinned");
      setDataList(response.data);
    } catch (error) {
      console.error("Error fetching pinned data:", error);
    }
  };

  const fetchExactDataPost = async (id) => {
    console.log(id);
    try {
      const response = await axios.get(
        `http://localhost:8080/api/getData/${id}`
      );
      setExactDataList(response.data.header);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchPinnedData();
    fetchExactDataPost();
  }, []);

  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        {dataList &&
          dataList.map((data) => {
            return (
              <li className={styles.data} key={data._id}>
                {data.image && (
                  <img
                    src={`http://localhost:8080/${data.image.split("/")[1]}`}
                    alt="surati"
                    style={{ width: "100px", marginLeft: "10px" }}
                  />
                )}
                <div className={styles.textContainer}>
                  <h3>{data.header}</h3>
                  <TextWithMore text={data.text} id={data._id} />
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default Mtavari;
